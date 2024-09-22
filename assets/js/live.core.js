YT.live = {
  channelID: "",
  update: function () {
    $.getJSON("https://mrb.toasted.dev/count", function (g) {
    $.getJSON("https://corsproxy.io/?https://studio.nia-statistics.com/api/channel/" + this.channelID, function (e) {
    $.getJSON("https://backend.mixerno.space/api/youtube/estv3/" + YT.live.channelID, function (f) {
      if (e, f, g) {
        if (e.success == false) {
        YT.updateManager.updateSubscribers(f.items[0].statistics.subscriberCount);
        YT.updateManager.updateViews(f.items[0].statistics.viewCount);
        YT.updateManager.updateVideos(f.items[0].statistics.videoCount);
        }
        if (this.channelID === "UCX6OQ3DkcsbYNE6H8uQQuVA") {
          YT.updateManager.updateSubscribers(g.mrbeastEst)
          YT.updateManager.updateViews(f.items[0].statistics.viewCount)
          YT.updateManager.updateVideos(f.items[0].statistics.videoCount)
        }
        else {
          YT.updateManager.updateSubscribers(e.channels.counts[2].count);
          YT.updateManager.updateViews(e.channels.counts[1].count);
          YT.updateManager.updateVideos(f.apiVideoCount);
          let textyab = document.getElementById("yt_substext").innerHTML;
          let idkyab = textyab.replace(/Estimated/gi, "Studio")
          document.getElementById("yt_substext").textContent = idkyab
        }
      } else {
        YT.query.newSearch(YT.live.channelID);
      }
    })
    });
})
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
