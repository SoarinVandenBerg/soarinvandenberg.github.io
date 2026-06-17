//this one only a little bit of ai help! 

const API_KEY = "AIzaSyD1zP0euN0zVChL9i8rSumRRZmwIcRKywo";
const POD_HUMANS_CHANNEL_ID = "UC7QrGBQ7DGv47UXJobHmL1Q";
const POD_WAVEFORM_CHANNEL_ID = "UCEcrRXW3oEYfUctetZTAWLw";
const POD_DEARHANKANDJOHN_CHANNEL_ID = "UCldoL0vMV7hkUPIauUY4IjA";
// const POD_HUMANS_CHANNEL_ID1 = "UU7QrGBQ7DGv47UXJobHmL1Q";
// const POD_WAVEFORM_CHANNEL_ID1 = "UUEcrRXW3oEYfUctetZTAWLw";
// const POD_DEARHANKANDJOHN_CHANNEL_ID1 = "UUldoL0vMV7hkUPIauUY4IjA";

async function getLatestHumanVideo() {
  const url =
    `https://www.googleapis.com/youtube/v3/search?` +
    `key=${API_KEY}` +
    `&channelId=${POD_HUMANS_CHANNEL_ID}` +
    `&order=date` +
    `&part=snippet` +
    `&type=video` +
    `&maxResults=1`;

  const response = await fetch(url);
  const data = await response.json();

  const latest = data.items[0];
  const videoId = latest.id.videoId;

  document.getElementById("humanvideo").src = `https://yout-ube.com/watch?v=${videoId}`;
}

async function getLatestWaveformVideo() {
  const url =
    `https://www.googleapis.com/youtube/v3/search?` +
    `key=${API_KEY}` +
    `&channelId=${POD_WAVEFORM_CHANNEL_ID}` +
    `&order=date` +
    `&part=snippet` +
    `&type=video` +
    `&maxResults=1`;

  const response = await fetch(url);
  const data = await response.json();

  const latest = data.items[0];
  const videoId = latest.id.videoId;

  document.getElementById("waveformvideo").src = `https://yout-ube.com/watch?v=${videoId}`;
}

async function getLatestDearHankVideo() {
  const url =
    `https://www.googleapis.com/youtube/v3/search?` +
    `key=${API_KEY}` +
    `&channelId=${POD_DEARHANKANDJOHN_CHANNEL_ID}` +
    `&order=date` +
    `&part=snippet` +
    `&type=video` +
    `&maxResults=1`;

  const response = await fetch(url);
  const data = await response.json();

  const latest = data.items[0];
  const videoId = latest.id.videoId;

  document.getElementById("dearhankvideo").src = `https://yout-ube.com/watch?v=${videoId}`;
}


//Vlogbrothers latest 12 code

const HUMANS_UPLOADS = "UU7QrGBQ7DGv47UXJobHmL1Q";

async function getLatestHumansTwelve() {
  const url =
    `https://www.googleapis.com/youtube/v3/playlistItems?` +
    `key=${API_KEY}` +
    `&playlistId=${HUMANS_UPLOADS}` +
    `&part=snippet` +
    `&maxResults=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.items || data.items.length === 0) return;

  const container = document.getElementById("humans-list");
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


if (document.getElementById("humans-list")) getLatestHumansTwelve();



if (document.getElementById("waveformvideo")) getLatestWaveformVideo();
if (document.getElementById("dearhankvideo")) getLatestDearHankVideo();
if (document.getElementById("humanvideo")) getLatestHumanVideo();
