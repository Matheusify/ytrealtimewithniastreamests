YT.query = {
  begin: function () {
    $.getJSON(
      "/api/youtube-subcount/" + encodeURIComponent(YT.live.vs1),
      function (f) {
        $.getJSON(
          "/api/youtube-subcount/" + encodeURIComponent(YT.live.vs2),
          function (g) {  
            YT.updateManager.updateChannelI1D(encodeURIComponent(YT.live.vs1));
            YT.updateManager.updateChannelID2(encodeURIComponent(YT.live.vs2));
            YT.updateManager.updateCover(f.info.channelBanner, g.info.channelBanner);
            YT.updateManager.updateName(f.info.channelName, g.info.channelName);
            YT.updateManager.updateProfile(f.info.channelLogo, g.info.channelLogo);
          },
        );
      },
    );
  },
  bind: function () {},
};
