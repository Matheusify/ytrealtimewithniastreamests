YT.live = {
    channelID: "",
    update: function () {
      $.getJSON("https://nia-statistics.com/api/get?platform=youtube&type=channel&id=" + this.channelID, function (e) {
        if (e) {
          YT.updateManager.updateSubscribers(e.estSubCount);
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
  