// Rogue mode toggle

const themeToggle = document.getElementById("themeToggle");

const normalGlobe = "/clutter/globe.gif";
const redGlobe = "/clutter/redglobe.gif";
const normalHuman = "/clutter/human-made.png";
const redHuman = "/clutter/redhuman-made.png";
const normalIcon = "/clutter/website_icon.png";
const redIcon = "/clutter/redwebsite-icon.png";
const normalFlowchart = "/clutter/Flowchart.png";
const redFlowchart = "/clutter/redFlowchart.png";
const normalBattery = "/clutter/battery.png";
const redBattery = "/clutter/redbattery.png";

const globeGif = document.querySelector("#globe");
const humanPNG = document.querySelector("#human-made");
const websiteIcon = document.querySelector("#favicon");
const flowchartPNG = document.querySelector("#flowchart");
const batteryPNG = document.querySelector("#battery");

if (localStorage.getItem("rogueModeToggle") === "enabled") {
    document.body.classList.add("rogue-theme");
    if (globeGif) globeGif.src = redGlobe;
    if (humanPNG) humanPNG.src = redHuman;
    if (websiteIcon) websiteIcon.href = redIcon;
    if (flowchartPNG) flowchartPNG.src = redFlowchart;
    if (batteryPNG) batteryPNG.src = redBattery;
}

const rogueMode = [
    "r", "o",
    "g", "u",
    "e"
];

let roguePosition = 0;

document.addEventListener("keydown", (e) => {
    if (e.key === rogueMode[roguePosition]) {
        roguePosition++;

        if (roguePosition === rogueMode.length) {
            

            document.body.classList.toggle("rogue-theme");

                if (document.body.classList.contains("rogue-theme")) {
                    localStorage.setItem("rogueModeToggle", "enabled");
                    if (globeGif) globeGif.src = redGlobe;
                    if (humanPNG) humanPNG.src = redHuman;
                    if (websiteIcon) websiteIcon.href = redIcon;
                    if (flowchartPNG) flowchartPNG.src = redFlowchart;
                    if (batteryPNG) batteryPNG.src = redBattery;
                } else {
                    localStorage.removeItem("rogueModeToggle");
                    if (globeGif) globeGif.src = normalGlobe;
                    if (humanPNG) humanPNG.src = normalHuman;
                    if (websiteIcon) websiteIcon.href = normalIcon;
                    if (flowchartPNG) flowchartPNG.src = normalFlowchart;
                    if (batteryPNG) batteryPNG.src = normalBattery;
                }

            window.location.reload();

            roguePosition = 0;
        }
    } else {
        roguePosition = 0;
      }
 });


 //Keyboard shortcuts

 document.addEventListener("keydown", (e) => {


    //Previous page
    if (e.key === "0") {

        const prev = document.body.dataset.next;

        if (prev) {
            window.location.href = key0
        }
    }



    //Page 1
    if (e.key === "1") {

        const key1 = document.body.dataset.next;

        if (key1) {
            window.location.href = key0
        }
    }



    //Page 2
    if (e.key === "2") {

        const key2 = document.body.dataset.next;

        if (key2) {
            window.location.href = key0
        }
    }



    //Page 3
    if (e.key === "3") {

        const key3 = document.body.dataset.next;

        if (key3) {
            window.location.href = key0
        }
    }



    //Page 4
    if (e.key === "4") {

        const key4 = document.body.dataset.next;

        if (key4) {
            window.location.href = key0
        }
    }



    //Page 5
    if (e.key === "5") {

        const key5 = document.body.dataset.next;

        if (key5) {
            window.location.href = key0
        }
    }



    //Page 6
    if (e.key === "6") {

        const key6 = document.body.dataset.next;

        if (key6) {
            window.location.href = key0
        }
    }



    //Page 7
    if (e.key === "7") {

        const key7 = document.body.dataset.next;

        if (key7) {
            window.location.href = key0
        }
    }



    //Page 8
    if (e.key === "8") {

        const key8 = document.body.dataset.next;

        if (key8) {
            window.location.href = key0
        }
    }



    //Page 9
    if (e.key === "9") {

        const key9 = document.body.dataset.next;

        if (key9) {
            window.location.href = key0
        }
    }
 });

 /* Site Template
 
<script src="code/shortcuts.js"></script>
<script>
 window.prev = "https://soarinvandenberg.ca/";

 window.key1 = "https://soarinvandenberg.ca/";
 window.key2 = "https://soarinvandenberg.ca/";
 window.key3 = "https://soarinvandenberg.ca/";
 window.key4 = "https://soarinvandenberg.ca/";
 window.key5 = "https://soarinvandenberg.ca/";
 window.key6 = "https://soarinvandenberg.ca/";
 window.key7 = "https://soarinvandenberg.ca/";
 window.key8 = "https://soarinvandenberg.ca/";
 window.key9 = "https://soarinvandenberg.ca/";
</script>

 */