YT.live = {
  vs1: "",
  vs2: "",
  update: function () {
    $.getJSON("/api/youtube-subcount/" + YT.live.vs1 + "", function (f) {
      $.getJSON("/api/youtube-subcount/" + YT.live.vs2 + "", function (e) {
        YT.updateManager.updateChannelI1D(encodeURIComponent(YT.live.vs1));
        YT.updateManager.updateChannelID2(encodeURIComponent(YT.live.vs2));
        YT.updateManager.updateSubscribers(f.stats.subCount, g.stats.subCount);
      });
    });
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
