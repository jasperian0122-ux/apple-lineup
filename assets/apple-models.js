/* 選機顧問 — Apple 歷代機型資料庫（2018–2026）
   供「換機指南」與「二手殘值計算器」共用。
   price：香港發表時定價（HK$，基礎容量）
   date ：香港開賣年月
   cur  ：true 表示 2026 年 11 月仍在官網販售（可作為換機目標）
   注意：價格為發表時定價，非現時市價；實際成交仍需依機況與市場供需。 */
(function () {
  const REF = 2026 * 12 + 10;               // 基準月：2026-11
  const monthsOf = d => {
    const [y, m] = d.split('-').map(Number);
    return Math.max(0, REF - (y * 12 + (m - 1)));
  };

  const RAW = [
    /* ── iPhone ── */
    ['ipxs',        'iPhone XS',                    'phone', 8599,  '2018-09'],
    ['ipxsmax',     'iPhone XS Max',                'phone', 9499,  '2018-09'],
    ['ipxr',        'iPhone XR',                    'phone', 6499,  '2018-10'],
    ['ip11',        'iPhone 11',                    'phone', 5999,  '2019-09'],
    ['ip11pro',     'iPhone 11 Pro',                'phone', 8599,  '2019-09'],
    ['ip11promax',  'iPhone 11 Pro Max',            'phone', 9499,  '2019-09'],
    ['ipse2',       'iPhone SE（第 2 代）',          'phone', 3399,  '2020-04'],
    ['ip12mini',    'iPhone 12 mini',               'phone', 5399,  '2020-10'],
    ['ip12',        'iPhone 12',                    'phone', 5999,  '2020-10'],
    ['ip12pro',     'iPhone 12 Pro',                'phone', 8499,  '2020-10'],
    ['ip12promax',  'iPhone 12 Pro Max',            'phone', 9299,  '2020-10'],
    ['ip13mini',    'iPhone 13 mini',               'phone', 5199,  '2021-09'],
    ['ip13',        'iPhone 13',                    'phone', 5999,  '2021-09'],
    ['ip13pro',     'iPhone 13 Pro',                'phone', 8499,  '2021-09'],
    ['ip13promax',  'iPhone 13 Pro Max',            'phone', 9299,  '2021-09'],
    ['ipse3',       'iPhone SE（第 3 代）',          'phone', 3699,  '2022-03'],
    ['ip14',        'iPhone 14',                    'phone', 6899,  '2022-09'],
    ['ip14plus',    'iPhone 14 Plus',               'phone', 7899,  '2022-09'],
    ['ip14pro',     'iPhone 14 Pro',                'phone', 8999,  '2022-09'],
    ['ip14promax',  'iPhone 14 Pro Max',            'phone', 9999,  '2022-09'],
    ['ip15',        'iPhone 15',                    'phone', 6899,  '2023-09'],
    ['ip15plus',    'iPhone 15 Plus',               'phone', 7899,  '2023-09'],
    ['ip15pro',     'iPhone 15 Pro',                'phone', 8999,  '2023-09'],
    ['ip15promax',  'iPhone 15 Pro Max',            'phone', 9999,  '2023-09'],
    ['ip16',        'iPhone 16',                    'phone', 6899,  '2024-09'],
    ['ip16plus',    'iPhone 16 Plus',               'phone', 7899,  '2024-09'],
    ['ip16pro',     'iPhone 16 Pro',                'phone', 8999,  '2024-09'],
    ['ip16promax',  'iPhone 16 Pro Max',            'phone', 9999,  '2024-09'],
    ['ip16e',       'iPhone 16e',                   'phone', 5499,  '2025-02', 1],
    ['ip17',        'iPhone 17',                    'phone', 6899,  '2025-09', 1],
    ['ipair',       'iPhone Air',                   'phone', 9499,  '2025-09', 1],
    ['ip17pro',     'iPhone 17 Pro',                'phone', 9499,  '2025-09', 1],
    ['ip17promax',  'iPhone 17 Pro Max',            'phone', 10499, '2025-09', 1],
    ['ip18pro',     'iPhone 18 Pro',                'phone', 10499, '2026-09', 1],
    ['ip18promax',  'iPhone 18 Pro Max',            'phone', 11499, '2026-09', 1],
    ['ipduo',       'iPhone Duo（摺疊）',            'phone', 17499, '2026-09', 1],

    /* ── iPad ── */
    ['ipad9',       'iPad（第 9 代）',               'tablet', 2599,  '2021-09'],
    ['ipad10',      'iPad（第 10 代）',              'tablet', 3499,  '2022-10'],
    ['ipad11',      'iPad（A16）',                  'tablet', 3599,  '2025-03', 1],
    ['ipadmini6',   'iPad mini（第 6 代）',          'tablet', 3999,  '2021-09'],
    ['ipadmini7',   'iPad mini（A17 Pro）',         'tablet', 3799,  '2024-10'],
    ['ipadminia20', 'iPad mini（A20 Pro）',         'tablet', 5299,  '2026-09', 1],
    ['ipadair4',    'iPad Air（第 4 代）',           'tablet', 4799,  '2020-10'],
    ['ipadair5',    'iPad Air（M1）',               'tablet', 4799,  '2022-03'],
    ['ipadairm2',   'iPad Air（M2）',               'tablet', 4999,  '2024-05'],
    ['ipadairm4',   'iPad Air（M4）',               'tablet', 5999,  '2026-03', 1],
    ['ipadpro11m1', 'iPad Pro 11″（M1）',           'tablet', 6399,  '2021-05'],
    ['ipadpro129m1','iPad Pro 12.9″（M1）',         'tablet', 8799,  '2021-05'],
    ['ipadpro11m4', 'iPad Pro 11″（M4）',           'tablet', 7999,  '2024-05'],
    ['ipadpro13m4', 'iPad Pro 13″（M4）',           'tablet', 10499, '2024-05'],
    ['ipadpro13m5', 'iPad Pro 13″（M5）',           'tablet', 9499,  '2025-10', 1],

    /* ── Mac ── */
    ['mbaneo',      'MacBook Neo',                  'mac', 5499,  '2026-09', 1],
    ['mbam1',       'MacBook Air 13″（M1）',        'mac', 7799,  '2020-11'],
    ['mbam2',       'MacBook Air 13″（M2）',        'mac', 9499,  '2022-07'],
    ['mbam3',       'MacBook Air 13″（M3）',        'mac', 8999,  '2024-03'],
    ['mbam4',       'MacBook Air 13″（M4）',        'mac', 7999,  '2025-03'],
    ['mbam5',       'MacBook Air 13″（M5）',        'mac', 10499, '2026-03', 1],
    ['mba15m5',     'MacBook Air 15″（M5）',        'mac', 11999, '2026-03', 1],
    ['mbp13m1',     'MacBook Pro 13″（M1）',        'mac', 9999,  '2020-11'],
    ['mbp14m1pro',  'MacBook Pro 14″（M1 Pro）',    'mac', 15999, '2021-10'],
    ['mbp16m1max',  'MacBook Pro 16″（M1 Max）',    'mac', 21999, '2021-10'],
    ['mbp14m3',     'MacBook Pro 14″（M3）',        'mac', 12999, '2023-10'],
    ['mbp14m4',     'MacBook Pro 14″（M4）',        'mac', 12999, '2024-10'],
    ['mbp14m5pro',  'MacBook Pro 14″（M5 Pro）',    'mac', 19999, '2025-10', 1],
    ['mbp16m5max',  'MacBook Pro 16″（M5 Max）',    'mac', 32499, '2025-10', 1],
    ['mbp14m6',     'MacBook Pro 14″（M6）',        'mac', 15999, '2026-10', 1],
    ['macminim1',   'Mac mini（M1）',               'mac', 5399,  '2020-11'],
    ['macminim2',   'Mac mini（M2）',               'mac', 4699,  '2023-01'],
    ['macminim4',   'Mac mini（M4）',               'mac', 3799,  '2024-11'],
    ['macminim6',   'Mac mini（M6）',               'mac', 7299,  '2026-10', 1],
    ['imac24m1',    'iMac 24″（M1）',               'mac', 9999,  '2021-05'],
    ['imac24m3',    'iMac 24″（M3）',               'mac', 9999,  '2023-10'],
    ['imac24m4',    'iMac 24″（M4）',               'mac', 9999,  '2024-10'],
    ['imac24m6',    'iMac 24″（M6）',               'mac', 10999, '2026-10', 1],
    ['macstudiom1', 'Mac Studio（M1 Max）',         'mac', 15999, '2022-03'],
    ['macstudiom2', 'Mac Studio（M2 Max）',         'mac', 15999, '2023-06'],
    ['macstudiom4', 'Mac Studio（M4 Max）',         'mac', 15999, '2025-03', 1],

    /* ── Apple Watch ── */
    ['watchs4',     'Apple Watch Series 4',         'wear', 3199, '2018-09'],
    ['watchs5',     'Apple Watch Series 5',         'wear', 3199, '2019-09'],
    ['watchs6',     'Apple Watch Series 6',         'wear', 3199, '2020-09'],
    ['watchs7',     'Apple Watch Series 7',         'wear', 3199, '2021-10'],
    ['watchs8',     'Apple Watch Series 8',         'wear', 3199, '2022-09'],
    ['watchs9',     'Apple Watch Series 9',         'wear', 3199, '2023-09'],
    ['watchs10',    'Apple Watch Series 10',        'wear', 3199, '2024-09'],
    ['watchs11',    'Apple Watch Series 11',        'wear', 3199, '2025-09'],
    ['watchs12',    'Apple Watch Series 12',        'wear', 3199, '2026-09', 1],
    ['watchse1',    'Apple Watch SE（第 1 代）',     'wear', 2199, '2020-09'],
    ['watchse2',    'Apple Watch SE（第 2 代）',     'wear', 1999, '2022-09'],
    ['watchse3',    'Apple Watch SE 3',             'wear', 1999, '2025-09', 1],
    ['watchultra',  'Apple Watch Ultra',            'wear', 6399, '2022-09'],
    ['watchultra2', 'Apple Watch Ultra 2',          'wear', 6399, '2023-09'],
    ['watchultra3', 'Apple Watch Ultra 3',          'wear', 6399, '2025-09'],
    ['watchultra4', 'Apple Watch Ultra 4',          'wear', 6199, '2026-09', 1],

    /* ── AirPods ── */
    ['airpods2',    'AirPods（第 2 代）',            'audio', 1299, '2019-03'],
    ['airpods3',    'AirPods（第 3 代）',            'audio', 1499, '2021-10'],
    ['airpods4',    'AirPods 4',                    'audio', 1099, '2024-09'],
    ['airpods5',    'AirPods 5',                    'audio', 1099, '2026-03', 1],
    ['airpods5w',   'AirPods 5（無線充電盒）',       'audio', 1249, '2026-03', 1],
    ['airpodspro1', 'AirPods Pro',                  'audio', 1999, '2019-10'],
    ['airpodspro2', 'AirPods Pro（第 2 代）',        'audio', 1899, '2022-09'],
    ['airpodspro3', 'AirPods Pro 3',                'audio', 1899, '2025-09', 1],
    ['airpodsmax',  'AirPods Max',                  'audio', 4599, '2020-12'],
    ['airpodsmax2', 'AirPods Max（USB-C）',         'audio', 4599, '2024-09', 1],

    /* ── Vision ── */
    ['visionpro',   'Apple Vision Pro',             'spatial', 27999, '2024-02'],
    ['visionprom5', 'Apple Vision Pro（M5）',       'spatial', 29999, '2026-03', 1]
  ];

  window.APPLE_MODELS = RAW.map(([id, name, type, price, date, cur]) => ({
    id, name, type, price, date,
    months: monthsOf(date),
    cur: !!cur
  }));

  window.APPLE_TYPE_LABEL = {
    phone: 'iPhone', tablet: 'iPad', mac: 'Mac', wear: 'Apple Watch',
    audio: 'AirPods', spatial: 'Vision Pro'
  };

  /* 各產品線的「預期可用月數」——用來判斷是否到汰換線 */
  window.APPLE_LIFE = { phone: 66, tablet: 78, mac: 102, wear: 66, audio: 54, spatial: 78 };
})();
