const memberContainer = Array.from(document.querySelectorAll(".member"));

console.log(memberContainer);

function onMouseOver(item) {
  const memberHover = item.getAttribute("id");
  let statsList;
  function showAtt(event) {
    switch (memberHover) {
      case "tank":
        statsList = document.querySelector("#healer");
        statsList.classList.toggle("active");
        console.log("Sou Tank");
        break;
      case "healer":
        console.log("Sou Healer");
        break;
      case "dps-1":
        console.log("Sou Walock");
        break;
      case "dps-2":
        console.log("Sou Rogue");
        break;
      case "dps-3":
        console.log("Sou Mage");
        break;
    }
  }

  item.addEventListener("mouseover", showAtt);
  item.addEventListener("mouseout", showAtt);
}

memberContainer.forEach(onMouseOver);
