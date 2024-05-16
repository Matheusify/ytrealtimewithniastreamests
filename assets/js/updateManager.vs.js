YT.updateManager = {
  prepare: function (e) {
    var odEl = ["#yt_subs_vs1", "#yt_subs_vs2", "#yt_diff"];
    odEl.forEach(function (e) {
      new Odometer({
        el: document.querySelector(e),
        value: "0",
        format: "(,ddd)",
        theme: "minimal",
      });
    });
  },
  updateName: function (e, f) {
    $(".vs1_name").text(e);
    $(".vs2_name").text(f);
  },
  updateProfile: function (e, f) {
    $("#yt_profile_vs1").attr("src", e);
    $("#yt_profile_vs2").attr("src", f);
  },
  updateCover: function (e, f) {
    $("#yt_cover_vs1").attr("src", e);
    $("#yt_cover_vs2").attr("src", f);
  },
  updateSubscribers: function (e, f) {
    $("#yt_subs_vs1").text(e);
    $("#yt_subs_vs2").text(f);
    $("#yt_diff").text(Math.abs(parseInt(e) - parseInt(f)));
    if (parseInt(e) - parseInt(f) > 0) {
      $(document.body).addClass("leading-left").removeClass("leading-right");
    } else {
      $(document.body).addClass("leading-right").removeClass("leading-left");
    }
  },

  updateChannelI1D: function (e) {
    YT.live.channelI1D = e;
      if (YT.live.channelI1D == "UCX6OQ3DkcsbYNE6H8uQQuVA") {
        let textyab = document.getElementById("yt_substext1").innerHTML;
        let idkyab = textyab.replace(/Estimated/gi, "Studio")
        document.getElementById("yt_substext1").textContent = idkyab
      }
      else {
        let textyab = document.getElementById("yt_substext1").innerHTML;
        let idkyab = textyab.replace(/Studio/gi, "Estimated")
        document.getElementById("yt_substext1").textContent = idkyab
      }
  },
  updateChannelID2: function (f) {
    YT.live.channelID2 = f;
      if (YT.live.channelID2 == "UCX6OQ3DkcsbYNE6H8uQQuVA") {
        let textya1b = document.getElementById("yt_substext2").innerHTML;
        let idkya1b = textya1b.replace(/Estimated/gi, "Studio")
        document.getElementById("yt_substext2").textContent = idkya1b
      }
      else {
        let textya1b = document.getElementById("yt_substext2").innerHTML;
        let idkya1b = textya1b.replace(/Studio/gi, "Estimated")
        document.getElementById("yt_substext2").textContent = idkya1b
      }
  },
};
