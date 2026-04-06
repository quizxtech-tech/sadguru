# Usage: Run this script from the project root in PowerShell.
# It will create a portable bundle containing the HomeMain page,
# its dependent code folders, and required images into portable/home-main-bundle.

Param(
  [string]$BundleRoot = "portable/home-main-bundle"
)

$ErrorActionPreference = "Stop"

function New-Dir($path) {
  if (-not (Test-Path $path)) { New-Item -ItemType Directory -Path $path | Out-Null }
}

Write-Host "Creating bundle at $BundleRoot ..."
New-Dir $BundleRoot

# Copy src code dependencies (keep structure under src/)
$srcRoots = @(
  "src/pages/homes/home/HomeMain.tsx",
  # Components used on HomeMain
  "src/components/testimonial",
  "src/components/text-slider",
  "src/components/award",
  "src/components/funfact",
  "src/components/project",
  "src/components/service",
  "src/components/video-area",
  "src/components/hero-banner",
  "src/components/about",
  "src/components/work",
  "src/components/shared",
  # Header/Footer layouts
  "src/layouts/headers",
  "src/layouts/footers",
  # Hooks and utils referenced
  "src/hooks/useCursorAndBackground.ts",
  "src/hooks/useScrollSmooth.ts",
  "src/hooks/useGsapAnimation.ts",
  "src/utils/titleAnimation.ts",
  # Data consumed by components
  "src/data/panelsData.ts",
  "src/data/serviceData.ts",
  # SVG icons and exports
  "src/svg",
  # Plugins used by cursor hook
  "src/plugins"
)

foreach ($item in $srcRoots) {
  $srcPath = Join-Path -Path "." -ChildPath $item
  if (Test-Path $srcPath) {
    $destPath = Join-Path -Path $BundleRoot -ChildPath $item
    New-Dir (Split-Path -Parent $destPath)
    if ((Get-Item $srcPath).PSIsContainer) {
      Write-Host "Copying directory: $item"
      Copy-Item $srcPath -Destination $destPath -Recurse -Force
    } else {
      Write-Host "Copying file: $item"
      Copy-Item $srcPath -Destination $destPath -Force
    }
  } else {
    Write-Warning "Missing path (skipped): $item"
  }
}

# Copy public assets (images) referenced by these components
$publicItems = @(
  # Logos
  "public/assets/img/logo",
  # Home-01 assets (hero, about, testimonial, video, award)
  "public/assets/img/home-01",
  # Backgrounds used in hero
  "public/assets/img/bg-wrap-2.jpg"
)

foreach ($pub in $publicItems) {
  $pubPath = Join-Path -Path "." -ChildPath $pub
  if (Test-Path $pubPath) {
    $destPath = Join-Path -Path $BundleRoot -ChildPath $pub
    New-Dir (Split-Path -Parent $destPath)
    if ((Get-Item $pubPath).PSIsContainer) {
      Write-Host "Copying directory: $pub"
      Copy-Item $pubPath -Destination $destPath -Recurse -Force
    } else {
      Write-Host "Copying file: $pub"
      Copy-Item $pubPath -Destination $destPath -Force
    }
  } else {
    Write-Warning "Missing path (skipped): $pub"
  }
}

# Add a minimal tsconfig.json with @ alias for the bundle consumer (optional helper)
$tsconfigPath = Join-Path -Path $BundleRoot -ChildPath "tsconfig.json"
if (-not (Test-Path $tsconfigPath)) {
  $ts = @'{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}'
  $ts | Out-File -FilePath $tsconfigPath -Encoding UTF8 -Force
}

Write-Host "Done. Bundle created at $BundleRoot"

