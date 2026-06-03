document.addEventListener("DOMContentLoaded", () => {
  const ua = navigator.userAgent;

  const isIOS = /iPad|iPod/i.test(ua);
  const isMac = /Macintosh/i.test(ua);

  if (isIOS || isMac) {
    window.location.href = "/offline";
  }
});