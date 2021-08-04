function openNav() {
  console.log("clicked");
  document.querySelector("header").classList.add("visible");
  document.querySelector(".closeBtn").classList.toggle("visible");
}

const closeMenu = () => {
  document.querySelector("header").classList.remove("visible");
  document.querySelector(".closeBtn").classList.toggle("visible");
};

document.querySelector(".fa-bars").addEventListener("click", openNav);
document.querySelector(".closeBtn>i").addEventListener("click", closeMenu);
document.querySelector("li > a").addEventListener("click", closeMenu);

const generateSpeaker = (index) => {
  var container = document.createElement("div");
  var image = document.createElement("div");
  var chess = document.createElement("img");
  var photo = document.createElement("img");
  var fullname = document.createElement("h3");
  var proffession = document.createElement("h4");
  var description = document.createElement("p");
  var information = document.createElement("div");

  container.appendChild(image);
  container.appendChild(information);
  image.appendChild(chess);
  image.appendChild(photo);
  information.appendChild(fullname);
  information.appendChild(proffession);
  information.appendChild(description);

  container.className = "container";
  image.className = "big-image";
  chess.className = "chess-image";
  photo.className = "profile-image";
  fullname.className = "full-name";
  proffession.className = "profession";
  description.className = "description";
  information.className = "information";

  document.querySelector(".speakers").appendChild(container);
  fullname.innerText = speakers[index].name;
  chess.src = "./img/profiles/Chess_board.svg.png";
  photo.src = speakers[index].photo;
  photo.alt = speakers[index].alt;
  proffession.innerText = speakers[index].proffession;
  description.innerText = speakers[index].description;
};

if (window.innerWidth <= 700) {
  for (let i = 0; i < 2; i++) {
    generateSpeaker(i);
  }
} else {
  for (let i = 0; i < speakers.length; i++) {
    generateSpeaker(i);
  }
}

const openMore = () => {
  // document.querySelector(".more").classList.add("invisible");
  // var about = document.querySelector(".about");
  // document.querySelector(".moremore").appendChild(about);
  for (let i = 2; i < speakers.length; i++) {
    generateSpeaker(i);
  }
  document.querySelector(".more").removeEventListener("click", openMore);
  second = true;
};

var second = false;
var count = 0;
document.querySelector(".more").addEventListener("click", openMore);
document.querySelector(".more").addEventListener("click", () => {
  count++;
  if (count == 2) {
    window.location = "./pages/about.html";
  }
});
