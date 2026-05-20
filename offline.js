const ua = navigator.userAgent;

// Blocks ALL Apple devices (Mac, iPhone, iPad)
if (
  (ua.includes("Safari") && !ua.includes("Chrome")) || 
  ua.includes("Macintosh") || 
  ua.includes("iPhone") || 
  ua.includes("iPad")
) {
  window.location.href = "/offline";
}