//I DID NOT MAKE THIS FILE'S CODE. I dont know how to do this stuff so this file is made by Claude


//Finding latest video multiple channels code

const API_KEY = "AIzaSyD1zP0euN0zVChL9i8rSumRRZmwIcRKywo";
const HANK_CHANNEL_ID = "UCOT2iLov0V7Re7ku_3UBtcQ";
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

  document.getElementById("hankvideo").src = `https://yout-ube.com/watch?v=${videoId}`;
}



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

  document.getElementById("vlogvideo").src = `https://yout-ube.com/watch?v=${videoId}`;
}


//Vlogbrothers latest 12 code

const VLOG_UPLOADS = "UUGaVdbSav8xWuFWTadK6loA";

async function getLatestVlogTwelve() {
  const url =
    `https://www.googleapis.com/youtube/v3/playlistItems?` +
    `key=${API_KEY}` +
    `&playlistId=${VLOG_UPLOADS}` +
    `&part=snippet` +
    `&maxResults=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.items || data.items.length === 0) return;

  const container = document.getElementById("vlog-list");
  container.innerHTML = "";

  data.items.forEach(item => {
    const videoId = item.snippet.resourceId.videoId;

    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.allowFullscreen = true;
    iframe.style = "border:2px solid #00be00;border-radius:4px;margin-bottom:20px;";
    iframe.src = `https://yout-ube.com/watch?v=${videoId}`;

    container.appendChild(iframe);
  });
}


//Hanks channel latest 12 code

const HANK_CHANNEL_ID1 = "UUOT2iLov0V7Re7ku_3UBtcQ";

async function getLatestTwelve() {
  const url =
    `https://www.googleapis.com/youtube/v3/playlistItems?` +
    `key=${API_KEY}` +
    `&playlistId=${HANK_CHANNEL_ID1}` +
    `&part=snippet` +
    `&maxResults=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.items || data.items.length === 0) return;

  const container = document.getElementById("hank-list");
  container.innerHTML = "";

  data.items.forEach(item => {
    const videoId = item.snippet.resourceId.videoId;

    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.allowFullscreen = true;
    iframe.style = "border:2px solid #00be00;border-radius:4px;margin-bottom:20px;";
    iframe.src = `https://yout-ube.com/watch?v=${videoId}`;

    container.appendChild(iframe);
  });
}


if (document.getElementById("hankvideo")) getLatestHankVideo();
if (document.getElementById("vlogvideo")) getLatestVlogVideo();
if (document.getElementById("hank-list")) getLatestTwelve();
if (document.getElementById("vlog-list")) getLatestVlogTwelve();