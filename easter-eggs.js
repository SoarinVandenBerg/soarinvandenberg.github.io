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

          location.reload();
        })
      

