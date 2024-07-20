YT.live = {
  channelID: "",
  update: function () {
    $.getJSON("https://corsproxy.io/?https://studio.nia-statistics.com/api/channel/" + this.channelID, function (e) {
    $.getJSON("https://axern.space/api/get?platform=youtube&type=channel&id=" + YT.live.channelID, function (f) {
      if (e, f) {
        if (e.success == false) {
        YT.updateManager.updateSubscribers(f.estSubCount);
        YT.updateManager.updateViews(f.estViewCount);
        YT.updateManager.updateVideos(f.apiVideoCount);
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
