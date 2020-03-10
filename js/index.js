document.querySelector("h1").addEventListener("mouseover", function(event) {
  event.target.style.color = "orange";
});

document.querySelector("h1").addEventListener("mouseout", function(event) {
  event.target.style.color = "black";
});

function mouseOverImage() {
  document.getElementById("poop").src =
    "https://i.pinimg.com/originals/67/48/d4/6748d4c66ef54f1a4b36c1eff32f2a13.jpg";
}

function mouseOutImage() {
  document.getElementById("poop").src = "img/fun-bus.jpg";
}

// document.body.addEventListener("keydown", () => {
//   alert("Welcome to the secret Stool Bus!");
// });

document.querySelector(".intro").addEventListener("wheel", () => {
  alert("YOU SHALL NOT PASS!!!");
});

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");

  const draggableElement = document.getElementById(id);
  const dropzone = event.target;

  dropzone.appendChild(draggableElement);
}

// window.addEventListener("load", event => {
//   alert("Page locked and loaded! Let the fun begin!");
// });

document.getElementById("bgcolor").addEventListener("focus", function(event) {
  event.target.style.background = "orange";
});

window.addEventListener("resize", myFunction);

var x = 0;
function myFunction() {
  var txt = (x += 1);
  document.getElementById("demo").innerHTML = txt;
  document.getElementById("demo").style.color = "purple";
}

document.getElementById("homeLink").addEventListener("click", (event) {
  event.preventDefault();
});

