// Popup logic

function openEggPopup(eggkey) {
  if (!localStorage.getItem(eggkey)) {
    localStorage.setItem(eggkey, "true");
  };

  const overlay = document.querySelector(".background");
  const yesBtn = document.querySelector("#eggPopupYes");
  const noBtn = document.querySelector("#eggPopupNo");

  overlay.style.display = "flex";

  yesBtn.onclick = () => {
    overlay.style.display = "none";
    window.location.href = "/easter-eggs";
  };
  noBtn.onclick = () => {
    overlay.style.display = "none";
  };
}


// Egg 1

document.getElementById("Egg1")?.addEventListener("click", function() {
  localStorage.setItem("egg1_found", "true");
  openEggPopup("egg1_found");
});


// Egg 2

const sitePages = [
  "visited_about",
  "visited_notes",
  "visited_books",
  "visited_contact",
  "visited_countdowns",
  "visited_index",
  "visited_pages",
  "visited_projects",
];

let allSiteVisited = sitePages.every(key => localStorage.getItem(key));
if (allSiteVisited && !localStorage.getItem("egg2_found")) {
  localStorage.setItem("egg2_found", "true");
  openEggPopup("egg2_found");
}


// Egg 3

const countdownPages = [
  "count01",
  "count02",
  "count03",
  "count04",
  "count05",
];

let allCountVisited = countdownPages.every(key => localStorage.getItem(key));
if (allCountVisited && !localStorage.getItem("egg3_found")) {
  localStorage.setItem("egg3_found", "true");
  localStorage.setItem("popupReload", "egg3_found");
  location.reload();
}


// Egg 4

document.getElementById("Egg4")?.addEventListener("click", function() {
  localStorage.setItem("egg4_found", "true");
  openEggPopup("egg4_found");
});


// Egg 6

const brokenPage = ["visited_404"];

let brokenVisited = brokenPage.every(key => localStorage.getItem(key));
if (brokenVisited && !localStorage.getItem("egg6_found")) {
  localStorage.setItem("egg6_found", "true");
  localStorage.setItem("popupReload", "egg6_found");
  location.reload();
}


// Egg 7

const allEggs = [
  "egg1_found",
  "egg2_found",
  "egg3_found",
  "egg4_found",
  "egg5_found",
  "egg6_found",
  "egg8_found",
  "egg9_found",
  "egg10_found",
  "egg11_found",
  "egg12_found",
  "egg13_found",
  "egg14_found",
  "egg15_found",
  "egg16_found",
  "egg17_found",
]

let allEggsFound = allEggs.every(key => localStorage.getItem(key));
if (allEggsFound && !localStorage.getItem("egg7_found")) {
  localStorage.setItem("egg7_found", "true");
  openEggPopup("egg7_found");
}


// Egg 8

const konamiCode = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
];

let konamiPosition = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[konamiPosition]) {
        konamiPosition++;

        if (konamiPosition === konamiCode.length) {
            if (!localStorage.getItem("egg8_found")) {
                localStorage.setItem("egg8_found", "true"); 
                openEggPopup("egg8_found");
            }
            konamiPosition = 0;
        }
    } else {
        konamiPosition = 0;
      }
 });


 // Egg 9
 
 let visits = Number(localStorage.getItem("visits_index") || 0);
  visits++;
  localStorage.setItem("visits_index", visits);

  if (visits >= 25 && !localStorage.getItem("egg9_found")) {
    localStorage.setItem("egg9_found", "true");
    openEggPopup("egg9_found");
  }


 // Egg 10

const ansLife = [
    "4", "2"
];

let ansPos = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === ansLife[ansPos]) {
        ansPos++;

        if (ansPos === ansLife.length) {
            if (!localStorage.getItem("egg10_found")) {
                localStorage.setItem("egg10_found", "true"); 
                openEggPopup("egg10_found");
            }
            ansPos = 0;
        }
    } else {
        ansPos = 0;
      }
 });


 // Egg 11

document.getElementById("Egg11")?.addEventListener("click", function() {
  localStorage.setItem("egg11_found", "true");
  openEggPopup("egg11_found");
});


 // Egg 12

        document.getElementById("site1")?.addEventListener("click", function() {
          localStorage.setItem("link1", "true");
        });
        document.getElementById("site2")?.addEventListener("click", function() {
          localStorage.setItem("link2", "true");
        });
        document.getElementById("site3")?.addEventListener("click", function() {
          localStorage.setItem("link3", "true");
        });
        document.getElementById("site4")?.addEventListener("click", function() {
          localStorage.setItem("link4", "true");
        });
        document.getElementById("site5")?.addEventListener("click", function() {
          localStorage.setItem("link5", "true");
        });
        document.getElementById("site6")?.addEventListener("click", function() {
          localStorage.setItem("link6", "true");
        });
        document.getElementById("site7")?.addEventListener("click", function() {
          localStorage.setItem("link7", "true");
        });
        document.getElementById("site8")?.addEventListener("click", function() {
          localStorage.setItem("link8", "true");
        });
        document.getElementById("site9")?.addEventListener("click", function() {
          localStorage.setItem("link9", "true");
        });
        document.getElementById("site10")?.addEventListener("click", function() {
          localStorage.setItem("link10", "true");
        });
        document.getElementById("site11")?.addEventListener("click", function() {
          localStorage.setItem("link11", "true");
        });
        document.getElementById("site12")?.addEventListener("click", function() {
          localStorage.setItem("link12", "true");
        });
        document.getElementById("site13")?.addEventListener("click", function() {
          localStorage.setItem("link13", "true");
        });

 const linkPages = [
    "link1",
    "link2",
    "link3",
    "link4",
    "link5",
    "link6",
    "link7",
    "link8",
    "link9",
    "link10",
    "link11",
    "link12",
    "link13",
    "link14",
];

let allLinkVisited = linkPages.every(key => localStorage.getItem(key));
if (allLinkVisited && !localStorage.getItem("egg12_found")) {
  localStorage.setItem("egg12_found", "true");
  localStorage.setItem("popupReload", "egg12_found");
  location.reload();
}


// Egg 13

const allVideos = [
    "visited_hankschannel",
    "visited_vlogbrothers",
    "visited_videofinder",
    "visited_videos",
]

let allVideosVisited = allVideos.every(key => localStorage.getItem(key));
if (allVideosVisited && !localStorage.getItem("egg13_found")) {
  localStorage.setItem("egg13_found", "true");
  localStorage.setItem("popupReload", "egg13_found");
  location.reload();
}


// Egg 14

document.addEventListener("DOMContentLoaded", () => {

if (localStorage.getItem("popupReload")) {
    const key = localStorage.getItem("popupReload");
    localStorage.removeItem("popupReload");
    openEggPopup(key);
}
    
const easterEggs = document.querySelectorAll('.egg a');

    easterEggs.forEach(egg => {
        egg.addEventListener('click', (e) => {
            if (!localStorage.getItem('egg14_found')) {
                e.preventDefault();
                openEggPopup('egg14_found');
            }
        });
    });
});


// Egg 15

window.addEventListener("scroll", function() {
const scrolledTo = window.scrollY + window.innerHeight;
const pageHeight = document.documentElement.scrollHeight;

if (scrolledTo >= pageHeight - 50) {
  if (!localStorage.getItem("egg15_found")) {
      openEggPopup("egg15_found");
    }
  }
});


// Egg 16

const OldPages = [
    "OldIndex",
    "OldAI",
    "OldESP-32",
];

let allOldVisited = OldPages.every(key => localStorage.getItem(key));
if (allOldVisited && !localStorage.getItem("egg16_found")) {
  localStorage.setItem("egg16_found", "true");
  localStorage.setItem("popupReload", "egg16_found");
  location.reload();
}


// Egg 17

const gavriilCode = [
    "g", "a",
    "v", "r",
    "i", "i",
    "l"
];

let gavriilPosition = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === gavriilCode[gavriilPosition]) {
        gavriilPosition++;

        if (gavriilPosition === gavriilCode.length) {

            if (!localStorage.getItem("egg17_found")) {
                localStorage.setItem("egg17_found", "true"); 
                openEggPopup("egg17_found");
            }
            gavriilPosition = 0;
        }
    } else {
        gavriilPosition = 0;
      }
 });



// This cheatcode is for testing only! It gives you all of the eggs :D

const cheatCode = [
    "1", "3",
    "2", "4",
    "3", "5",
];

let cheatPosition = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === cheatCode[cheatPosition]) {
        cheatPosition++;

        if (cheatPosition === cheatCode.length) {
            localStorage.setItem("egg1_found", "true");
            localStorage.setItem("egg2_found", "true");
            localStorage.setItem("egg3_found", "true");
            localStorage.setItem("egg4_found", "true");
            localStorage.setItem("egg5_found", "true");
            localStorage.setItem("egg6_found", "true");
            localStorage.setItem("egg7_found", "true");
            localStorage.setItem("egg8_found", "true");
            localStorage.setItem("egg9_found", "true");
            localStorage.setItem("egg10_found", "true");
            localStorage.setItem("egg11_found", "true");
            localStorage.setItem("egg12_found", "true");
            localStorage.setItem("egg13_found", "true");
            localStorage.setItem("egg14_found", "true");
            localStorage.setItem("egg15_found", "true");
            localStorage.setItem("egg16_found", "true");
            localStorage.setItem("egg17_found", "true");
            localStorage.setItem("visits_index", "true");
            localStorage.setItem("visited_about", "true");
            localStorage.setItem("visited_ai", "true");
            localStorage.setItem("visited_notes", "true");
            localStorage.setItem("visited_books", "true");
            localStorage.setItem("visited_hankschannel", "true");
            localStorage.setItem("visited_vlogbrothers", "true");
            localStorage.setItem("visited_videofinder", "true");
            localStorage.setItem("visited_videos", "true");
            localStorage.setItem("visited_contact", "true");
            localStorage.setItem("visited_guestbook", "true");
            localStorage.setItem("visited_countdowns", "true");
            localStorage.setItem("visited_index", "true");
            localStorage.setItem("visited_pages", "true");
            localStorage.setItem("visited_projects", "true");
            localStorage.setItem("visited_404", "true");
            localStorage.setItem("visited_guide", "true");
            localStorage.setItem("count01", "true");
            localStorage.setItem("count02", "true");
            localStorage.setItem("count03", "true");
            localStorage.setItem("count04", "true");
            localStorage.setItem("count05", "true");
            localStorage.setItem("count06", "true");
            localStorage.setItem("count07", "true");
            localStorage.setItem("count08", "true");
            localStorage.setItem("count09", "true");
            localStorage.setItem("link1", "true");
            localStorage.setItem("link2", "true");
            localStorage.setItem("link3", "true");
            localStorage.setItem("link4", "true");
            localStorage.setItem("link5", "true");
            localStorage.setItem("link6", "true");
            localStorage.setItem("link7", "true");
            localStorage.setItem("link8", "true");
            localStorage.setItem("link9", "true");
            localStorage.setItem("link10", "true");
            localStorage.setItem("link11", "true");
            localStorage.setItem("link12", "true");
            localStorage.setItem("link13", "true");
            
            location.reload();

            cheatPosition = 0;
        }
    } else {
        cheatPosition = 0;
      }
 });