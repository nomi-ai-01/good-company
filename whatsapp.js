// ===== SIRF YE EK LINE BADLEIN: client ka WhatsApp number (country code ke saath, bina + aur space) =====
var WA_NUMBER = "923XXXXXXXXX";
// =========================================================================================================
(function () {
  var css = ".gc-wa{display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#25D366;color:#fff!important;text-decoration:none;font:600 13px 'DM Sans',sans-serif;padding:11px 16px;border-radius:999px;margin-top:10px;width:100%;box-sizing:border-box}.gc-wa:hover{background:#1ebe5b}.gc-wa svg{width:17px;height:17px;fill:#fff}.gc-wa-float{position:fixed;right:16px;bottom:16px;z-index:9999;width:auto;margin:0;box-shadow:0 6px 18px rgba(0,0,0,.25);padding:13px 18px}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  var ICON = '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l2 1c.3.1.5.2.5.3.1.2.1.8-.1 1.2z"/></svg>';
  function link(msg, extra) {
    var a = document.createElement("a");
    a.className = "gc-wa" + (extra ? " " + extra : "");
    a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
    a.target = "_blank"; a.rel = "noopener noreferrer";
    a.innerHTML = ICON + "<span>WhatsApp</span>";
    return a;
  }
  function txt(el) { return el ? el.textContent.trim() : ""; }
  function run() {
    if (!document.querySelector(".gc-wa-float")) {
      var f = link("Hi, I'd like to know more about Good Company.", "gc-wa-float");
      f.querySelector("span").textContent = "Chat on WhatsApp";
      document.body.appendChild(f);
    }
    document.querySelectorAll(".gc-card").forEach(function (card) {
      if (card.querySelector(".gc-wa")) return;
      var name = txt(card.querySelector(".gc-card-name h3"));
      var city = txt(card.querySelector(".gc-local"));
      var body = card.querySelector(".gc-card-body");
      if (body) body.appendChild(link("Hi, I'd like details about " + name + " in " + city + ".")); 
    });
    document.querySelectorAll("section.gc-modal").forEach(function (m) {
      if (m.querySelector(".gc-wa")) return;
      var who = txt(m.querySelector(".gc-modal-profile strong")).split(/,| · /)[0];
      var box = m.querySelector(".gc-modal-content") || m;
      box.appendChild(link("Hi, I'd like details about " + (who || "a profile") + "."));
    });
  }
  new MutationObserver(run).observe(document.documentElement, { childList: true, subtree: true });
  run();
})();
