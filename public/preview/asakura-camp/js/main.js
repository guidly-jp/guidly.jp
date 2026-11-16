/* =====================================================================
   朝倉歩の税理士開業合宿 LP
   触るのは下の「設定」だけ。それ以外は編集不要。
   ===================================================================== */

/* ----- 設定：応募フォームの送信先（11/16〜 sankyodo様のサーバーで受け付け） -----
   action にサーバー側の受け付けURLを入れる（POST・文字コード UTF-8）。
   送られる項目名は下の左側（name, email, …）。サーバー側で別の名前が必要なら右側に書く。
   送信が終わると thanks.html（サンクスページ）へ移動する。
   action が空のあいだは送信されず、「準備中」の案内が出る */
var FORM = {
  action: '',
  entries: {
    name:   '',  // お名前            例: 'your_name'（空ならそのまま name で送る）
    email:  '',  // メールアドレス
    tel:    '',  // 携帯番号
    regno:  '',  // 税理士登録番号
    area:   '',  // 開業地域
    status: '',  // 現在のご状況（勤務中／開業準備中／開業済み）
    timing: '',  // 開業予定時期、または開業年
    source: '',  // 本セミナーを知ったきっかけ
    motive: ''   // 応募の動機、合宿で得たいこと
  }
};

/* ----- 出現アニメーション ----- */
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var selector = [
    '.sec .label', '.sec h2', '.sec h3', '.sec p', '.sec ul', '.sec ol',
    '.sec .photo', '.sec .fee-row', '.sec .btn', '.sec form'
  ].join(',');

  var targets = [];
  document.querySelectorAll(selector).forEach(function (el) {
    // 入れ子の二重フェードを避ける（親がすでに対象なら子は対象外）
    for (var p = el.parentElement; p; p = p.parentElement) {
      if (targets.indexOf(p) !== -1) return;
    }
    targets.push(el);
  });

  // 同じブロック内で少しずつ遅らせる
  var counters = new Map();
  targets.forEach(function (el) {
    var group = el.closest('.wrap') || el.parentElement;
    var i = counters.get(group) || 0;
    counters.set(group, i + 1);
    el.style.transitionDelay = Math.min(i, 5) * 80 + 'ms';
    el.classList.add('reveal');
  });

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  targets.forEach(function (el) { io.observe(el); });
  document.documentElement.classList.add('js-reveal');
})();

/* ----- 応募フォーム ----- */
(function () {
  var form = document.getElementById('apply-form');
  if (!form) return;
  var msg = document.getElementById('form-msg');
  var button = form.querySelector('button[type="submit"]');
  var sent = false;

  function show(text) {
    msg.textContent = text;
    msg.hidden = !text;
  }

  form.addEventListener('submit', function (ev) {
    show('');
    if (!form.checkValidity()) {
      ev.preventDefault();
      form.reportValidity();
      return;
    }
    if (!FORM.action) {
      ev.preventDefault();
      show('応募フォームは現在準備中です。公開までお待ちください。');
      return;
    }
    // 設定で別名が指定されていれば、項目名を付け替えて送る
    Object.keys(FORM.entries).forEach(function (key) {
      var field = form.elements[key];
      if (field && FORM.entries[key]) field.name = FORM.entries[key];
    });
    form.action = FORM.action;
    sent = true;
    button.disabled = true;
    button.textContent = '送信中…';
  });

  // 送信先は見えない iframe。読み込みが終わったらサンクスページ（thanks.html）へ移動する
  // 応募完了の計測は thanks.html の表示（page_view）で行う
  document.getElementById('form-target').addEventListener('load', function () {
    if (!sent) return;
    window.location.href = 'thanks.html';
  });
})();
