function makeBackgroundSalmon() {
  document.body.style.backgroundColor = "salmon";
}
const blueButton = document.getElementById("make-blue-button");
blueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
//anonymous function
const greenButton = document.getElementById("make-green-button");
greenButton.onclick = function () {
  document.body.style.backgroundColor = "green";
};
//handle by using add event listener
const goldenButton = document.getElementById("make-goldenrod");
goldenButton.addEventListener("click", makeGoldenRod);
function makeGoldenRod() {
  document.body.style.backgroundColor = "goldenrod";
}
//addEventListener
const hotPinkButton = document.getElementById("make-hotpink");
hotPinkButton.addEventListener("click", function () {
  document.body.style.backgroundColor = "hotpink";
});

//direct shortcut
document
  .getElementById("make-lightblue")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
  });
