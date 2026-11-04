# 選機顧問

九個繁體中文 Apple 選購工具，一個入口。核心是**選機問答**：回答兩三個問題，直接推薦最適合的機型，附推薦理由與晶片、GPU、記憶體、續航完整規格。純前端、零外部依賴、免登入，所有資料只留在使用者自己的裝置裡。

**線上瀏覽：https://jasperian0122-ux.github.io/apple-lineup/**

## 站點

| 目錄 | 內容 |
|---|---|
| `advisor/` | 選機問答：選品類 → 回答問題 → 推薦前三名，支援四幣別與可分享的結果連結 |
| `apple-lineup/` | Apple 2026 全產品線總覽，四種幣別（HK$／MOP$／NT$／US$）共 41 頁 |
| `spec-compare/` | 機型規格並排比較 |
| `upgrade-guide/` | 換機與升級建議 |
| `subs-compare/` | Apple One 等訂閱服務月費比價 |
| `compat/` | 相容性查詢：系統版本、快充瓦數、5G／eSIM、連接埠 |
| `resale-calc/` | 二手殘值估算，含 24 個月折舊曲線 |
| `finance-calc/` | 分期月付、教育價、四幣別換算 |
| `apple-encyclopedia/` | Apple 產品年表 |
| `download/` | macOS／Windows／iOS／Android／Android TV 五平台下載頁 |

根目錄 `index.html` 為總入口。

## 技術

- 純靜態 HTML／CSS／JavaScript，無建置流程、無框架、無 CDN 依賴
- 字型、圖示、樣式全部內建，離線可用（`sw.js` 提供 Service Worker 快取）
- 全站使用相對路徑，可直接部署於任何子路徑（目前為 `/apple-lineup/`）
- 推薦結果可用 hash 分享：`advisor/#mac-0-1-2` 打開即顯示對應答案的推薦
- `manifest.webmanifest` 支援加入主屏幕（PWA）

## 資料

`advisor/data.js` 內含 28 款機型（Mac 9、iPhone 4、iPad 4、Watch 3、AirPods 4、Vision 1、Home 3）的價格與規格。價格取自 Apple 香港／美國官網 2026 年 11 月；澳門幣、新台幣依 1 HKD ≈ 1.03 MOP ≈ 4.05 TWD 換算。未取得官方數值的規格標為 `null`，介面顯示「依官網」，不猜測、不編造。

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
