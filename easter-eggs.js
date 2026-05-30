      let totalEggs = 4;
      let foundEggs = 0;

      if (foundEggs === 0) {
        document.getElementById("eggListHead").style.display = "none";
      }
      if (localStorage.getItem("egg1_found")) {
        foundEggs++;
        document.getElementById("eggListHead").style.display = "";
      }
      if (localStorage.getItem("egg2_found")) {
        foundEggs++;
        document.getElementById("eggListHead").style.display = "";
      }
      if (localStorage.getItem("egg3_found")) {
        foundEggs++;
        document.getElementById("eggListHead").style.display = "";
      }
      if (localStorage.getItem("egg4_found")) {
        foundEggs++;
        document.getElementById("eggListHead").style.display = "";
      }

      document.getElementById("eggCount").innerText =
      `${foundEggs}/${totalEggs} Easter Eggs Found!`;

      let list = document.getElementById("eggList");

        if (localStorage.getItem("egg1_found")) {
          let item = document.createElement("li");
          item.innerText = "-The bottom-right button"
          list.appendChild(item);
        }
        
        if (localStorage.getItem("egg2_found")) {
          let item = document.createElement("li");
          item.innerText = "-Visit every page in the site!"
          list.appendChild(item);
        }

        if (localStorage.getItem("egg3_found")) {
          let item = document.createElement("li");
          item.innerText = "-Go to every seperate countdown!"
          list.appendChild(item);
        }

        if (localStorage.getItem("egg4_found")) {
          let item = document.createElement("li");
          item.innerText = "Find the typo in the book reviews!"
          list.appendChild(item);
        }

        document.getElementById("resetEggs").addEventListener("click",() => {
          if (!confirm("ARE YOU SURE??? :)")) return;
          
          localStorage.removeItem("egg1_found");
          localStorage.removeItem("egg2_found");
          localStorage.removeItem("egg3_found");
          localStorage.removeItem("egg4_found");
          localStorage.removeItem("visited_about");
          localStorage.removeItem("visited_ai");
          localStorage.removeItem("visited_notes");
          localStorage.removeItem("visited_books");
          localStorage.removeItem("visited_contact");
          localStorage.removeItem("visited_countdowns");
          localStorage.removeItem("visited_index");
          localStorage.removeItem("visited_pages");
          localStorage.removeItem("visited_projects");
          localStorage.removeItem("count1");
          localStorage.removeItem("count2");
          localStorage.removeItem("count3");
          localStorage.removeItem("count4");
          localStorage.removeItem("count5");
          localStorage.removeItem("count6");

          location.reload();
        })

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
        ];

        let allSiteVisited = sitePages.every(key => localStorage.getItem(key));
        if (allSiteVisited && !localStorage.getItem("egg2_found")) {
          localStorage.setItem("egg2_found", "true");

          location.reload();
        }

        const countdownPages = [
          "count1",
          "count2",
          "count3",
          "count4",
          "count5",
          "count6",
        ];

        let allCountVisited = countdownPages.every(key => localStorage.getItem(key));
        if (allCountVisited && !localStorage.getItem("egg3_found")) {
          localStorage.setItem("egg3_found", "true");

          location.reload();
        }
      

