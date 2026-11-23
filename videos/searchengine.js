//I looked up how to do this one so credit to google!!


// Search engine

const API_KEY = "AIzaSyD1zP0euN0zVChL9i8rSumRRZmwIcRKywo";

let nextPageToken = null;
let prevPageToken = null;
let lastQuery = "";

document.getElementById("searchBox").addEventListener("keydown", async function(e) {
  if (e.key === "Enter") {
    const query = this.value.trim();
    if (query.length === 0) return;

    lastQuery = query;

    loadSearchPage("");
  }
});

async function loadSearchPage(pageToken) {
  const url =
    `https://www.googleapis.com/youtube/v3/search?` +
    `key=${API_KEY}` +
    `&part=snippet` +
    `&type=video` +
    `&maxResults=6` +
    `&q=${encodeURIComponent(lastQuery)}` +
    `&pageToken=${pageToken}`; 

  const response = await fetch(url);
  const data = await response.json();

  nextPageToken = data.nextPageToken || null;
  prevPageToken = data.prevPageToken || null;

  const results = document.getElementById("results");
  results.innerHTML = "";

  data.items.forEach(item => {
    const videoId = item.id.videoId;

    const iframe = document.createElement("iframe");

    iframe.classList.add("video-frame");
    iframe.allowFullscreen = true;

    iframe.src = `https://yout-ube.com/watch?v=${videoId}`;

    results.appendChild(iframe);
  });

  document.getElementById("nextBtn").style.display = nextPageToken ? "inline-block" : "none";
  document.getElementById("prevBtn").style.display = prevPageToken ? "inline-block" : "none";
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (nextPageToken) loadSearchPage(nextPageToken);
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (prevPageToken) loadSearchPage(prevPageToken);
});
