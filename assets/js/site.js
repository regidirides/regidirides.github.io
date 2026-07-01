/* Shared header + footer for the English site.
   Each page sets <body data-page="home|research|members|publications|opportunities">.
   Edit the nav/footer here once — it renders on every page. */
(function () {
  var NAV = [
    { id: "home",          label: "Home",          href: "index.html" },
    { id: "members",       label: "Members",       href: "members-en.html" },
    { id: "research",      label: "Research",      href: "research-en.html" },
    { id: "publications",  label: "Publications",  href: "publications-en.html" },
    { id: "events",        label: "Events",        href: "events-en.html" },
    { id: "opportunities", label: "Opportunities", href: "opportunities-en.html" },
    { id: "access",        label: "Access",        href: "access-en.html" }
  ];

  var current = document.body.getAttribute("data-page") || "home";

  // Path prefix so the shared header/footer also work from pages in subfolders.
  // Root pages: leave unset. A page at events/<slug>/event.html sets data-base="../../".
  var base = document.body.getAttribute("data-base") || "";

  // Japanese equivalent of each page (for the 日本語 toggle)
  var JP = {
    home: "index-jp.html", members: "members-jp.html", research: "research-jp.html",
    publications: "publications-jp.html", events: "events-jp.html",
    opportunities: "opportunities-jp.html", access: "access-jp.html"
  };

  var links = NAV.map(function (n) {
    var active = n.id === current ? " active" : "";
    return '<li class="nav-item"><a class="nav-link' + active + '" href="' + base + n.href + '">' + n.label + "</a></li>";
  }).join("");

  var header =
    '<nav class="navbar navbar-expand-lg sticky-top">' +
      '<div class="container">' +
        '<a class="navbar-brand" href="' + base + 'index.html">' +
          '<img src="' + base + 'image/irides.jpg" alt="IRIDeS">' +
          '<span>Disaster Geoinformatics Lab.<small>ReGiD · IRIDeS, Tohoku University</small></span>' +
        '</a>' +
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">' +
          '<span class="navbar-toggler-icon"></span>' +
        '</button>' +
        '<div class="collapse navbar-collapse" id="mainNav">' +
          '<ul class="navbar-nav ms-auto align-items-lg-center">' + links +
            '<li class="nav-item ms-lg-2"><a class="nav-link lang-toggle" href="' + base + (JP[current] || "index-jp.html") + '">日本語</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
    '</nav>';

  var footer =
    '<footer class="site-footer">' +
      '<div class="container">' +
        '<div class="row g-4">' +
          '<div class="col-lg-5">' +
            '<h6>Disaster Geoinformatics Lab. (ReGiD)</h6>' +
            '<p class="mb-1">International Research Institute of Disaster Science (IRIDeS), Tohoku University.</p>' +
            '<p class="mb-0 small">Room E401, Building J31, Aoba 468-1, Aramaki, Aoba-ku, Sendai 980-8572, Japan<br>Tel: +81-22-752-2082</p>' +
          '</div>' +
          '<div class="col-6 col-lg-3">' +
            '<h6>Explore</h6>' +
            '<ul class="list-unstyled">' +
              '<li><a href="' + base + 'members-en.html">Members</a></li>' +
              '<li><a href="' + base + 'research-en.html">Research</a></li>' +
              '<li><a href="' + base + 'publications-en.html">Publications</a></li>' +
              '<li><a href="' + base + 'events-en.html">Events</a></li>' +
              '<li><a href="' + base + 'opportunities-en.html">Opportunities</a></li>' +
              '<li><a href="' + base + 'access-en.html">Access</a></li>' +
            '</ul>' +
          '</div>' +
          '<div class="col-6 col-lg-4">' +
            '<h6>Affiliations</h6>' +
            '<ul class="list-unstyled">' +
              '<li><a href="https://irides.tohoku.ac.jp" target="_blank" rel="noopener">IRIDeS</a></li>' +
              '<li><a href="https://www.civil.tohoku.ac.jp" target="_blank" rel="noopener">Dept. of Civil &amp; Env. Eng.</a></li>' +
              '<li><a href="https://www.cc.tohoku.ac.jp" target="_blank" rel="noopener">Cyberscience Center</a></li>' +
            '</ul>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom d-flex justify-content-between flex-wrap">' +
          '<span>&copy; ' + new Date().getFullYear() + ' ReGiD, IRIDeS — Tohoku University. All rights reserved.</span>' +
          '<a href="' + base + 'access-en.html">Access &amp; Map</a>' +
        '</div>' +
      '</div>' +
    '</footer>';

  var h = document.getElementById("site-header");
  var f = document.getElementById("site-footer");
  if (h) h.innerHTML = header;
  if (f) f.innerHTML = footer;
})();
