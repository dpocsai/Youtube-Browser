import axios from "axios";

const KEY = "AIzaSyBe657MHYSoQ_3xfF664hTkEvSBU8WeQiE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
