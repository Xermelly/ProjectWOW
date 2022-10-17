// Show member stats on hover //
const memberContainer = Array.from(document.querySelectorAll(".member"));

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

//Dungeon img change on click
const dungeonList = document.querySelectorAll(".dg-img-list li");
const dgImgIntro = document.querySelector(".dg-img img");

function dgImgAnimate() {
  return dgImgIntro.animate(
    [{ transform: "translateX(-50px)" }, { transform: "translateX(0px)" }],
    1000
  );
}

function onDgHover(item) {
  const dgID = item.getAttribute("id");

  function dgChange(event) {
    switch (dgID) {
      case "dg-1":
        item.classList.toggle("dgChecked");
        if (event.type === "mouseover") {
          dgImgIntro.src = "./img/fullimg/upper.png";
          dgImgAnimate();
        }
        if (event.type === "mouseout") {
          dgImgIntro.src = "./img/fullimg/img-dg.jpg";
          dgImgAnimate();
        }
        break;
      case "dg-2":
        item.classList.toggle("dgChecked");
        if (event.type === "mouseover") {
          dgImgIntro.src = "./img/fullimg/lower.jpg";
          dgImgAnimate();
        }
        if (event.type === "mouseout") {
          dgImgIntro.src = "./img/fullimg/img-dg.jpg";
          dgImgAnimate();
        }
        break;
      case "dg-3":
        item.classList.toggle("dgChecked");
        if (event.type === "mouseover") {
          dgImgIntro.src = "./img/fullimg/grimraildepot2.jpg";
          dgImgAnimate();
        }
        if (event.type === "mouseout") {
          dgImgIntro.src = "./img/fullimg/img-dg.jpg";
          dgImgAnimate();
        }
        break;
      case "dg-4":
        item.classList.toggle("dgChecked");
        if (event.type === "mouseover") {
          dgImgIntro.src = "./img/fullimg/irondocks.jpeg";
          dgImgAnimate();
        }
        if (event.type === "mouseout") {
          dgImgIntro.src = "./img/fullimg/img-dg.jpg";
          dgImgAnimate();
        }
        break;
      case "dg-5":
        item.classList.toggle("dgChecked");
        if (event.type === "mouseover") {
          dgImgIntro.src = "./img/fullimg/mechagonjunkyard.jpg";
          dgImgAnimate();
        }
        if (event.type === "mouseout") {
          dgImgIntro.src = "./img/fullimg/img-dg.jpg";
          dgImgAnimate();
        }
        break;
      case "dg-6":
        item.classList.toggle("dgChecked");
        if (event.type === "mouseover") {
          dgImgIntro.src = "./img/fullimg/mechagonworkshop.jpg";
          dgImgAnimate();
        }
        if (event.type === "mouseout") {
          dgImgIntro.src = "./img/fullimg/img-dg.jpg";
          dgImgAnimate();
        }
        break;
      case "dg-7":
        item.classList.toggle("dgChecked");
        if (event.type === "mouseover") {
          dgImgIntro.src = "./img/fullimg/tazaveshgambit.jpg";
          dgImgAnimate();
        }
        if (event.type === "mouseout") {
          dgImgIntro.src = "./img/fullimg/img-dg.jpg";
          dgImgAnimate();
        }
        break;
      case "dg-8":
        item.classList.toggle("dgChecked");
        if (event.type === "mouseover") {
          dgImgIntro.src = "./img/fullimg/tazavesh-the-veiled-market.jpg";
          dgImgAnimate();
        }
        if (event.type === "mouseout") {
          dgImgIntro.src = "./img/fullimg/img-dg.jpg";
          dgImgAnimate();
        }
        break;
    }
  }

  item.addEventListener("mouseout", dgChange);
  item.addEventListener("mouseover", dgChange);
}

dungeonList.forEach(onDgHover);

//Menu selected
const links = document.querySelectorAll(".menu a");
console.log(location.href);

function activeLink(item) {
  if (location.href.includes(item.href)) {
    item.classList.add("test");
  }
}

links.forEach(activeLink);
