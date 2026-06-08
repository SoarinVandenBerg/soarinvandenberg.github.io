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

document.addEventListener("DOMContentLoaded", () => {

if (localStorage.getItem("popupReload")) {
    const key = localStorage.getItem("popupReload");
    localStorage.removeItem("popupReload");
    openEggPopup(key);
}

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
];

let allLinkVisited = linkPages.every(key => localStorage.getItem(key));
if (allLinkVisited && !localStorage.getItem("egg12_found")) {
  localStorage.setItem("egg12_found", "true");
  localStorage.setItem("popupReload", "egg12_found");
  location.reload();
}

const sitePages = [
    "visited_about",
    "visited_ai",
    "visited_notes",
    "visited_books",
    "visited_contact",
    "visited_countdowns",
    "visited_index",
    "visited_pages",
    "visited_projects",
    "visited_guestbook",
];

let allSiteVisited = sitePages.every(key => localStorage.getItem(key));
if (allSiteVisited && !localStorage.getItem("egg2_found")) {
  localStorage.setItem("egg2_found", "true");
  openEggPopup("egg2_found");
}

const countdownPages = [
  "count1",
  "count2",
  "count3",
  "count4",
  "count5",
  "count6",
];

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
]

let allCountVisited = countdownPages.every(key => localStorage.getItem(key));
if (allCountVisited && !localStorage.getItem("egg3_found")) {
  localStorage.setItem("egg3_found", "true");
  localStorage.setItem("popupReload", "egg3_found");
  location.reload();
}

const brokenPage = ["visited_404"];

let brokenVisited = brokenPage.every(key => localStorage.getItem(key));
if (brokenVisited && !localStorage.getItem("egg6_found")) {
  localStorage.setItem("egg6_found", "true");
  localStorage.setItem("popupReload", "egg6_found");
  location.reload();
}
      
let allEggs1 = allEggs.every(key => localStorage.getItem(key));
if (allEggs1 && !localStorage.getItem("egg7_found")) {
  localStorage.setItem("egg7_found", "true");
  openEggPopup("egg7_found");
}

});

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
            localStorage.setItem("visits_index", "true");
            localStorage.setItem("visited_about", "true");
            localStorage.setItem("visited_ai", "true");
            localStorage.setItem("visited_notes", "true");
            localStorage.setItem("visited_books", "true");
            localStorage.setItem("visited_contact", "true");
            localStorage.setItem("visited_guestbook", "true");
            localStorage.setItem("visited_countdowns", "true");
            localStorage.setItem("visited_index", "true");
            localStorage.setItem("visited_pages", "true");
            localStorage.setItem("visited_projects", "true");
            localStorage.setItem("visited_404", "true");
            localStorage.setItem("count1", "true");
            localStorage.setItem("count2", "true");
            localStorage.setItem("count3", "true");
            localStorage.setItem("count4", "true");
            localStorage.setItem("count5", "true");
            localStorage.setItem("count6", "true");
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
            
            location.reload();

            cheatPosition = 0;
        }
    } else {
        cheatPosition = 0;
      }
 });