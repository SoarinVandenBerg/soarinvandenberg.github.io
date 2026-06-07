//I DID NOT MAKE THIS FILE'S CODE. I dont know how to do this stuff so this file is made by Claude

const API_KEY = "AIzaSyD1zP0euN0zVChL9i8rSumRRZmwIcRKywo";
const HANK_CHANNEL_ID1 = "UUOT2iLov0V7Re7ku_3UBtcQ";

async function getLatestTen() {
  const url =
    `https://www.googleapis.com/youtube/v3/playlistItems?` +
    `key=${API_KEY}` +
    `&playlistId=${HANK_CHANNEL_ID1}` +
    `&part=snippet` +
    `&maxResults=10`;

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

getLatestTen();
