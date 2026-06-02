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
                    location.reload();
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
                    location.reload();
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