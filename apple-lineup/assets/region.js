// region.js — Apple 產品站地區/幣別輔助
// 1) 記住上次選的地區（localStorage.ah_region）
// 2) 讓右下角切換器保留你正在看的頁面（air.html 換幣別還是 air.html）
// 3) 進站自動帶到上次的地區（可選；只影響 picker 頁的高亮）
(function () {
  'use strict';
  var m = location.pathname.match(/\/(HK|MO|TW|US)\/([^\/?#]+\.html)$/);
  var file = m ? m[2] : 'index.html';
  if (m) {
    try { localStorage.setItem('ah_region', m[1]); } catch (e) {}
  }

  function enhance() {
    document.querySelectorAll('.rswitch a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (/index\.html$/.test(href) && file !== 'index.html') {
        a.setAttribute('href', href.replace(/index\.html$/, file));
      }
    });
    // 標示目前地區（若切換器有 .on 也保留原樣，僅加 aria-current）
    var cur = m && m[1];
    document.querySelectorAll('.rswitch a').forEach(function (a) {
      var target = (a.getAttribute('href') || '').match(/\/(HK|MO|TW|US)\//);
      if (cur && target && target[1] === cur) a.setAttribute('aria-current', 'true');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance);
  } else {
    enhance();
  }
})();
