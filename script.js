var person = prompt("Please enter your name");

if (person != null) {
  document.getElementById("name").innerHTML = person;
}
var about = prompt("About Yourself");

if (about != null) {
  document.getElementById("about").innerHTML = about;
}
let interests = [];
var interestList = document.querySelector("#interests > ul");
for (var i = 0; i < 3; i++) {
  var interst = prompt("Please enter your" + 1 + " Interest");
  let li = document.createElement("li");
  li.innerText = interst;
  interestList.append(li);
}
console.log("im here");
