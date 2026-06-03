document.getElementById("nomac").addEventListener("click", function() {
  localStorage.setItem("allowmac");
});

document.addEventListener("DOMContentLoaded", () => {
  const ua = navigator.userAgent;

  const isIOS = /iPad|iPod/i.test(ua);
  const isMac = /Macintosh/i.test(ua);

  if (isIOS || isMac && !localStorage.getItem("allowmac")) {
    window.location.href = "/offline";
  }
});
