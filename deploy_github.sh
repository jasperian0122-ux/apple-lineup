#!/usr/bin/env bash
# 一鍵部署到 GitHub Pages
# 用法：GH_TOKEN=ghp_xxx ./deploy_github.sh
#   或：./deploy_github.sh ghp_xxx
#
# 做四件事：
#   1. 推 main 分支（強制覆蓋，遠端舊版四地區靜態站會被新站群取代）
#   2. 建 Release v1.1.0，上傳 dmg / zip 三個超過 100 MB 的安裝包
#   3. 開啟 GitHub Pages（main 分支根目錄）
#   4. 印出線上網址

set -euo pipefail
cd "$(dirname "$0")"

OWNER="jasperian0122-ux"
REPO="apple-lineup"
TAG="v1.1.0"
TOKEN="${GH_TOKEN:-${1:-}}"

if [ -z "$TOKEN" ]; then
  echo "缺少 token。用法：GH_TOKEN=ghp_xxx ./deploy_github.sh" >&2
  exit 1
fi

API="https://api.github.com/repos/$OWNER/$REPO"
AUTH=(-H "Authorization: Bearer $TOKEN" -H "Accept: application/vnd.github+json" -H "X-GitHub-Api-Version: 2022-11-28")

echo "==> 1/4 推送 main"
git remote remove origin 2>/dev/null || true
git remote add origin "https://x-access-token:${TOKEN}@github.com/${OWNER}/${REPO}.git"
git push --force origin main
git remote set-url origin "https://github.com/${OWNER}/${REPO}.git"

echo "==> 2/4 建立 Release $TAG"
REL_ID=$(curl -sS "${AUTH[@]}" "$API/releases/tags/$TAG" | python3 -c "import json,sys;print(json.load(sys.stdin).get('id',''))" 2>/dev/null || true)
if [ -z "$REL_ID" ]; then
  REL_ID=$(curl -sS "${AUTH[@]}" -X POST "$API/releases" \
    -d "{\"tag_name\":\"$TAG\",\"name\":\"選機顧問 $TAG\",\"body\":\"選機顧問站群。macOS / Windows 安裝包（單檔超過 GitHub 100 MB 限制，改由 Release 提供）；ipa、apk 直接隨 Pages 部署。\",\"draft\":false,\"prerelease\":false}" \
    | python3 -c "import json,sys;print(json.load(sys.stdin)['id'])")
  echo "    新 Release ID: $REL_ID"
else
  echo "    Release 已存在，ID: $REL_ID"
fi

echo "==> 3/4 上傳大型安裝包"
for f in \
  "download/files/Apple-Hub-1.1.0-mac-x64.dmg" \
  "download/files/Apple-Hub-1.1.0-mac-x64.zip" \
  "download/files/Apple-Hub-1.1.0-win-x64.zip"; do
  [ -f "$f" ] || { echo "    跳過（不存在）：$f"; continue; }
  name=$(basename "$f")
  size=$(du -h "$f" | cut -f1)
  echo "    $name ($size)"
  curl -sS --http1.1 --max-time 900 "${AUTH[@]}" -X POST \
    -H "Content-Type: application/octet-stream" \
    --data-binary "@$f" \
    "https://uploads.github.com/repos/$OWNER/$REPO/releases/$REL_ID/assets?name=$name" \
    -o /dev/null -w "      HTTP %{http_code}\n"
done

echo "==> 4/4 開啟 GitHub Pages"
curl -sS "${AUTH[@]}" -X POST "$API/pages" \
  -d '{"source":{"branch":"main","path":"/"}}' -o /dev/null -w "    建立 Pages：HTTP %{http_code}\n" || true
curl -sS "${AUTH[@]}" -X PUT "$API/pages" \
  -d '{"source":{"branch":"main","path":"/"}}' -o /dev/null -w "    設定來源：HTTP %{http_code}\n" || true

echo
echo "完成。首頁：https://${OWNER}.github.io/${REPO}/"
echo "Pages 首次建置約 1–3 分鐘，可用下列指令確認："
echo "  curl -s -o /dev/null -w '%{http_code}\\n' https://${OWNER}.github.io/${REPO}/"
