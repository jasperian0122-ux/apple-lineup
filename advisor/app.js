/* Apple 選購顧問 — 問答與推薦引擎
   零依賴、純前端。資料來自 data.js 的 window.ADVISOR。 */
(function () {
  'use strict';

  var D = window.ADVISOR;
  var ICONS = {
    laptop: '<rect x="3" y="5" width="18" height="12" rx="1.8"/><path d="M2 19.5h20"/>',
    phone:  '<rect x="7" y="2.5" width="10" height="19" rx="2.6"/><path d="M11 18.3h2"/>',
    tablet: '<rect x="4.5" y="3" width="15" height="18" rx="2.2"/><path d="M11 18h2"/>',
    watch:  '<rect x="6.5" y="6.5" width="11" height="11" rx="3.4"/><path d="M9.2 6.5v-3h5.6v3M9.2 17.5v3h5.6v-3"/>',
    buds:   '<path d="M9.2 3.6v4.1a3.1 3.1 0 11-2.6 0"/><path d="M16.8 3.6v4.1a3.1 3.1 0 10-2.6 0"/>',
    vision: '<path d="M3 11.6C3 9 4.9 7.4 7.3 7.4h9.4c2.4 0 4.3 1.6 4.3 4.2v1c0 2.7-1.7 4.1-3.7 4.1-1.6 0-2.5-1-3.3-1h-3.9c-.8 0-1.7 1-3.3 1-2 0-3.8-1.4-3.8-4.1v-1z"/>',
    tv:     '<rect x="2.5" y="4.5" width="19" height="12" rx="2"/><path d="M8.5 20.5h7"/>'
  };

  var CURS = [
    { id: 'HKD', label: 'HK$' },
    { id: 'MOP', label: 'MOP$' },
    { id: 'TWD', label: 'NT$' },
    { id: 'USD', label: 'US$' }
  ];

  var state = { cat: null, qi: 0, answers: {}, cur: 'HKD' };
  var $ = function (id) { return document.getElementById(id); };

  try {
    var saved = localStorage.getItem('ah_currency');
    if (saved && CURS.some(function (c) { return c.id === saved; })) state.cur = saved;
  } catch (e) {}

  /* ---------- 價格 ---------- */
  function est(m) {
    if (m.priceHK) return m.priceHK;
    if (m.priceUS) return Math.round(m.priceUS / 0.128);
    return 999999;
  }
  function fmtPrice(m) {
    var cur = state.cur;
    if (cur === 'USD') {
      if (m.priceUS) return 'US$' + m.priceUS.toLocaleString('en-US');
      if (m.priceHK) return '≈US$' + Math.round(m.priceHK * 0.128).toLocaleString('en-US');
      return '依官網';
    }
    if (!m.priceHK) return '依官網';
    if (cur === 'MOP') return 'MOP$' + Math.round(m.priceHK * D.rate.MOP).toLocaleString('en-US');
    if (cur === 'TWD') return 'NT$' + Math.round(m.priceHK * D.rate.TWD).toLocaleString('en-US');
    return 'HK$' + m.priceHK.toLocaleString('en-US');
  }
  function priceUnit(m) {
    if (state.cur === 'USD' && !m.priceUS && m.priceHK) return '（換算）';
    if (state.cur !== 'USD' && !m.priceHK) return '';
    return '起';
  }

  /* ---------- 幣別列 ---------- */
  function renderCur() {
    var bar = $('curBar');
    bar.innerHTML = CURS.map(function (c) {
      return '<button data-cur="' + c.id + '" class="' + (state.cur === c.id ? 'on' : '') + '">' + c.label + '</button>';
    }).join('');
    bar.querySelectorAll('button').forEach(function (b) {
      b.onclick = function () {
        state.cur = b.dataset.cur;
        try { localStorage.setItem('ah_currency', state.cur); } catch (e) {}
        renderCur();
        if (!$('step-result').hidden) renderResults();
      };
    });
  }

  /* ---------- 品類卡 ---------- */
  function renderCats() {
    var g = $('catGrid');
    g.innerHTML = D.categories.map(function (c) {
      var n = D.models.filter(function (m) { return m.cat === c.id; }).length;
      return '<a class="cat" href="#' + c.id + '">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
        'stroke-linecap="round" stroke-linejoin="round">' + ICONS[c.icon] + '</svg>' +
        '<b>' + c.name + '</b><span>' + c.sub + ' · ' + n + ' 款</span></a>';
    }).join('');
    g.querySelectorAll('.cat').forEach(function (el) {
      el.onclick = function (ev) { ev.preventDefault(); startCat(el.getAttribute('href').slice(1)); };
    });
  }

  /* ---------- 問答 ---------- */
  function startCat(id) {
    var cat = D.categories.find(function (c) { return c.id === id; });
    if (!cat) return;
    state.cat = id; state.qi = 0; state.answers = {};
    $('step-cat').hidden = true;
    $('step-q').hidden = false;
    $('step-result').hidden = true;
    renderQuestion();
  }

  /* hash 形如 #mac 或 #mac-0-1-0（品類 + 各題答案，可分享的結果連結） */
  function parseHash() {
    var raw = decodeURIComponent(location.hash.replace('#', ''));
    if (!raw) return null;
    var parts = raw.split('-');
    var cat = D.categories.find(function (c) { return c.id === parts[0]; });
    if (!cat) return null;
    var ans = {};
    var qs = D.questions[cat.id];
    for (var i = 0; i < qs.length; i++) {
      var v = parts[i + 1];
      if (v == null || v === '' || isNaN(+v)) break;
      ans[qs[i].id] = +v;
    }
    return { cat: cat.id, answers: ans, complete: Object.keys(ans).length === qs.length };
  }

  function syncHash() {
    if (!state.cat) return;
    var qs = D.questions[state.cat];
    var parts = [state.cat];
    for (var i = 0; i < qs.length; i++) {
      var a = state.answers[qs[i].id];
      if (a == null) break;
      parts.push(a);
    }
    var want = '#' + parts.join('-');
    if (location.hash !== want) history.replaceState(null, '', want);
  }

  function renderQuestion() {
    var qs = D.questions[state.cat];
    var q = qs[state.qi];
    var cat = D.categories.find(function (c) { return c.id === state.cat; });
    $('qCat').textContent = cat.name + ' · 第 ' + (state.qi + 1) + ' / ' + qs.length + ' 題';
    $('qFill').style.width = ((state.qi) / qs.length * 100) + '%';
    $('qTitle').textContent = q.text;
    $('optList').innerHTML = q.opts.map(function (o, i) {
      var on = state.answers[q.id] === i;
      return '<button class="opt' + (on ? ' on' : '') + '" data-i="' + i + '"><i></i>' + o.label + '</button>';
    }).join('');
    $('optList').querySelectorAll('.opt').forEach(function (b) {
      b.onclick = function () {
        state.answers[q.id] = +b.dataset.i;
        syncHash();
        $('optList').querySelectorAll('.opt').forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on');
        setTimeout(function () {
          if (state.qi < qs.length - 1) { state.qi++; renderQuestion(); }
          else { $('qFill').style.width = '100%'; renderResults(); }
        }, 200);
      };
    });
  }

  $('btnBack').onclick = function () {
    if (state.qi > 0) { state.qi--; renderQuestion(); return; }
    goHome();
  };
  function goHome() {
    state.cat = null;
    if (location.hash) history.replaceState(null, '', location.pathname);
    $('step-cat').hidden = false;
    $('step-q').hidden = true;
    $('step-result').hidden = true;
  }
  $('btnAgain').onclick = function () { state.qi = 0; state.answers = {}; $('step-q').hidden = false; $('step-result').hidden = true; renderQuestion(); };
  $('btnOther').onclick = goHome;

  /* ---------- 打分 ---------- */
  function scoreModel(m) {
    var qs = D.questions[state.cat];
    var s = 0, hits = 0, budgetMax = null, budgetName = '';

    qs.forEach(function (q) {
      var ai = state.answers[q.id];
      if (ai == null) return;
      var o = q.opts[ai];
      if (o.max) { budgetMax = o.max; budgetName = o.label; return; }
      (o.tags || []).forEach(function (t) {
        if (m.tags.indexOf(t) >= 0) { s += 20; hits++; }
      });
    });

    var e = est(m);
    if (budgetMax) {
      if (e <= budgetMax) s += 30;
      else if (e <= budgetMax * 1.15) s += 4;
      else s -= 40 * Math.min(2, (e - budgetMax) / budgetMax);
    }
    if (m.unreleased) s -= 80;
    // 同等條件下偏好便宜
    if (e < 999999) s += Math.max(0, 6 - e / 6000);
    return { s: s, hits: hits };
  }

  function renderResults() {
    var qs = D.questions[state.cat];
    var cat = D.categories.find(function (c) { return c.id === state.cat; });
    var pool = D.models.filter(function (m) { return m.cat === state.cat; });

    var ranked = pool.map(function (m) {
      var r = scoreModel(m);
      return { m: m, s: r.s, hits: r.hits };
    }).sort(function (a, b) { return b.s - a.s; });

    var top = ranked.slice(0, Math.min(3, ranked.length));

    $('step-q').hidden = true;
    $('step-result').hidden = false;

    var budgetAns = null;
    qs.forEach(function (q) {
      var ai = state.answers[q.id];
      if (ai != null && q.opts[ai].max) budgetAns = q.opts[ai].label;
    });

    $('resKicker').textContent = cat.name + ' 推薦';
    $('resTitle').textContent = '最適合你的 ' + top.length + ' 台';
    $('resSub').textContent = budgetAns ? ('預算 ' + budgetAns + '，依你的用途排序') : '依你的用途排序';

    $('resList').innerHTML = top.map(function (r, i) {
      var m = r.m;
      var badge = i === 0 ? '<span class="res-badge">最推薦</span>'
        : (i === 1 ? '<span class="res-badge alt">也適合</span>' : '<span class="res-badge low">另一個選擇</span>');
      var specs = [
        ['晶片', m.chip], ['CPU', m.cpu], ['GPU', m.gpu], ['記憶體', m.ram],
        ['儲存', m.storage], ['螢幕', m.screen], ['續航', m.battery], ['重量', m.weight]
      ].filter(function (x) { return x[1]; }).map(function (x) {
        return '<div><dt>' + x[0] + '</dt><dd>' + x[1] + '</dd></div>';
      }).join('');

      return '<article class="res-card' + (i === 0 ? ' top' : '') + '">' + badge +
        '<h3 class="res-name">' + m.name + '</h3>' +
        '<p class="res-sub">' + m.sub + ' · 適合：' + m.best + '</p>' +
        '<p class="res-price">' + fmtPrice(m) + '<small>' + priceUnit(m) + '</small></p>' +
        '<p class="res-why">' + m.why + '</p>' +
        (m.caveat ? '<p class="res-caveat">要留意：' + m.caveat + '</p>' : '') +
        '<dl class="spec">' + specs + '</dl>' +
        '<div class="res-actions">' +
        '<a class="mini" href="../apple-lineup/' + (m.cat === 'mac' ? 'mac' : m.cat) + '.html">看這台的完整介紹 →</a>' +
        '<a class="mini" href="../spec-compare/">跟別台比規格</a>' +
        (m.priceHK ? '<a class="mini" href="../finance-calc/">算分期月付</a>' : '') +
        '</div></article>';
    }).join('');
  }

  /* ---------- 啟動 ---------- */
  function applyHash() {
    var p = parseHash();
    if (!p) { goHome(); return; }
    startCat(p.cat);
    var qs = D.questions[p.cat];
    state.answers = p.answers;
    if (p.complete) {
      state.qi = qs.length - 1;
      $('qFill').style.width = '100%';
      renderResults();
    } else {
      state.qi = Object.keys(p.answers).length;
      renderQuestion();
    }
  }

  renderCur();
  renderCats();
  applyHash();
  window.addEventListener('hashchange', applyHash);
})();
