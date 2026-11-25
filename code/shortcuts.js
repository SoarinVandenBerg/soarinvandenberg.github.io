// Rogue mode toggle

const themeToggle = document.getElementById("themeToggle");

const normalGlobe = "/clutter/globe.gif";
const redGlobe = "/clutter/red-images/redglobe.gif";
const normalHuman = "/clutter/human-made.png";
const redHuman = "/clutter/red-images/redhuman-made.png";
const normalIcon = "/clutter/website_icon.png";
const redIcon = "/clutter/red-images/redwebsite-icon.png";
const normalFlowchart = "/clutter/Flowchart.png";
const redFlowchart = "/clutter/red-images/redFlowchart.png";
const normalBattery = "/clutter/battery.png";
const redBattery = "/clutter/red-images/redbattery.png";

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

 // Visible Links

if (localStorage.getItem("visibleLinkToggle") === "enabled") {
    document.body.classList.add("visible-links");
}

document.addEventListener("keydown", (e) => {

    if (e.shiftKey && e.key.toLowerCase() === "l") {
    document.body.classList.toggle("visible-links");
      if (document.body.classList.contains("visible-links")) {
        localStorage.setItem("visibleLinkToggle", "enabled");
      } else {
      localStorage.removeItem("visibleLinkToggle");
    }
  }
 });


 //Keyboard shortcuts

 document.addEventListener("keydown", (e) => {

  //Previous page

  if (e.shiftKey && e.code === "Digit0") {
    if (window.prev) {
      window.location.href = window.prev;
    }
  }


  //Page 1

  if (e.shiftKey && e.code  === "Digit1") {
    if (window.key1) {
      window.location.href = window.key1;
    }
  }


  //Page 2

  if (e.shiftKey && e.code === "Digit2") {
    if (window.key2) {
      window.location.href = window.key2;
    }
  }


  //Page 3

  if (e.shiftKey && e.code === "Digit3") {
    if (window.key3) {
      window.location.href = window.key3;
    }
  }



  //Page 4

  if (e.shiftKey && e.code === "Digit4") {
    if (window.key4) {
      window.location.href = window.key4;
    }
  }



  //Page 5

  if (e.shiftKey && e.code === "Digit5") {
    if (window.key5) {
      window.location.href = window.key5;
    }
  }



  //Page 6

  if (e.shiftKey && e.code === "Digit6") {
    if (window.key6) {
      window.location.href = window.key6;
    }
  }



  //Page 7

  if (e.shiftKey && e.code === "Digit7") {
    if (window.key7) {
      window.location.href = window.key7;
    }
  }



  //Page 8

  if (e.shiftKey && e.code === "Digit8") {
    if (window.key8) {
      window.location.href = window.key8;
    }
  }



  //Page 9
  
  if (e.shiftKey && e.code === "Digit9") {
    if (window.key9) {
      window.location.href = window.key9;
    }
  }
});

