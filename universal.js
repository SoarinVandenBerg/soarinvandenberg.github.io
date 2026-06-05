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
          "egg12_found",
        ]

        let allCountVisited = countdownPages.every(key => localStorage.getItem(key));
        if (allCountVisited && !localStorage.getItem("egg3_found")) {
          localStorage.setItem("egg3_found", "true");
          openEggPopup("egg3_found");
        }

        const brokenPage = ["visited_404"];

        let brokenVisited = brokenPage.every(key => localStorage.getItem(key));
        if (brokenVisited && !localStorage.getItem("egg6_found")) {
          localStorage.setItem("egg6_found", "true");
          openEggPopup("egg6_found");
        }
      
        let allEggs1 = allEggs.every(key => localStorage.getItem(key));
        if (allEggs1 && !localStorage.getItem("egg7_found")) {
          localStorage.setItem("egg7_found", "true");
          openEggPopup("egg7_found");
        }