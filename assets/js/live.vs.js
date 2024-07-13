YT.live = {
  vs1: "",
  vs2: "",
  update: function () {
    $.getJSON("https://united-api.mixerno.space/youtube/channel?id=" + YT.live.vs1 + "", function (f) {
      $.getJSON("https://united-api.mixerno.space/youtube/channel?id=" + YT.live.vs2 + "", function (g) {
        YT.updateManager.updateChannelI1D(encodeURIComponent(YT.live.vs1));
        YT.updateManager.updateChannelID2(encodeURIComponent(YT.live.vs2));
        YT.updateManager.updateSubscribers(f.subscribers, g.subscribers);
      });
    });
  },
  timer: null,
  setVS: function (e, f) {
    this.vs1 = e;
    this.vs2 = f;
    this.start();
  },
  start: function () {
    this.stop();
    YT.query.begin();
    this.timer = setInterval(function (e) {
      YT.live.update();
    }, 2000);
    YT.live.update();
    
  },
  stop: function () {
    clearInterval(this.timer);
  },
};
