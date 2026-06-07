const API_KEY = "AIzaSyD1zP0euN0zVChL9i8rSumRRZmwIcRKywo";
const VLOG_UPLOADS = "UUGaVdbSav8xWuFWTadK6loA";

async function getLatestVlogTen() {
  const url =
    `https://www.googleapis.com/youtube/v3/playlistItems?` +
    `key=${API_KEY}` +
    `&playlistId=${VLOG_UPLOADS}` +
    `&part=snippet` +
    `&maxResults=10`;

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

getLatestVlogTen();
