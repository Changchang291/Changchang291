'use strict';
/* Tiện ích dùng chung cho các trò chơi Vật lí 10. */
const VL = (() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const G = 9.8;

  // Định dạng số kiểu Việt Nam (dấu phẩy thập phân, không nhóm hàng nghìn)
  const fmt = (x, d = 2) => (isFinite(x)
    ? Number(x).toLocaleString('vi-VN', { maximumFractionDigits: d, useGrouping: false })
    : '—');
  // Dạng a·10ⁿ
  const SUP = { '-': '⁻', 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };
  const sci = (x, d = 3) => {
    if (!isFinite(x)) return '—';
    if (x === 0) return '0';
    const e = Math.floor(Math.log10(Math.abs(x)));
    if (e >= -2 && e <= 3) return fmt(x, d);
    const m = x / Math.pow(10, e);
    return fmt(m, d) + '·10' + String(e).split('').map(c => SUP[c]).join('');
  };
  const parse = (s) => {
    if (s == null) return NaN;
    s = String(s).trim().replace(/\s/g, '').replace(',', '.');
    return s === '' ? NaN : Number(s);
  };
  const rand = (a, b) => a + Math.random() * (b - a);
  const randInt = (a, b) => Math.floor(rand(a, b + 1));
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
  const roundTo = (x, step) => Math.round(x / step) * step;
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ---------- Lưu trữ an toàn ----------
  const store = {
    get(k, def) { try { const v = localStorage.getItem('vl10:' + k); return v == null ? def : JSON.parse(v); } catch (e) { return def; } },
    set(k, v) { try { localStorage.setItem('vl10:' + k, JSON.stringify(v)); } catch (e) { /* bỏ qua */ } },
  };
  const best = (key, score) => { const old = store.get('best:' + key, 0); if (score > old) store.set('best:' + key, score); return old; };

  // ---------- Âm thanh ----------
  let actx = null;
  let muted = store.get('muted', false);
  function tone(f, t = 0.12, type = 'sine', v = 0.15, delay = 0) {
    if (muted) return;
    try {
      actx = actx || new (window.AudioContext || window.webkitAudioContext)();
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = type; o.frequency.value = f;
      const t0 = actx.currentTime + delay;
      g.gain.setValueAtTime(v, t0);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + t);
      o.connect(g).connect(actx.destination);
      o.start(t0); o.stop(t0 + t + 0.03);
    } catch (e) { /* không có âm thanh */ }
  }
  const sfx = {
    ok() { tone(660, .12, 'triangle'); tone(990, .2, 'triangle', .15, .1); },
    bad() { tone(200, .3, 'sawtooth', .07); },
    click() { tone(520, .05, 'square', .04); },
    win() { [523, 659, 784, 1046].forEach((f, i) => tone(f, .22, 'triangle', .14, i * .12)); },
    boom() { tone(80, .45, 'sawtooth', .12); tone(60, .5, 'square', .06, .05); },
    whoosh() { tone(300, .15, 'sine', .06); tone(180, .2, 'sine', .05, .08); },
  };
  const ICON_ON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>';
  const ICON_OFF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="m23 9-6 6M17 9l6 6"/></svg>';
  function muteButton(btn) {
    const paint = () => { btn.innerHTML = muted ? ICON_OFF : ICON_ON; btn.setAttribute('aria-label', muted ? 'Bật âm thanh' : 'Tắt âm thanh'); };
    paint();
    btn.addEventListener('click', () => { muted = !muted; store.set('muted', muted); paint(); });
  }

  // ---------- Canvas ----------
  function stage(cv, W, H) {
    const ctx = cv.getContext('2d');
    const fit = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    fit();
    window.addEventListener('resize', fit);
    return ctx;
  }
  function pointer(cv, e, W, H) {
    const r = cv.getBoundingClientRect();
    return { x: (e.clientX - r.left) * W / r.width, y: (e.clientY - r.top) * H / r.height };
  }
  function loop(fn) {
    let last = performance.now();
    function f(t) {
      const dt = Math.min(0.05, (t - last) / 1000); last = t;
      fn(dt, t / 1000);
      requestAnimationFrame(f);
    }
    requestAnimationFrame(f);
  }
  function arrow(ctx, x1, y1, x2, y2, color, w = 3, label = '', labelPos = 'end') {
    const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
    if (L < 2) return;
    const ux = dx / L, uy = dy / L, hs = Math.min(12, L * .45) + w;
    ctx.save();
    ctx.strokeStyle = color; ctx.fillStyle = color; ctx.lineWidth = w; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2 - ux * hs * .7, y2 - uy * hs * .7); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - ux * hs - uy * hs * .5, y2 - uy * hs + ux * hs * .5);
    ctx.lineTo(x2 - ux * hs + uy * hs * .5, y2 - uy * hs - ux * hs * .5);
    ctx.closePath(); ctx.fill();
    if (label) {
      ctx.font = 'bold 15px "Be Vietnam Pro", system-ui, sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const px = labelPos === 'mid' ? (x1 + x2) / 2 - uy * 14 : x2 + ux * 14;
      const py = labelPos === 'mid' ? (y1 + y2) / 2 + ux * 14 : y2 + uy * 14;
      ctx.fillText(label, px, py);
    }
    ctx.restore();
  }
  function rrect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }
  function text(ctx, s, x, y, { size = 16, color = '#eef4fb', align = 'left', base = 'alphabetic', weight = 600, font = '"Be Vietnam Pro", system-ui, sans-serif' } = {}) {
    ctx.font = `${weight} ${size}px ${font}`;
    ctx.fillStyle = color; ctx.textAlign = align; ctx.textBaseline = base;
    ctx.fillText(s, x, y);
  }
  function label(ctx, s, x, y, { size = 15, color = '#eef4fb', bg = 'rgba(8,17,29,.82)', align = 'center' } = {}) {
    ctx.font = `600 ${size}px "Be Vietnam Pro", system-ui, sans-serif`;
    const w = ctx.measureText(s).width + 14, h = size + 10;
    const x0 = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x;
    ctx.fillStyle = bg; rrect(ctx, x0, y - h / 2, w, h, 7); ctx.fill();
    ctx.fillStyle = color; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(s, x0 + 7, y + 1);
  }

  // ---------- Hộp thoại & thông báo ----------
  const starsHTML = (n, max = 3) => Array.from({ length: max }, (_, i) => i < n ? '★' : '<span class="off">★</span>').join('');
  function modal({ title, html = '', stars = null, buttons = [{ label: 'Đóng', primary: true }] }) {
    const wrap = document.createElement('div');
    wrap.className = 'modal-wrap';
    wrap.innerHTML = `<div class="modal" role="dialog" aria-modal="true" aria-label="${title}">
      ${stars != null ? `<div class="stars" aria-label="${stars} sao">${starsHTML(stars)}</div>` : ''}
      <h2>${title}</h2><div>${html}</div><div class="row"></div></div>`;
    const row = wrap.querySelector('.row');
    buttons.forEach(b => {
      const el = document.createElement('button');
      el.className = 'btn' + (b.primary ? ' primary' : '');
      el.textContent = b.label;
      el.addEventListener('click', () => { wrap.remove(); b.onClick && b.onClick(); });
      row.appendChild(el);
    });
    document.body.appendChild(wrap);
    const first = row.querySelector('.primary') || row.querySelector('button');
    first && first.focus();
    return wrap;
  }
  let toastTimer = null;
  function toast(msg, kind = '') {
    let el = $('.toast');
    if (!el) { el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'status'); document.body.appendChild(el); }
    el.className = 'toast ' + kind; el.textContent = msg; el.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.hidden = true; }, 2600);
  }

  // ---------- Khung tab chế độ ----------
  function tabs(container, onChange) {
    const btns = $$('.tab', container);
    btns.forEach(b => b.addEventListener('click', () => {
      btns.forEach(x => x.setAttribute('aria-selected', String(x === b)));
      onChange(b.dataset.mode);
    }));
  }

  return { $, $$, G, fmt, sci, parse, rand, randInt, pick, clamp, roundTo, shuffle, store, best, sfx, muteButton,
    stage, pointer, loop, arrow, rrect, text, label, starsHTML, modal, toast, tabs };
})();
