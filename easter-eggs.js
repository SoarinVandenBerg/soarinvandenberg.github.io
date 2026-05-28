      let totalEggs = 2;
      let foundEggs = 0;

      if (localStorage.getItem("egg1_found")) {
        foundEggs++;
      }
      if (localStorage.getItem("egg2_found")) {
        foundEggs++
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

        document.getElementById("resetEggs").addEventListener("click",() => {
          if (!confirm("ARE YOU SURE??? :)")) return;
          
          localStorage.removeItem("egg1_found");
          localStorage.removeItem("egg2_found");
          localStorage.removeItem("visited_about");
          localStorage.removeItem("visited_ai");
          localStorage.removeItem("visited_notes");
          localStorage.removeItem("visited_books");
          localStorage.removeItem("visited_contact");
          localStorage.removeItem("visited_countdowns");
          localStorage.removeItem("visited_esp-32");
          localStorage.removeItem("visited_index");
          localStorage.removeItem("visited_pages");
          localStorage.removeItem("visited_projects");
          localStorage.removeItem("visited_eggs");

          location.reload();
        })

        const pages = [
          "visited_about",
          "visited_ai",
          "visited_notes",
          "visited_books",
          "visited_contact",
          "visited_countdowns",
          "visited_esp-32",
          "visited_index",
          "visited_pages",
          "visited_projects",
          "visited_eggs",
        ];

        let allVisited = pages.every(key => localStorage.getItem(key));
        if (allVisited && !localStorage.getItem("egg2_found")) {
          localStorage.setItem("egg2_found", "true");

          location.reload();
        }
      

