      let totalEggs = 10;
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
          localStorage.removeItem("visits_index");
          localStorage.removeItem("visited_about");
          localStorage.removeItem("visited_ai");
          localStorage.removeItem("visited_notes");
          localStorage.removeItem("visited_books");
          localStorage.removeItem("visited_contact");
          localStorage.removeItem("visited_countdowns");
          localStorage.removeItem("visited_index");
          localStorage.removeItem("visited_pages");
          localStorage.removeItem("visited_projects");
          localStorage.removeItem("visited_404");
          localStorage.removeItem("count1");
          localStorage.removeItem("count2");
          localStorage.removeItem("count3");
          localStorage.removeItem("count4");
          localStorage.removeItem("count5");
          localStorage.removeItem("count6");

          location.reload();
          }
        
          
          noBtn.onclick = () => {
            overlay.style.display = "none";
          }
        });