// Your code goes here
document.querySelector("h1").addEventListener("mouseover", function (event) {
  event.target.style.color = "red";
});

document.querySelector("h1").addEventListener("mouseout", function (event) {
  event.target.style.color = "black";
});

document.querySelectorAll("a").addEventListener("click", function (event) {
  event.preventDefault();
});

document.getElementById("bus").addEventListener("mouseover", function (event) {
  event.target.src =
    "https://i.pinimg.com/originals/67/48/d4/6748d4c66ef54f1a4b36c1eff32f2a13.jpg";
});

window.addEventListener("resize", myFunction);

var x = 0;
function myFunction() {
  var txt = (x += 1);
  document.getElementById("demo").innerHTML = txt;
  document.getElementById("demo").style.color = "purple";
}
