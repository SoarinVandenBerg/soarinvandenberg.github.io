//I DID NOT MAKE THIS FILE'S CODE. I dont know how to do this stuff so this file is made by Claude

const API_KEY = "AIzaSyD1zP0euN0zVChL9i8rSumRRZmwIcRKywo";
const HANK_CHANNEL_ID = "UCDsO-0Yo5zpJk575nKXgMVA";
const VLOG_CHANNEL_ID = "UCGaVdbSav8xWuFWTadK6loA";

async function getLatestHankVideo() {
  const url =
    `https://www.googleapis.com/youtube/v3/search?` +
    `key=${API_KEY}` +
    `&channelId=${HANK_CHANNEL_ID}` +
    `&order=date` +
    `&part=snippet` +
    `&type=video` +
    `&maxResults=1`;

  const response = await fetch(url);
  const data = await response.json();

  const latest = data.items[0];
  const videoId = latest.id.videoId;

  document.getElementById("hankvideo").href = `https://yout-ube.com/watch?v=${videoId}`;
}

getLatestHankVideo();

async function getLatestVlogVideo() {
  const url =
    `https://www.googleapis.com/youtube/v3/search?` +
    `key=${API_KEY}` +
    `&channelId=${VLOG_CHANNEL_ID}` +
    `&order=date` +
    `&part=snippet` +
    `&type=video` +
    `&maxResults=1`;

  const response = await fetch(url);
  const data = await response.json();

  const latest = data.items[0];
  const videoId = latest.id.videoId;

  document.getElementById("vlogvideo").href = `https://yout-ube.com/watch?v=${videoId}`;
}

getLatestVlogVideo();


