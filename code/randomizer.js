const randomButton = document.getElementById("randomPageButton");

const allPages = [

    "https://soarinvandenberg.ca/clutter/life",
    "https://soarinvandenberg.ca/clutter/offline",
    "https://soarinvandenberg.ca/clutter/guestbook",
    "https://soarinvandenberg.ca/countdowns/class-time",
    "https://soarinvandenberg.ca/countdowns/days-left",
    "https://soarinvandenberg.ca/countdowns/graduation",
    "https://soarinvandenberg.ca/countdowns",
    "https://soarinvandenberg.ca/countdowns/ISS-crash",
    "https://soarinvandenberg.ca/countdowns/month-end",
    "https://soarinvandenberg.ca/countdowns/next-day",
    "https://soarinvandenberg.ca/countdowns/school-day",
    "https://soarinvandenberg.ca/countdowns/time-left",
    "https://soarinvandenberg.ca/countdowns/weeks",
    "https://soarinvandenberg.ca/countdowns/year-end",
    "https://soarinvandenberg.ca/old/ai",
    "https://soarinvandenberg.ca/old/esp-32",
    "https://soarinvandenberg.ca/old",
    "https://soarinvandenberg.ca/podcasts/dearhankandjohn",
    "https://soarinvandenberg.ca/podcasts/humanswithhank",
    "https://soarinvandenberg.ca/podcasts",
    "https://soarinvandenberg.ca/podcasts/waveform",
    "https://soarinvandenberg.ca/projects/esp-32",
    "https://soarinvandenberg.ca/projects",
    "https://soarinvandenberg.ca/videos/hankschannel",
    "https://soarinvandenberg.ca/videos",
    "https://soarinvandenberg.ca/videos/searchengine",
    "https://soarinvandenberg.ca/videos/vlogbrothers",
    "https://soarinvandenberg.ca/404",
    "https://soarinvandenberg.ca/about",
    "https://soarinvandenberg.ca/ai",
    "https://soarinvandenberg.ca/books",
    "https://soarinvandenberg.ca/contact",
    "https://soarinvandenberg.ca/easter-eggs",
    "https://soarinvandenberg.ca/guess-what",
    "https://soarinvandenberg.ca/ideas",
    "https://soarinvandenberg.ca",
    "https://soarinvandenberg.ca/links",
    "https://soarinvandenberg.ca/notes",
    "https://soarinvandenberg.ca/pages",
    "https://soarinvandenberg.ca/cheatcodes",
];

if (randomButton) {
    randomButton.addEventListener("click", () => {

        const randomIndex = Math.floor(Math.random() * allPages.length);

        window.location.href = allPages[randomIndex];
    });
}