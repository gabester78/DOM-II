// Your code goes here
document.querySelector("h1").addEventListener("mouseover", function (event) {
  event.target.style.color = "red";
});

document.querySelector("h1").addEventListener("mouseout", function (event) {
  event.target.style.color = "black";
});

document.querySelector("#nav-link").addEventListener("click", function (event) {
  event.preventDefault();
});

document
  .querySelector("#nav-link2")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

document
  .querySelector("#nav-link3")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

document
  .querySelector("#nav-link4")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

window.addEventListener("resize", myFunction);

var x = 0;
function myFunction() {
  var txt = (x += 1);
  document.getElementById("demo").innerHTML = txt;
  document.getElementById("demo").style.color = "red";
}

document.body.addEventListener("keydown", (event) => {
  event.target.style.color = "white";
});

document.body.addEventListener("keyup", (event) => {
  event.target.style.color = "black";
});

document.querySelector(".content-pick").addEventListener("wheel", () => {
  event.target.style.background = "grey";
  event.target.style.color = "white";
});

document.querySelector("#form").addEventListener(
  "blur",
  (event) => {
    event.target.style.background = "red";
  },
  true
);

document.querySelector("#form").addEventListener(
  "focus",
  (event) => {
    event.target.style.background = "black";
  },
  true
);

window.addEventListener("load", () => {
  alert("Welcome to user experience hell hahahaha!");
});
