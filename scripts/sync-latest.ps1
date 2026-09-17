[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$repoPath = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path

$dirty = git -C $repoPath status --porcelain
if ($dirty) {
  Write-Error "A cópia local tem alterações não salvas. Faça commit ou guarde-as antes de sincronizar: $repoPath"
}

git -C $repoPath fetch origin main
git -C $repoPath pull --ff-only origin main
Write-Host "Versão sincronizada:"
git -C $repoPath log -1 --oneline --decorate
