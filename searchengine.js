//I DID NOT MAKE THIS FILE'S CODE. I dont know how to do this stuff so this file is made by Claude

const API_KEY = "AIzaSyD1zP0euN0zVChL9i8rSumRRZmwIcRKywo";

document.getElementById("searchBox").addEventListener("keydown", async function(e) {
  if (e.key === "Enter") {
    const query = this.value.trim();
    if (query.length === 0) return;

    const url =
      `https://www.googleapis.com/youtube/v3/search?` +
      `key=${API_KEY}` +
      `&part=snippet` +
      `&type=video` +
      `&maxResults=6` +
      `&q=${encodeURIComponent(query)}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = document.getElementById("results");
    results.innerHTML = "";

    data.items.forEach(item => {
      const videoId = item.id.videoId;

      const iframe = document.createElement("iframe");
      iframe.width = "560";
      iframe.height = "315";
      iframe.allowFullscreen = true;
      iframe.style = "border:2px solid #00be00;border-radius:4px;margin-bottom:20px;";
      iframe.src = `https://yout-ube.com/watch?v=${videoId}`;

      results.appendChild(iframe);
    });
  }
});
