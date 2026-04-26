param(
    [Parameter(Mandatory = $true)]
    [string]$Source,

    [Parameter(Mandatory = $true)]
    [string]$Output,

    [switch]$Hash
)

$sourcePath = Resolve-Path -LiteralPath $Source -ErrorAction Stop
$outputPath = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath($Output)
$outputDir = Split-Path -Parent $outputPath

if ($outputDir -and -not (Test-Path -LiteralPath $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
}

$sourceRoot = $sourcePath.Path.TrimEnd('\')

Get-ChildItem -LiteralPath $sourceRoot -Recurse -File -Force -ErrorAction SilentlyContinue |
    ForEach-Object {
        $relativePath = $_.FullName.Substring($sourceRoot.Length).TrimStart('\')
        $hashValue = ""

        if ($Hash) {
            try {
                $hashValue = (Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256 -ErrorAction Stop).Hash.ToLowerInvariant()
            }
            catch {
                $hashValue = "hash_error"
            }
        }

        [PSCustomObject]@{
            relative_path = $relativePath
            full_path = $_.FullName
            name = $_.Name
            extension = $_.Extension.ToLowerInvariant()
            size_bytes = $_.Length
            modified_utc = $_.LastWriteTimeUtc.ToString("o")
            created_utc = $_.CreationTimeUtc.ToString("o")
            sha256 = $hashValue
        }
    } |
    Export-Csv -LiteralPath $outputPath -NoTypeInformation -Encoding UTF8

Write-Output "Inventory written to $outputPath"

