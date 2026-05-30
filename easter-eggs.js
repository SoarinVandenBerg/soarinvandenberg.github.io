      let totalEggs = 7;
      let foundEggs = 0;
      
      if (localStorage.getItem("egg1_found")) foundEggs++;
      if (localStorage.getItem("egg2_found")) foundEggs++;
      if (localStorage.getItem("egg3_found")) foundEggs++;
      if (localStorage.getItem("egg4_found")) foundEggs++;
      if (localStorage.getItem("egg5_found")) foundEggs++;
      if (localStorage.getItem("egg6_found")) foundEggs++;
      if (localStorage.getItem("egg7_found")) foundEggs++;
      
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
        { key: "egg5_found", text: "-Beat the egg game!" },
        { key: "egg6_found", text: "-Visit the 404 page!" },
        { key: "egg7_found", text: "-Easter egg for getting them all!" },
      ]

      listEggs.forEach(egg => {
        if (localStorage.getItem(egg.key)) {
          let item = document.createElement("li");
          item.innerText = egg.text;
          list.appendChild(item);
        }
      });

        document.getElementById("resetEggs").addEventListener("click",() => {
          if (!confirm("ARE YOU SURE??? :)")) return;
          
          localStorage.removeItem("egg1_found");
          localStorage.removeItem("egg2_found");
          localStorage.removeItem("egg3_found");
          localStorage.removeItem("egg4_found");
          localStorage.removeItem("egg5_found");
          localStorage.removeItem("egg6_found");
          localStorage.removeItem("egg7_found");
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

        const allEggs = [
          "egg1_found",
          "egg2_found",
          "egg3_found",
          "egg4_found",
          "egg5_found",
          "egg6_found",
        ]

        let allCountVisited = countdownPages.every(key => localStorage.getItem(key));
        if (allCountVisited && !localStorage.getItem("egg3_found")) {
          localStorage.setItem("egg3_found", "true");

          location.reload();
        }

        const brokenPage = ["visited_404"];

        let brokenVisited = brokenPage.every(key => localStorage.getItem(key));
        if (brokenVisited && !localStorage.getItem("egg6_found")) {
          localStorage.setItem("egg6_found", "true");

          location.reload();
        }
      
        let allEggs1 = allEggs.every(key => localStorage.getItem(key));
        if (allEggs1 && !localStorage.getItem("egg7_found")) {
          localStorage.setItem("egg7_found", "true");

          location.reload();
        }
      

