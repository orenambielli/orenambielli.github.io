function toggleDiscord(){
var element = document.getElementById("discord-bot");
  element.classList.toggle("discord-bot");
}

function toggleRain(){
var element = document.getElementById("rain-container");
  element.classList.toggle("rain-container");
}

function toggleFX() {
  var element = document.getElementById("effect");
  element.classList.toggle("effect");
}

function charactersIdle() {
  var element = document.getElementById("sprite");
  element.classList.toggle("effect");
}

function toggleColetonInspiration() {
  var element = document.getElementById("effect");
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
