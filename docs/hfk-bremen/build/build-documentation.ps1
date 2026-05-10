param(
    [string]$Source
)

$BundledNode = "C:\Users\Viacheslav Romanov\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$Node = if (Test-Path $BundledNode) { $BundledNode } else { "node" }
$Script = Join-Path $PSScriptRoot "render-documentation.js"

if ($Source) {
    & $Node $Script $Source
} else {
    & $Node $Script
}
