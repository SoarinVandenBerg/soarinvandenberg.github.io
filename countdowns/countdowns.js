const Crash = new Date("February 11, 2031 19:45:00");

setInterval(() => {
    const now = new Date();
    const diff = Crash - now;

    if (diff <= 0) {
        document.getElementById("countdown01").innerText = "BOOOOM";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const pad = (n) => String(n).padStart(2, "0");

    document.getElementById("countdown01").innerText =
        `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}, 1000);
