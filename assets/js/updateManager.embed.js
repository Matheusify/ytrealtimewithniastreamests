YT.updateManager = {
    prepare: function (e) {
      var odEl = ["#yt_subs"];
      odEl.forEach(function (e) {
        new Odometer({
          el: document.querySelector(e),
          value: "0",
          format: "(,ddd)",
          theme: "minimal",
        });
      });
    },
    updateName: function (e) {
      $(".yt_name").text(e);
    },
    updateProfile: function (e) {
      $("#yt_profile").attr("src", e);
    },
    updateSubscribers: function (e) {
      $("#yt_subs").text(e);
    },
}
  