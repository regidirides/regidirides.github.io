/* 日本語版サイトの共通ヘッダー・フッター。
   各ページは <body data-page="home|members|research|publications|opportunities|access"> を指定。
   ナビ・フッターはここで一度だけ編集すれば全ページに反映されます。 */
(function () {
  var NAV = [
    { id: "home",          label: "ホーム",     href: "index-jp.html" },
    { id: "members",       label: "メンバー",   href: "members-jp.html" },
    { id: "research",      label: "研究紹介",   href: "research-jp.html" },
    { id: "publications",  label: "研究業績",   href: "publications-jp.html" },
    { id: "events",        label: "災害対応",   href: "events-jp.html" },
    { id: "opportunities", label: "募集",       href: "opportunities-jp.html" },
    { id: "access",        label: "アクセス",   href: "access-jp.html" }
  ];

  var current = document.body.getAttribute("data-page") || "home";

  // サブフォルダ内のページでも共通ヘッダー・フッターが機能するためのパス接頭辞。
  // ルート直下のページは未指定。events/<slug>/event.html などは data-base="../../" を指定。
  var base = document.body.getAttribute("data-base") || "";

  // 各ページの英語版（ENGLISH トグル用）
  var EN = {
    home: "index.html", members: "members-en.html", research: "research-en.html",
    publications: "publications-en.html", events: "events-en.html",
    opportunities: "opportunities-en.html", access: "access-en.html"
  };

  var links = NAV.map(function (n) {
    var active = n.id === current ? " active" : "";
    return '<li class="nav-item"><a class="nav-link' + active + '" href="' + base + n.href + '">' + n.label + "</a></li>";
  }).join("");

  var header =
    '<nav class="navbar navbar-expand-lg sticky-top">' +
      '<div class="container">' +
        '<a class="navbar-brand" href="' + base + 'index-jp.html">' +
          '<img src="' + base + 'image/irides.jpg" alt="IRIDeS">' +
          '<span>災害ジオインフォマティクス研究分野<small>ReGiD · 東北大学 災害科学国際研究所</small></span>' +
        '</a>' +
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="ナビゲーションの切り替え">' +
          '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="mainNav">' +
          '<ul class="navbar-nav ms-auto align-items-lg-center">' + links +
            '<li class="nav-item ms-lg-2"><a class="nav-link lang-toggle" href="' + base + (EN[current] || "index.html") + '">English</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</nav>';

  var footer =
    '<footer class="site-footer">' +
      '<div class="container">' +
        '<div class="row g-4">' +
          '<div class="col-lg-5">' +
            '<h6>災害ジオインフォマティクス研究分野 (ReGiD)</h6>' +
            '<p class="mb-1">東北大学 災害科学国際研究所（IRIDeS）</p>' +
            '<p class="mb-0 small">〒980-8572 仙台市青葉区荒巻字青葉468-1（J31-E401）<br>電話: 022-752-2082</p>' +
          '</div>' +
          '<div class="col-6 col-lg-3">' +
            '<h6>メニュー</h6>' +
            '<ul class="list-unstyled">' +
              '<li><a href="' + base + 'members-jp.html">メンバー</a></li>' +
              '<li><a href="' + base + 'research-jp.html">研究紹介</a></li>' +
              '<li><a href="' + base + 'publications-jp.html">研究業績</a></li>' +
              '<li><a href="' + base + 'events-jp.html">災害対応</a></li>' +
              '<li><a href="' + base + 'opportunities-jp.html">募集</a></li>' +
              '<li><a href="' + base + 'access-jp.html">アクセス</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="col-6 col-lg-4">' +
            '<h6>関連機関</h6>' +
            '<ul class="list-unstyled">' +
              '<li><a href="https://irides.tohoku.ac.jp" target="_blank" rel="noopener">災害科学国際研究所</a></li>' +
              '<li><a href="https://www.civil.tohoku.ac.jp" target="_blank" rel="noopener">工学研究科 土木工学専攻</a></li>' +
              '<li><a href="https://www.cc.tohoku.ac.jp" target="_blank" rel="noopener">サイバーサイエンスセンター</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom d-flex justify-content-between flex-wrap">' +
          '<span>&copy; ' + new Date().getFullYear() + ' ReGiD, IRIDeS — 東北大学. All rights reserved.</span>' +
          '<a href="' + base + 'access-jp.html">アクセス・地図</a>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var h = document.getElementById("site-header");
  var f = document.getElementById("site-footer");
  if (h) h.innerHTML = header;
  if (f) f.innerHTML = footer;
})();
