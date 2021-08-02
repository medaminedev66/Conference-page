document.querySelector(".fa-bars").addEventListener("click", openNav);

function openNav() {
  console.log("clicked");
  document.querySelector("header").classList.add("visible");
}
