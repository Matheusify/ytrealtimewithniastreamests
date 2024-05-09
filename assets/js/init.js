function injectJs(e, id) {
  var t = document.createElement("script");
  t.type = "text/javascript";
  t.async = !0;
  t.src = e;
  if (id) {
    t.id = id;
  }
  (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t);
}
$(function () {
  YT.updateManager.prepare();
  YT.sharing.bind();
  YT.multisearch.bind();
  YT.query.bind();
  YT.pins && YT.pins.getPins();
  YT.urls && YT.urls.onchange();
});
var disqus_config = function () {
  this.page.url = "";
  this.page.identifier = "";
};
