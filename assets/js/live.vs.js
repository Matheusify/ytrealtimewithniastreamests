YT.live = {
  vs1: "",
  vs2: "",
  update: function () {
    $.getJSON("https://axern.space/api/get?platform=youtube&type=channel&id=" + YT.live.vs1 + "", function (f) {
      $.getJSON("https://axern.space/api/get?platform=youtube&type=channel&id=" + YT.live.vs2 + "", function (g) {
        $.getJSON("https://corsproxy.io/?https://studio.nia-statistics.com/api/channel/" + YT.live.vs1, function (e) {
          $.getJSON("https://corsproxy.io/?https://studio.nia-statistics.com/api/channel/" + YT.live.vs2, function (h) {
        YT.updateManager.updateChannelI1D(encodeURIComponent(YT.live.vs1));
        YT.updateManager.updateChannelID2(encodeURIComponent(YT.live.vs2));
        if (e.success == false) {
        YT.updateManager.updateSubscribers(f.estSubCount, g.estSubCount);
        }
         else if (h.success == false) {
          YT.updateManager.updateSubscribers(e.channels.counts[2].count, g.estSubCount);
          let textyab = document.getElementById("yt_substext1").innerHTML;
          let idkyab = textyab.replace(/Estimated/gi, "Studio")
          document.getElementById("yt_substext1").textContent = idkyab
         }
          else {
            YT.updateManager.updateSubscribers(e.channels.counts[2].count, h.channels.counts[2].count);
            let textyab = document.getElementById("yt_substext1").innerHTML;
            let idkyab = textyab.replace(/Estimated/gi, "Studio")
            document.getElementById("yt_substext1").textContent = idkyab
            let textya1b = document.getElementById("yt_substext2").innerHTML;
            let idkya1b = textya1b.replace(/Estimated/gi, "Studio")
            document.getElementById("yt_substext2").textContent = idkya1b
          }
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
