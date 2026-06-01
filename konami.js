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