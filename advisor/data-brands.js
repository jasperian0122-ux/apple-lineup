/* 選機顧問 — 其他品牌機型（三星／小米／Google／OnePlus）
   價格來源（2026 年 11 月查證）：
   - Samsung：samsung.com/hk 官網標價
   - Xiaomi：mi.com/hk 官網標價（另註官網常見促銷價）
   - Google：美國 Google Store 官價，港幣按 US$ × 7.81 換算（香港無官方渠道）
   - OnePlus：香港平行進口商 oneplusmobile.hk 標價（香港無官方渠道）
   規格只寫有官方依據的欄位，未取得者填 null，介面不顯示、不臆測。 */

(function () {
  var D = window.ADVISOR;

  D.brands = [
    { id: 'all',     name: '不限品牌' },
    { id: 'apple',   name: 'Apple' },
    { id: 'samsung', name: '三星' },
    { id: 'xiaomi',  name: '小米' },
    { id: 'google',  name: 'Google' },
    { id: 'oneplus', name: 'OnePlus' }
  ];

  /* Apple 機型補上品牌欄位 */
  D.models.forEach(function (m) { m.brand = m.brand || 'apple'; m.brandName = m.brandName || 'Apple'; });

  var extra = [
    /* ================= 三星 ================= */
    { id:'ss-s26u', cat:'phone', brand:'samsung', brandName:'三星', name:'Galaxy S26 Ultra', sub:'6.9 吋 · S Pen 內建',
      chip:'Snapdragon 8 Elite Gen 5 for Galaxy', gpu:null, ram:'12GB / 16GB', storage:'256GB 起',
      screen:'6.9 吋 Dynamic AMOLED 2X 120Hz（2,600 nits）', battery:'5,000mAh・影片 31 小時', weight:'214 g',
      priceHK:10198, priceUS:null, tags:['camera','bigscreen','premium','pro'],
      best:'要拍照、手寫、當小型工作站的人',
      why:'2 億像素四鏡加 5,000 萬長焦、內建 S Pen、還有防偷看的隱私螢幕——旗艦規格最齊的一台，AI 功能也全部到位。',
      caveat:'214g 是這份名單裡偏重的；HK$10,198 起，同容量比 iPhone 更貴。' },

    { id:'ss-fold7', cat:'phone', brand:'samsung', brandName:'三星', name:'Galaxy Z Fold7', sub:'8 吋摺疊 · 可當平板',
      chip:'Snapdragon 8 Elite for Galaxy', gpu:null, ram:'12GB / 16GB', storage:'256GB 起',
      screen:'8 吋主螢幕 + 6.5 吋封面螢幕，120Hz', battery:'4,400mAh', weight:'215 g',
      priceHK:15198, priceUS:null, tags:['bigscreen','work','premium','media'],
      best:'要一台裝置同時當手機和平板',
      why:'攤開是 8 吋大螢幕看文件、改表格，收起來是正常手機——通勤時不用帶兩台裝置，這是 Fold 唯一但很強的理由。',
      caveat:'HK$15,198 起、215g，摺痕與轉軸耐用度仍是這類產品的長期成本。' },

    { id:'ss-flip7', cat:'phone', brand:'samsung', brandName:'三星', name:'Galaxy Z Flip7', sub:'摺起來只有掌心大',
      chip:'Exynos 2500', gpu:null, ram:'12GB', storage:'256GB 起',
      screen:'6.9 吋主螢幕 + 4.1 吋封面螢幕，120Hz', battery:'4,300mAh', weight:'188 g',
      priceHK:8698, priceUS:null, tags:['compact','premium','camera'],
      best:'要小巧、又要旗艦鏡頭的人',
      why:'摺起來口袋放得下，放桌上還能免手持自拍——想要小手機又不接受規格縮水，目前只有這條路。',
      caveat:'4,300mAh 續航一般，重度使用一天要充兩次。' },

    { id:'ss-a56', cat:'phone', brand:'samsung', brandName:'三星', name:'Galaxy A56 5G', sub:'中階主力',
      chip:'Exynos 1580', gpu:null, ram:'8GB', storage:'128GB / 256GB',
      screen:'6.7 吋 Super AMOLED 120Hz', battery:'5,000mAh', weight:'198 g',
      priceHK:3698, priceUS:null, tags:['budget','bigscreen','daily'],
      best:'預算四千內、要耐用的人',
      why:'HK$3,698 就有三星的 AMOLED 120Hz 螢幕、5,000mAh 和四年系統更新——長輩機、學生機最穩的選擇。',
      caveat:'Exynos 1580 只夠日常，大型遊戲與重度多工會明顯吃力。' },

    { id:'ss-tabs11', cat:'tablet', brand:'samsung', brandName:'三星', name:'Galaxy Tab S11', sub:'11 吋 · 附 S Pen',
      chip:'MediaTek Dimensity 9400+', gpu:null, ram:'12GB', storage:'128GB 起',
      screen:'11 吋 AMOLED 120Hz', battery:null, weight:null,
      priceHK:6788, priceUS:null, tags:['work','media','study','creative'],
      best:'要筆、要螢幕、預算一萬內',
      why:'11 吋 AMOLED 加 S Pen 直接附在盒裡，價位只有 iPad Pro 的一半——做筆記、看 PDF、追劇一次解決。',
      caveat:'Android 平板的大型專業 App 仍比 iPad 少，剪片、專業繪圖選擇有限。' },

    { id:'ss-tabs11u', cat:'tablet', brand:'samsung', brandName:'三星', name:'Galaxy Tab S11 Ultra', sub:'14.6 吋 · 桌面級',
      chip:'MediaTek Dimensity 9400+', gpu:null, ram:'12GB / 16GB', storage:'256GB 起',
      screen:'14.6 吋 AMOLED 120Hz', battery:'11,600mAh', weight:null,
      priceHK:10588, priceUS:null, tags:['work','media','creative','premium'],
      best:'要把平板當第二螢幕或繪圖板',
      why:'14.6 吋幾乎等於一台筆電的視野，加鍵盤就是文書機、加筆就是繪圖板，桌面模式讓分割視窗真的可用。',
      caveat:'10,588 起、機身接近筆電大小，通勤帶出門並不現實。' },

    { id:'ss-tabs10lite', cat:'tablet', brand:'samsung', brandName:'三星', name:'Galaxy Tab S10 Lite', sub:'10.9 吋 · 入門',
      chip:null, gpu:null, ram:'6GB / 8GB', storage:'128GB 起',
      screen:'10.9 吋 LCD', battery:null, weight:null,
      priceHK:2788, priceUS:null, tags:['media','budget','study'],
      best:'追劇、看教材、給小孩用',
      why:'不到三千的十吋平板，看片、上網、讀 PDF 都夠用，摔了也不心痛。',
      caveat:'LCD 螢幕與入門處理器，別期待流暢遊戲或繪圖體驗。' },

    { id:'ss-w8', cat:'watch', brand:'samsung', brandName:'三星', name:'Galaxy Watch8（40mm）', sub:'藍牙版',
      chip:'Exynos W1000', gpu:null, ram:'2GB', storage:'32GB',
      screen:'1.3 吋 AMOLED', battery:'約 30 小時', weight:'30 g',
      priceHK:2598, priceUS:null, tags:['daily','simple','sport'],
      best:'Android 用戶的日常手錶',
      why:'通知、心率、睡眠、運動都有，30 小時續航一天充一次就夠——Android 手機配它最省事。',
      caveat:'只支援 Android 配對，iPhone 用不了。' },

    { id:'ss-w8c', cat:'watch', brand:'samsung', brandName:'三星', name:'Galaxy Watch8 Classic（46mm LTE）', sub:'實體錶圈 · 可獨立通話',
      chip:'Exynos W1000', gpu:null, ram:'2GB', storage:'64GB',
      screen:'1.34 吋 AMOLED', battery:'約 30 小時', weight:null,
      priceHK:4198, priceUS:null, tags:['premium','daily','sport'],
      best:'喜歡機械感、要 LTE',
      why:'實體旋轉錶圈轉起來比觸控準確，LTE 讓你不帶手機也能出門跑步接電話。',
      caveat:'46mm 對細手腕偏大；LTE 要另外加電信方案。' },

    { id:'ss-wultra', cat:'watch', brand:'samsung', brandName:'三星', name:'Galaxy Watch Ultra（2025）', sub:'47mm LTE · 鈦金屬',
      chip:'Exynos W1000', gpu:null, ram:'2GB', storage:'64GB',
      screen:'1.5 吋 AMOLED（3,000 nits）', battery:'590mAh', weight:null,
      priceHK:5098, priceUS:null, tags:['sport','premium','daily'],
      best:'行山、潛水、長時間戶外',
      why:'鈦金屬錶殼、590mAh 大電池、雙頻 GPS，戶外一整天不用擔心電量與定位飄移。',
      caveat:'5,098 起，體積重量都是給運動員的，日常配戴偏厚重。' },

    { id:'ss-buds3pro', cat:'earbuds', brand:'samsung', brandName:'三星', name:'Galaxy Buds3 Pro', sub:'雙單體 · 自適應降噪',
      chip:null, gpu:null, ram:null, storage:null,
      screen:null, battery:'耳機約 6 小時／含盒約 30 小時', weight:null,
      priceHK:1998, priceUS:null, tags:['anc','comfort','premium'],
      best:'要音質與降噪一起到位',
      why:'雙單體加自適應降噪，音質是安卓陣營前段班；配三星手機還能走 24bit 無損傳輸。',
      caveat:'價位已接近 AirPods Pro，非三星手機部分功能用不到。' },

    { id:'ss-buds3fe', cat:'earbuds', brand:'samsung', brandName:'三星', name:'Galaxy Buds3 FE', sub:'千元有降噪',
      chip:null, gpu:null, ram:null, storage:null,
      screen:null, battery:'耳機約 6 小時／含盒約 30 小時', weight:null,
      priceHK:998, priceUS:null, tags:['budget','light','daily'],
      best:'通勤、上課、備用耳機',
      why:'千元內有主動降噪與清楚通話，掉了也不心痛——三星手機用戶最划算的配件。',
      caveat:'不支援無線充電，降噪深度與 Pro 差距明顯。' },

    /* ================= 小米 ================= */
    { id:'mi-17', cat:'phone', brand:'xiaomi', brandName:'小米', name:'Xiaomi 17', sub:'6.3 吋小旗艦',
      chip:'Snapdragon 8 Elite Gen 5', gpu:null, ram:'12GB', storage:'256GB / 512GB',
      screen:'6.3 吋 AMOLED 120Hz', battery:null, weight:null,
      priceHK:5999, priceUS:null, tags:['camera','compact','premium'],
      best:'要小手機、又要頂級效能',
      why:'6.3 吋機身塞進高通最新旗艦晶片，HK$5,999 就買到頂級效能——想要小手機又不付 iPhone 價的人。',
      caveat:'香港系統更新與售後節奏比三星慢；部分 AI 功能要綁小米帳號。' },

    { id:'mi-15u', cat:'phone', brand:'xiaomi', brandName:'小米', name:'Xiaomi 15 Ultra', sub:'一吋主攝 · 2 億長焦',
      chip:'Snapdragon 8 Elite', gpu:null, ram:'16GB', storage:'512GB / 1TB',
      screen:'6.73 吋 AMOLED 120Hz（3,200 nits）', battery:'6,000mAh・90W 有線／80W 無線', weight:'226 g',
      priceHK:8999, priceUS:null, tags:['camera','premium','bigscreen'],
      best:'把手機當相機用的人',
      why:'一吋主攝加 2 億像素長焦，硬體是這份名單裡最強的拍照組合；官網常見促銷價 HK$7,499，性價比直接翻倍。',
      caveat:'226g 加上巨大相機模組，手感偏重；標價與實際成交價差距大，買前先看官網。' },

    { id:'mi-pocof8u', cat:'phone', brand:'xiaomi', brandName:'小米', name:'POCO F8 Ultra', sub:'效能價格比之王',
      chip:'Snapdragon 8 Elite Gen 5', gpu:null, ram:'12GB / 16GB', storage:'256GB 起',
      screen:null, battery:null, weight:null,
      priceHK:4999, priceUS:null, tags:['pro','bigscreen','budget'],
      best:'玩遊戲、要跑分、預算五千',
      why:'同代高通旗艦晶片只賣 HK$4,999，效能價格比全場最高，玩大型手遊、跑模擬器都不卡。',
      caveat:'相機與機身用料是入門旗艦水準；防水與無線充電要看清楚版本。' },

    { id:'mi-redminote14p', cat:'phone', brand:'xiaomi', brandName:'小米', name:'Redmi Note 14 Pro+', sub:'三千內主力',
      chip:'Snapdragon 7s Gen 3', gpu:null, ram:'8GB / 12GB', storage:'256GB 起',
      screen:'6.67 吋 AMOLED 120Hz', battery:'5,110mAh・90W', weight:null,
      priceHK:2799, priceUS:null, tags:['budget','camera','daily'],
      best:'學生機、長輩機、備用機',
      why:'不到三千有 2 億像素主攝、120Hz AMOLED 與 90W 快充，日常使用完全不輸萬元機。',
      caveat:'中階晶片，兩三年後跑大型 App 會開始吃力。' },

    { id:'mi-pad8pro', cat:'tablet', brand:'xiaomi', brandName:'小米', name:'Xiaomi Pad 8 Pro', sub:'11.2 吋 3.2K 144Hz',
      chip:'Snapdragon 8 Elite', gpu:null, ram:'8GB / 12GB', storage:'256GB / 512GB',
      screen:'11.2 吋 3.2K 144Hz', battery:null, weight:null,
      priceHK:4199, priceUS:null, tags:['study','media','work','creative'],
      best:'要效能、預算一萬內',
      why:'旗艦晶片加 3.2K 144Hz 螢幕，HK$4,199 打到 iPad Air 的效能、只要一半價錢。',
      caveat:'Android 平板專業 App 少；鍵盤與觸控筆要另外買。' },

    { id:'mi-padmini', cat:'tablet', brand:'xiaomi', brandName:'小米', name:'Xiaomi Pad Mini', sub:'8.8 吋 · 單手可握',
      chip:null, gpu:null, ram:'8GB', storage:'256GB',
      screen:'8.8 吋', battery:null, weight:null,
      priceHK:3499, priceUS:null, tags:['portable','media','study'],
      best:'通勤看書、看漫畫',
      why:'8.8 吋單手就拿得住，看書、看漫畫、追劇比手機舒服，又比大平板好帶。',
      caveat:'小螢幕做筆記與分割視窗體驗有限。' },

    { id:'mi-watchs4', cat:'watch', brand:'xiaomi', brandName:'小米', name:'Xiaomi Watch S4（41mm）', sub:'千元有找',
      chip:null, gpu:null, ram:null, storage:null,
      screen:'1.32 吋 AMOLED', battery:'典型使用約 8 天', weight:null,
      priceHK:999, priceUS:null, tags:['budget','daily','simple'],
      best:'不想天天充電的人',
      why:'不到一千、續航以「天」計，通知、心率、血氧都有——最實際的入門智慧錶。',
      caveat:'App 生態與運動數據分析遠不如 watchOS／Wear OS。' },

    { id:'mi-buds5pro', cat:'earbuds', brand:'xiaomi', brandName:'小米', name:'Xiaomi Buds 5 Pro', sub:'55dB 降噪',
      chip:null, gpu:null, ram:null, storage:null,
      screen:null, battery:'耳機約 8 小時／含盒約 40 小時', weight:null,
      priceHK:1599, priceUS:null, tags:['anc','comfort','premium'],
      best:'要音質又要續航',
      why:'圈瓷單體加 55dB 降噪，配小米手機有無損傳輸，1,599 這個價位的音質表現很突出。',
      caveat:'非小米手機只能用基本藍牙連線，進階功能與 App 支援有限。' },

    { id:'mi-redmibuds6p', cat:'earbuds', brand:'xiaomi', brandName:'小米', name:'Redmi Buds 6 Pro', sub:'三百多有降噪',
      chip:null, gpu:null, ram:null, storage:null,
      screen:null, battery:null, weight:null,
      priceHK:369, priceUS:null, tags:['budget','light','sport'],
      best:'運動耳機、備用耳機',
      why:'三百多元就有降噪與 IP 防護，跑步流汗、通勤弄丟都不心痛。',
      caveat:'通話降噪一般，捷運上講電話對方會聽到環境音。' },

    /* ================= Google ================= */
    { id:'go-p10', cat:'phone', brand:'google', brandName:'Google', name:'Pixel 10', sub:'Tensor G5 · 原生 Android',
      chip:'Tensor G5', gpu:null, ram:'12GB', storage:'128GB 起',
      screen:'6.3 吋 Actua 120Hz', battery:null, weight:null,
      priceHK:6240, priceUS:799, tags:['camera','compact','value'],
      best:'要最穩的隨手拍與原生系統',
      why:'Google 的相機演算法讓隨手拍成功率極高，加上七年系統更新與最乾淨的 Android——軟體體驗是它的核心賣點。',
      caveat:'香港沒有官方渠道，只能買平行進口，保固與 eSIM 支援要先問清楚。' },

    { id:'go-p10pro', cat:'phone', brand:'google', brandName:'Google', name:'Pixel 10 Pro', sub:'多一顆長焦',
      chip:'Tensor G5', gpu:null, ram:'16GB', storage:'128GB 起',
      screen:'6.3 吋 Super Actua 120Hz', battery:null, weight:null,
      priceHK:7800, priceUS:999, tags:['camera','premium','compact'],
      best:'要小機身加頂級相機',
      why:'與 XL 同級相機、機身只 6.3 吋，還有最高亮度的 Super Actua 螢幕——小手機愛好者的完整解。',
      caveat:'跑分與散熱不如同價位三星、小米；同樣只有水貨。' },

    { id:'go-p10xl', cat:'phone', brand:'google', brandName:'Google', name:'Pixel 10 Pro XL', sub:'6.8 吋大電池',
      chip:'Tensor G5', gpu:null, ram:'16GB', storage:'256GB 起',
      screen:'6.8 吋 Super Actua 120Hz', battery:null, weight:null,
      priceHK:9360, priceUS:1199, tags:['camera','bigscreen','premium'],
      best:'要大螢幕加最強相機',
      why:'6.8 吋大螢幕與最大電池，追劇、拍照、用 Gemini 都到位，是 Pixel 陣營的完整體。',
      caveat:'換算價已接近 iPhone Pro，還要加上水貨溢價與保固風險。' },

    { id:'go-p10a', cat:'phone', brand:'google', brandName:'Google', name:'Pixel 10a', sub:'入門 Pixel',
      chip:null, gpu:null, ram:null, storage:'128GB',
      screen:'6.3 吋', battery:null, weight:null,
      priceHK:3900, priceUS:499, tags:['budget','camera','compact'],
      best:'預算四千、要好照片',
      why:'用一半價錢拿到 Pixel 的相機與七年更新，預算有限又要拍照好看的首選。',
      caveat:'晶片與螢幕降一級，玩遊戲會明顯卡；香港同樣是水貨。' },

    { id:'go-watch4', cat:'watch', brand:'google', brandName:'Google', name:'Pixel Watch 4（41mm）', sub:'Wear OS + Fitbit',
      chip:null, gpu:null, ram:null, storage:null,
      screen:'1.4 吋 AMOLED', battery:'約 30 小時', weight:null,
      priceHK:2730, priceUS:349, tags:['daily','sport','premium'],
      best:'要圓錶與 Fitbit 健康數據',
      why:'Wear OS 加 Fitbit 的健康分析，圓形錶面與手勢操作是安卓手錶裡最順的一套。',
      caveat:'續航約一天要天天充；香港水貨，維修要寄回原產地。' },

    { id:'go-buds2a', cat:'earbuds', brand:'google', brandName:'Google', name:'Pixel Buds 2a', sub:'千元有 Gemini',
      chip:null, gpu:null, ram:null, storage:null,
      screen:null, battery:null, weight:null,
      priceHK:1010, priceUS:129, tags:['light','budget','daily'],
      best:'配 Pixel 手機用',
      why:'千元價位有清楚通話與 Gemini 語音助手，配 Pixel 手機時體驗最完整。',
      caveat:'無無線充電，半開放式設計在捷運上隔音有限。' },

    /* ================= OnePlus ================= */
    { id:'op-15', cat:'phone', brand:'oneplus', brandName:'OnePlus', name:'OnePlus 15', sub:'165Hz · 7,300mAh',
      chip:'Snapdragon 8 Elite Gen 5', gpu:null, ram:'12GB / 16GB', storage:'256GB 起',
      screen:'6.78 吋 AMOLED 165Hz', battery:'7,300mAh・120W 有線／50W 無線', weight:'211–215 g',
      priceHK:6399, priceUS:null, tags:['pro','bigscreen','premium'],
      best:'重度遊戲玩家',
      why:'165Hz 電競級螢幕、7,300mAh 大電池加 120W 快充，邊玩邊充不燙手——遊戲體驗全場最強。',
      caveat:'香港只有平行進口；相機調校不如三星、小米旗艦。' },

    { id:'op-15r', cat:'phone', brand:'oneplus', brandName:'OnePlus', name:'OnePlus 15R', sub:'旗艦晶片下放',
      chip:'Snapdragon 8 Elite', gpu:null, ram:'12GB', storage:'256GB 起',
      screen:null, battery:null, weight:null,
      priceHK:4499, priceUS:null, tags:['pro','budget','bigscreen'],
      best:'要效能、預算四千五',
      why:'上代旗艦晶片放到 HK$4,499，效能取向的性價比選擇，跑分不比今年的中階機差。',
      caveat:'相機與機身用料明顯降級；同樣是水貨。' },

    { id:'op-pad3', cat:'tablet', brand:'oneplus', brandName:'OnePlus', name:'OnePlus Pad 3', sub:'13.2 吋 3.4K',
      chip:'Snapdragon 8 Elite', gpu:null, ram:'12GB', storage:'256GB 起',
      screen:'13.2 吋 3.4K 144Hz', battery:'12,140mAh・67W', weight:null,
      priceHK:3999, priceUS:null, tags:['media','work','creative'],
      best:'要最大螢幕、預算四千',
      why:'13.2 吋 3.4K 144Hz，看片與分割視窗辦公都舒服，價位只要 iPad Pro 的三分之一。',
      caveat:'13 吋機身不好帶；Android 平板專業 App 生態仍是弱項。' },

    { id:'op-watch3', cat:'watch', brand:'oneplus', brandName:'OnePlus', name:'OnePlus Watch 3（43mm）', sub:'Wear OS · 長續航',
      chip:null, gpu:null, ram:null, storage:null,
      screen:'1.32 吋 AMOLED', battery:'約 5 天（省電模式 16 天）', weight:null,
      priceHK:1599, priceUS:null, tags:['daily','sport','premium'],
      best:'不想天天充電的 Wear OS 用戶',
      why:'Wear OS 裡少見的五天續航，完整 App 支援加上不用天天充電，這組合目前只有它做到。',
      caveat:'43mm 版本功能比 46mm 略減；香港為水貨。' },

    { id:'op-budspro3', cat:'earbuds', brand:'oneplus', brandName:'OnePlus', name:'OnePlus Buds Pro 3', sub:'50dB 降噪',
      chip:null, gpu:null, ram:null, storage:null,
      screen:null, battery:'耳機約 10 小時／含盒約 43 小時', weight:null,
      priceHK:999, priceUS:null, tags:['anc','budget','comfort'],
      best:'千元要最強降噪',
      why:'千元有 50dB 降噪與 Dynaudio 調音，續航 43 小時，性價比在耳機裡很突出。',
      caveat:'空間音訊與頭部追蹤只支援 OnePlus 手機。' }
  ];

  D.models = D.models.concat(extra);
  D.updated = '2026-11';
})();
