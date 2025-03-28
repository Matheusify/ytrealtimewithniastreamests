const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

// API route to get YouTube live subscriber count
app.get("/api/youtube-subcount/:channelId", async (req, res) => {
  const { channelId } = req.params;

  try {
    // Fetch data from the external API
    const response = await fetch(
      `https://ests.sctools.org/api/get/${channelId}`
    );
      const respons2e = await fetch(
      `https://backend.mixerno.space/api/youtube/estv3/${channelId}`
    );
    const info = await response.json();
    const inf2o = await respons2e.json();
    const subCount = info.stats.estCount;
    const totalViews = info.stats.viewCount;
    const apiViews = inf2o.items[0].statistics.viewCountAPI;
    const apiSubCount = info.stats.apiCount;
    const videos = info.stats.videoCount;
    const channelLogo = info.info.avatar;
    const channelName = info.info.name;
    const channelBanner = `https://www.banner.yt/${channelId}`;

    res.json({
      stats: { subCount, totalViews, apiSubCount, videos, apiViews },
      info: { channelLogo, channelName, channelBanner },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch subscriber count" });
  }
});

app.get("/api/youtube-subcount/studio/:channelId", async (req, res) => {
  const { channelId } = req.params;

  try {
    // Fetch data from the external API
    const response = await fetch(
      `https://api-v2.nextcounts.com/api/youtube/channel/${channelId}`
    );
    const respons2e = await axios.get(
      `https://backend.mixerno.space/api/youtube/estv3/${channelId}`
    );
    const info = await response.json();
    if (info.verifiedSubCount === false) {
   const success = "Not in studio."

   res.json({
   success
});
};
  if (info.verifiedSubCount === true) {
    const subCount = info.subcount;
    const viewCount = info.viewcount;
    const apiSubCount = respons2e.data.items[0].statistics.subscriberCountAPI;
    const videos = respons2e.data.items[0].statistics.videoCount;
    const apiViews = respons2e.data.items[0].statistics.viewCountAPI;
    const channelLogo = info.userImg;
    const channelName = respons2e.data.items[0].snippet.title;
    const channelBanner = `https://www.banner.yt/${channelId}`;

    res.json({
      stats: { subCount, viewCount, apiSubCount, videos, apiViews },
      item: { channelLogo, channelName, channelBanner },
    });
}
  } catch (error) {
    console.error(error);
    res.status(200).json({ success: "Not in studio." });
  }
});

app.get("/api/mrbeast/youtube-subcount/", async (req, res) => {
  try {
    // Fetch data from the external API
    const response = await axios.get(`https://mrbeast.subscribercount.app/data`);
    const respons2e = await axios.get(
      `https://backend.mixerno.space/api/youtube/estv3/UCX6OQ3DkcsbYNE6H8uQQuVA`
    );
    const subCount = response.data.mrbeastEst;
    const vsCount = response.data.mrbeast;
    const vsUpdateTime = response.data.time;
    const viewCount = respons2e.data.items[0].statistics.viewCount;
    const apiSubCount = respons2e.data.items[0].statistics.subscriberCountAPI;
    const videos = respons2e.data.items[0].statistics.videoCount;
    const apiViews = respons2e.data.items[0].statistics.viewCountAPI;
    const channelLogo = respons2e.data.items[0].brandingSettings.image;
    const channelName = respons2e.data.items[0].snippet.title;
    const channelBanner = `https://www.banner.yt/UCX6OQ3DkcsbYNE6H8uQQuVA`;

    res.json({
      stats: {
        subCount,
        viewCount,
        apiSubCount,
        videos,
        apiViews,
        vsCount,
        vsUpdateTime,
      },
      item: { channelLogo, channelName, channelBanner },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch subscriber count" });
  }
});


app.listen(6942, () => console.log("Server ready on port 3000."));

module.exports = app;
