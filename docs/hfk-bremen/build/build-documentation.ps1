param(
    [string]$Source
)

$Node = "C:\Users\Viacheslav Romanov\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$Script = Join-Path $PSScriptRoot "render-documentation.js"

if ($Source) {
    & $Node $Script $Source
} else {
    & $Node $Script
}
