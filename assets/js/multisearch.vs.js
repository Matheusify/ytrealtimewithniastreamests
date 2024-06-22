YT.multisearch = {
  getResults: function (e) {
    $.getJSON(
      "https://api.subscriberwars.space/search/youtube/channel/%20" + encodeURIComponent(e),
      function (e) {
        $er = $("#results");
        $er.html("");
        e.items.forEach(function (f) { 
          if (f.id == YT.live.vs1 || f.id == YT.live.vs2) return;
          $er.append(YT.multisearch.giveHtml(f.title, f.pfp, f.id));
        });
      },
    );
  },
  giveHtml: function (name, image, id) {
    $e = $("<div>", {
      class: "round align-self-center",
      style: "background: url('" + image + "');background-size:cover;",
    });
    $ee = $("<h3>", {
      class: "m-b-0 font-light",
    }).text(name);
    $f = $("<div>", {
      class: "m-l-10 align-self-center",
    }).append($ee);
    $g = $("<div>", {
      class: "d-flex flex-row",
    });
    $g.append($e).append($f);
    return $("<div>", {
      class: "card-block card m-b-15",
    })
      .append($g)
      .on("click", function () {
        YT.multisearch.changeChannel(id);
      });
  },
  resetCompare: function () {
    $(".super-search,.dark-bg").fadeOut("400", function () {
      $("#results").html("");
      $("#yt_searchvalue_m").val("");
    });
  },
  newSearch: function (e) {
    e.preventDefault();
    YT.multisearch.getResults($("#yt_searchvalue_m").val());
  },
  changeChannel: function (e) {
    if (YT.sharing.changing == null) return;
    if (YT.sharing.changing == "vs1") {
      YT.urls.pushState(e, YT.live.vs2);
    } else {
      YT.urls.pushState(YT.live.vs1, e);
    }
    this.resetCompare();
  },
  bind: function () {
    $("#yt_comrest").on("click", this.resetCompare);
    $("#yt_search_m").on("submit", this.newSearch);
    $("#yt_searchbutton_m").on("click", this.newSearch);
  },
};
