const Crash = new Date("February 11, 2031 19:45:00");
    // I know this date isnt exact, becuase we dont really have a date yet, but this is the best one I could find

setInterval(() => {
              const now4 = new Date();
              const diff = Crash - now4;

                if (diff <= 0) {
                    safeSet("countdown5", "BOOOOM");
                    return;
                }

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / (1000 * 60)) % 60);
                const seconds = Math.floor((diff / 1000) % 60);

                const pad = (n) => String(n).padStart(2, "0");

                safeSet("countdown5",
                    `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
    }, 1000);
