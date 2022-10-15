const memberContainer = Array.from(document.querySelectorAll(".member"));

console.log(memberContainer);

function onMouseOver(item) {
  const memberHover = item.getAttribute("id");

  function showAtt(event) {
    switch (memberHover) {
      case "tank":
        statsList = document.querySelector("#healer");
        statsList.classList.toggle("active");
        if (event.type === "mouseover") {
          statsList.style.backgroundImage = "url(../../img/fullimg/monk2.png)";
        }
        if (event.type === "mouseout") {
          statsList.style.backgroundImage = "";
        }
        break;
      case "healer":
        statsList = document.querySelector("#dps-1");
        statsList.classList.toggle("active");
        if (event.type === "mouseover") {
          statsList.style.backgroundImage =
            "url(../../img/fullimg/healer2.jpg)";
        }
        if (event.type === "mouseout") {
          statsList.style.backgroundImage = "";
        }
        break;
      case "dps-1":
        statsList = document.querySelector("#dps-2");
        statsList.classList.toggle("active");
        if (event.type === "mouseover") {
          statsList.style.backgroundImage =
            "url(../../img/fullimg/warlock2.png)";
        }
        if (event.type === "mouseout") {
          statsList.style.backgroundImage = "";
        }
        break;
      case "dps-2":
        statsList = document.querySelector("#dps-3");
        statsList.classList.toggle("active");
        if (event.type === "mouseover") {
          statsList.style.backgroundImage = "url(../../img/fullimg/rogue2.png)";
        }
        if (event.type === "mouseout") {
          statsList.style.backgroundImage = "";
        }
        break;
      case "dps-3":
        statsList = document.querySelector("#dps-2");
        statsList.classList.toggle("active");
        if (event.type === "mouseover") {
          statsList.style.backgroundImage = "url(../../img/fullimg/mage2.png)";
        }
        if (event.type === "mouseout") {
          statsList.style.backgroundImage = "";
        }
        break;
    }
  }

  item.addEventListener("mouseover", showAtt);
  item.addEventListener("mouseout", showAtt);
}

memberContainer.forEach(onMouseOver);
