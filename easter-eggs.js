      let totalEggs = 15;
      let foundEggs = 0;
      
      if (localStorage.getItem("egg1_found")) foundEggs++;
      if (localStorage.getItem("egg2_found")) foundEggs++;
      if (localStorage.getItem("egg3_found")) foundEggs++;
      if (localStorage.getItem("egg4_found")) foundEggs++;
      if (localStorage.getItem("egg5_found")) foundEggs++;
      if (localStorage.getItem("egg6_found")) foundEggs++;
      if (localStorage.getItem("egg7_found")) foundEggs++;
      if (localStorage.getItem("egg8_found")) foundEggs++;
      if (localStorage.getItem("egg9_found")) foundEggs++;
      if (localStorage.getItem("egg10_found")) foundEggs++;
      if (localStorage.getItem("egg11_found")) foundEggs++;
      if (localStorage.getItem("egg12_found")) foundEggs++;
      if (localStorage.getItem("egg13_found")) foundEggs++;
      if (localStorage.getItem("egg14_found")) foundEggs++;
      if (localStorage.getItem("egg15_found")) foundEggs++;
      
      if (foundEggs === 0) {
        document.getElementById("eggListHead").style.display = "none";
      }
      else {
        document.getElementById("eggListHead").style.display = "";
      }

      document.getElementById("eggCount").innerText =
      `${foundEggs}/${totalEggs} Easter Eggs Found!`;

let list = document.getElementById("eggList");

      const listEggs = [
        { key: "egg1_found", text: "-The bottom-right button" },
        { key: "egg2_found", text: "-Visit every page in the site!" },
        { key: "egg3_found", text: "-Go to every separate countdown!" },
        { key: "egg4_found", text: "-Find the typo in the book reviews" },
        { key: "egg5_found", text: "-Beat the easter egg game!" },
        { key: "egg6_found", text: "-Visit a page that doesnt exist" },
        { key: "egg7_found", text: "-Easter egg for getting them all!" },
        { key: "egg8_found", text: "-Type the Konami code to unlock" },
        { key: "egg9_found", text: "-Visit the site 25 times!" },
        { key: "egg10_found", text: "-Type 42, the answer to everything" },
        { key: "egg11_found", text: "-Find the egg in the notes page" },
        { key: "egg12_found", text: "-Click on every link in the links" },
        { key: "egg13_found", text: "-Visit every videos page on the site!" },
        { key: "egg14_found", text: "-Find the original link to this page" },
        { key: "egg15_found", text: "-Scroll to the end of the books" },
      ]

      listEggs.forEach(egg => {
        if (localStorage.getItem(egg.key)) {
          let item = document.createElement("li");
          item.innerText = egg.text;
          list.appendChild(item);
        }
      });

        document.getElementById("resetEggs").addEventListener("click",() => {
          const overlay = document.querySelector(".verify");
          const yesBtn = document.querySelector(".yes");
          const noBtn = document.querySelector(".no");

          overlay.style.display = "flex";

          yesBtn.onclick = () => {
            overlay.style.display = "none";

          localStorage.removeItem("egg1_found");
          localStorage.removeItem("egg2_found");
          localStorage.removeItem("egg3_found");
          localStorage.removeItem("egg4_found");
          localStorage.removeItem("egg5_found");
          localStorage.removeItem("egg6_found");
          localStorage.removeItem("egg7_found");
          localStorage.removeItem("egg8_found");
          localStorage.removeItem("egg9_found");
          localStorage.removeItem("egg10_found");
          localStorage.removeItem("egg11_found");
          localStorage.removeItem("egg12_found");
          localStorage.removeItem("egg13_found");
          localStorage.removeItem("egg14_found");
          localStorage.removeItem("egg15_found");
          localStorage.removeItem("visits_index");
          localStorage.removeItem("visited_about");
          localStorage.removeItem("visited_ai");
          localStorage.removeItem("visited_notes");
          localStorage.removeItem("visited_books");
          localStorage.removeItem("visited_contact");
          localStorage.removeItem("visited_guestbook");
          localStorage.removeItem("visited_countdowns");
          localStorage.removeItem("visited_index");
          localStorage.removeItem("visited_pages");
          localStorage.removeItem("visited_projects");
          localStorage.removeItem("visited_404");
          localStorage.removeItem("visited_hankschannel");
          localStorage.removeItem("visited_vlogbrothers");
          localStorage.removeItem("visited_videofinder");
          localStorage.removeItem("visited_videos");
          localStorage.removeItem("count1");
          localStorage.removeItem("count2");
          localStorage.removeItem("count3");
          localStorage.removeItem("count4");
          localStorage.removeItem("count5");
          localStorage.removeItem("count6");
          localStorage.removeItem("link1");
          localStorage.removeItem("link2");
          localStorage.removeItem("link3");
          localStorage.removeItem("link4");
          localStorage.removeItem("link5");
          localStorage.removeItem("link6");
          localStorage.removeItem("link7");
          localStorage.removeItem("link8");
          localStorage.removeItem("link9");
          localStorage.removeItem("link10");
          localStorage.removeItem("link11");
          localStorage.removeItem("link12");
          localStorage.removeItem("link13");

          location.reload();
          }
        
          
          noBtn.onclick = () => {
            overlay.style.display = "none";
          }
        });