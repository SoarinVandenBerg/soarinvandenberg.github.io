//this one only a little bit of ai help! 

const API_KEY = "AIzaSyD1zP0euN0zVChL9i8rSumRRZmwIcRKywo";
const POD_HUMANS_CHANNEL_ID = "UC7QrGBQ7DGv47UXJobHmL1Q";
const POD_WAVEFORM_CHANNEL_ID = "UCEcrRXW3oEYfUctetZTAWLw";
const POD_DEARHANKANDJOHN_CHANNEL_ID = "UCldoL0vMV7hkUPIauUY4IjA";

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

if (document.getElementById("waveformvideo")) getLatestWaveformVideo();
if (document.getElementById("dearhankvideo")) getLatestDearHankVideo();
if (document.getElementById("humanvideo")) getLatestHumanVideo();
