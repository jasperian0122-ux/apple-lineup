# Apple Hub｜十四站工作室

十四個繁體中文靜態網站，一個入口。純前端、零外部依賴、免登入，所有資料只留在使用者自己的裝置裡。

**線上瀏覽：https://jasperian0122-ux.github.io/apple-lineup/**

## 站點

| 目錄 | 內容 |
|---|---|
| `apple-lineup/` | Apple 2026 全產品線總覽，四種幣別（HK$／MOP$／NT$／US$）共 41 頁 |
| `apple-encyclopedia/` | Apple 產品年表與冷知識 |
| `spec-compare/` | 機型規格並排比較 |
| `subs-compare/` | Apple One 等訂閱服務月費比價 |
| `upgrade-guide/` | 換機與升級建議 |
| `resale-calc/` | 二手殘值估算，含 24 個月折舊曲線 |
| `compat/` | 相容性查詢：系統版本、快充瓦數、5G／eSIM、連接埠 |
| `finance-calc/` | 分期月付、教育價、四幣別換算 |
| `download/` | macOS／Windows／iOS／Android／Android TV 五平台下載頁 |
| `expense-tracker/` | 記帳工具 |
| `countdown/` | 倒數計時 |
| `invoice-check/` | 發票對獎 |
| `travel-hk/` | 香港旅遊攻略 |
| `portfolio/` | 個人作品集 |
| `linkhub/` | 連結彙整頁 |

根目錄 `index.html` 為總入口。

## 技術

- 純靜態 HTML／CSS／JavaScript，無建置流程、無框架、無 CDN 依賴
- 字型、圖示、樣式全部內建，離線可用（`sw.js` 提供 Service Worker 快取）
- 全站使用相對路徑，可直接部署於任何子路徑（目前為 `/apple-lineup/`）
- `manifest.webmanifest` 支援加入主屏幕（PWA）

## 安裝包

| 平台 | 檔案 | 取得方式 |
|---|---|---|
| iOS | `.ipa`（約 1 MB） | 隨本站部署，需自行簽名（愛思助手／Sideloadly／AltStore） |
| Android | `.apk`（約 1 MB） | 隨本站部署 |
| Android TV | `.apk`（約 1 MB） | 隨本站部署 |
| macOS | `.dmg` 115 MB、`.zip` 102 MB | [Releases](../../releases) |
| Windows | `.zip` 110 MB | [Releases](../../releases) |

> GitHub 單檔上限 100 MB，超過的安裝包改由 Releases 提供，下載頁已指向對應資產。

## 本機預覽

```bash
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

## 授權

內容整理自 Apple 官方公開資訊，商標與產品名稱歸 Apple Inc. 所有。售價與規格僅供參考，實際以官方公告為準。
