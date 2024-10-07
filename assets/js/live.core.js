YT.live = {
  channelID: "",
  update: function () {
    if (this.channelID === "UCX6OQ3DkcsbYNE6H8uQQuVA") {
      $.getJSON("https://mrb.toasted.dev/count", function (g) {
        $.getJSON(
          "https://backend.mixerno.space/api/youtube/estv3/" +
            "UCX6OQ3DkcsbYNE6H8uQQuVA",
          function (h) {
            YT.updateManager.updateSubscribers(g.mrbeastEst);
            YT.updateManager.updateViews(g.mrbeast);
            YT.updateManager.updateVideos(h.items[0].statistics.viewCount);
            let textyaab =
            document.getElementById("yt_viewstext").innerHTML;
          let idkyaab = textyaab.replace(/Subscribers/gi, "ViewStats").replace(/(API)/gi, "Count").replace(/\((.*?)\)/g, "$1");;
          document.getElementById("yt_viewstext").textContent = idkyaab;
          console.log(idkyaab)  
          },
        );
      });
    } else {
      $.getJSON(
        "https://corsproxy.io/?studio.nia-statistics.com/api/channel/" +
          this.channelID,
        function (e) {
          $.getJSON(
            "https://backend.mixerno.space/api/youtube/estv3/" +
              YT.live.channelID,
            function (f) {
              if ((e, f)) {
                if (e.success == false) {
                  YT.updateManager.updateSubscribers(
                    f.items[0].statistics.subscriberCount,
                  );
                  YT.updateManager.updateViews(f.items[0].statistics.subscriberCountAPI);
                  YT.updateManager.updateVideos(
                    f.items[0].statistics.viewCount,
                  );

                  let textyaab =
                  document.getElementById("yt_viewstext").innerHTML;
                  if (textyaab === "ViewStats Count") {
                let idkyaab = textyaab.replace(/ViewStats/gi, "Subscribers").replace(/Count/gi, "(API)");
                document.getElementById("yt_viewstext").textContent = idkyaab;
                  }
                console.log(idkyaab)
                } else {
                  YT.updateManager.updateSubscribers(
                    e.channels.counts[2].count,
                  );
                  YT.updateManager.updateViews(e.channels.counts[1].count);
                  YT.updateManager.updateVideos(f.apiVideoCount);
                  let textyab =
                    document.getElementById("yt_substext").innerHTML;
                  let idkyab = textyab.replace(/Estimated/gi, "Studio");
                  document.getElementById("yt_substext").textContent = idkyab;
                }
              } else {
                YT.query.newSearch(YT.live.channelID);
              }
            },
          );
        },
      );
    }
  },

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
