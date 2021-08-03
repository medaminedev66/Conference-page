document.querySelector(".fa-bars").addEventListener("click", openNav);

function openNav() {
  console.log("clicked");
  document.querySelector("header").classList.add("visible");
}

var speakers = [
  {
    name: "Yochai Benkler",
    proffession:
      "Berkman professor of Entreneurial Legal studies at harvard Law school",
    description:
      " bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school",
    photo: "/img/profiles/IMG.jpg",
  },
  {
    name: "Ali Abbani",
    proffession:
      "Berkman professor of Entreneurial Legal studies at harvard Law school",
    description:
      " bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school",
    photo: "/img/profiles/IMG.jpg",
  },
  {
    name: "Henry hi",
    proffession:
      "Berkman professor of Entreneurial Legal studies at harvard Law school",
    description:
      " bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school",
    photo: "/img/profiles/IMG.jpg",
  },
  {
    name: "Julina Hey",
    proffession:
      "Berkman professor of Entreneurial Legal studies at harvard Law school",
    description:
      " bekler studies commons-based Berkman professor of Entreneurial Legal studies at harvard Law school",
    photo: "/img/profiles/IMG.jpg",
  },
];

for (let i = 0; i < 2; i++) {
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
  fullname.innerText = speakers[i].name;
  chess.src = "./img/profiles/Chess_board.svg.png";
  photo.src = speakers[i].photo;
  // photo.alt = speakers[i].alt;
  proffession.innerText = speakers[i].proffession;
  description.innerText = speakers[i].description;
}

var second = false;
const openMore = () => {
  for (let i = 2; i < speakers.length; i++) {
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
    fullname.innerText = speakers[i].name;
    chess.src = "./img/profiles/Chess_board.svg.png";
    photo.src = speakers[i].photo;
    // photo.alt = speakers[i].alt;
    proffession.innerText = speakers[i].proffession;
    description.innerText = speakers[i].description;
  }
  // document.querySelector(".more").classList.add("invisible");
  // var about = document.querySelector(".about");
  // document.querySelector(".moremore").appendChild(about);
  document.querySelector(".more").removeEventListener("click", openMore);
  second = true;
};
var count = 0;
document.querySelector(".more").addEventListener("click", openMore);
document.querySelector(".more").addEventListener("click", () => {
  count++;
  if (count == 2) {
    window.location = "./pages/about.html";
  }
});
