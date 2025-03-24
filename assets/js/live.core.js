YT.live = {
  channelID: "",
  update: function () {
    if (this.channelID === "UCX6OQ3DkcsbYNE6H8uQQuVA") {
      $.getJSON("/api/mrbeast/youtube-subcount/", function (g) {
        $.getJSON(
          "/api/youtube-subcount/" + "UCX6OQ3DkcsbYNE6H8uQQuVA",
          function (h) {
            YT.updateManager.updateSubscribers(h.stats.subCount);
            YT.updateManager.updateViews(g.stats.vsCount);
            YT.updateManager.updateVideos(h.stats.totalViews);
            let textyaab = document.getElementById("yt_viewstext").innerHTML;
            let idkyaab = textyaab
              .replace(/Subscribers/gi, "ViewStats")
              .replace(/(API)/gi, "Count")
              .replace(/\((.*?)\)/g, "$1");
            document.getElementById("yt_viewstext").textContent = idkyaab;
            console.log(idkyaab);
          }
        );
      });
    } else {
      $.getJSON(
        "/api/youtube-subcount/studio/" + this.channelID,
        function (e) {
          $.getJSON(
            "/api/youtube-subcount/" +
              YT.live.channelID,
            function (f) {
              if ((e, f)) {
                 if (e.success == "Not in studio.") {
                  YT.updateManager.updateSubscribers(
                    f.stats.subCount
                  );
                  YT.updateManager.updateViews(
                    f.stats.apiSubCount
                  );
                  YT.updateManager.updateVideos(
                    f.stats.totalViews
                  );

                  let textyaab =
                    document.getElementById("yt_viewstext").innerHTML;
                  if (textyaab === "ViewStats Count") {
                    let idkyaab = textyaab
                      .replace(/ViewStats/gi, "Subscribers")
                      .replace(/Count/gi, "(API)");
                    document.getElementById("yt_viewstext").textContent =
                      idkyaab;
                  }
                  console.log(idkyaab);
                } else {
                  YT.updateManager.updateSubscribers(
                    e.stats.subCount
                  );
                  YT.updateManager.updateViews(e.stats.apiSubCount);
                  YT.updateManager.updateVideos(f.stats.totalViews);
                                     let textyab =
                    document.getElementById("yt_substext").innerHTML;
                  let idkyab = textyab.replace(/Estimated/gi, "Studio");
                  document.getElementById("yt_substext").textContent = idkyab;
                }
              } else {
                YT.query.newSearch(YT.live.channelID);
           }
          )
        }
      );
    }
  },
};


  timer: null,
  start: function () {
    this.stop();
    this.timer = setInterval(function (e, f) {
      YT.live.update();
    }, 2000);
    YT.live.update();
  },
  stop: function () {
    clearInterval(this.timer);
  },
};
