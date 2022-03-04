function toggleDiscord(){
var element = document.getElementById("discord-bot");
  element.classList.toggle("discord-bot");
}

function toggleBlack(){
var element = document.getElementById("black-container");
  element.classList.toggle("fade-to-black");
}

function toggleRain(){
var element = document.getElementById("rain-container");
  element.classList.toggle("rain-container");
}

function toggleFX() {
  var element = document.getElementById("effect");
  element.classList.toggle("effect");
}

function idleEverything() {
  var movingObjects = document.querySelectorAll("#background, #ground, #foreground")
  var move_array = [...movingObjects];
  for (const element of move_array) {
    element.classList.toggle("no-scroll");
  }
  if ( document.getElementById("mike").classList.contains('mike-walk') )
document.getElementById("mike").classList.toggle('mike-prone');
  document.getElementById("joel").classList.contains('joel-walk')
document.getElementById("joel").classList.toggle('joel-prone'); document.getElementById("coleton").classList.contains('coleton-walk')
document.getElementById("coleton").classList.toggle('coleton-prone');
document.getElementById("cart").classList.contains('cart')
document.getElementById("cart").classList.toggle('no-cart');
}

function toggleColetonProne() {
  var element = document.getElementById("coleton");
  element.classList.toggle("coleton-prone");
}

function toggleColetonInspiration() {
  var element = document.getElementById("coleton");
  element.classList.toggle("effect");
}

function toggleJoelProne() {
  var element = document.getElementById("joel");
  element.classList.toggle("joel-prone");
}

function toggleJoelInspiration() {
  var element = document.getElementById("joel");
  element.classList.toggle("effect");
}

function toggleMikeProne() {
  var element = document.getElementById("mike");
  element.classList.toggle("mike-prone");
}

function toggleMikeInspiration() {
  var element = document.getElementById("mike");
  element.classList.toggle("effect");
}

function changeToDesert() {
  if ( document.getElementById("background").classList.contains('bg-woods') )
document.getElementById("background").classList.toggle('bg-desert');
document.getElementById("ground").classList.toggle('ground-desert'); 
document.getElementById("foreground").classList.toggle('fg-desert');
document.getElementById("cart").classList.toggle('no-cart');
}

function timeDawn() {
  var element = document.getElementById("sky");
  element.removeAttribute('class');
  element.classList.toggle("sky-dawn");
}

function timeDay() {
  var element = document.getElementById("sky");
  element.removeAttribute('class');
  element.classList.toggle("sky-blue");
}

function timeDusk() {
  var element = document.getElementById("sky");
  element.removeAttribute('class');
  element.classList.toggle("sky-dusk");
}

function timeNight() {
  var element = document.getElementById("sky");
  element.removeAttribute('class');
  element.classList.toggle("sky-night");
}
