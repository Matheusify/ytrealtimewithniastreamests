YT.live = {
  channelID: "",
  update: function () {
    $.getJSON("https://united-api.mixerno.space/youtube/channel?id=" + this.channelID, function (e) {
      if (e) {
        YT.updateManager.updateSubscribers(e.subscribers);
        YT.updateManager.updateViews(e.views);
        YT.updateManager.updateVideos(e.video);
      } else {
        YT.query.newSearch(YT.live.channelID);
      }
    });
  },

  timer: null,
  start: function () {
    this.stop();
    this.timer = setInterval(function (e) {
      YT.live.update();
    }, 2000);
    YT.live.update();
  },
  stop: function () {
    clearInterval(this.timer);
  },
};
