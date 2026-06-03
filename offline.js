document.addEventListener("DOMContentLoaded", () => {
  const ua = navigator.userAgent;

  const isIOS = /iPad|iPod/i.test(ua);
  const isMac = /Macintosh/i.test(ua);

  const allowed = localStorage.getItem("deviceAllowed") === "true";

  if ((isIOS || isMac) && !allowed) {
    window.location.href = "/offline";
  }
});