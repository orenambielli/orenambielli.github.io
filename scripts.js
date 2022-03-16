function toggleDiscord(){
  document.getElementById("discord-bot").classList.toggle('hide');
}
  
function toggleBlack(){
  document.getElementById("black-container").classList.toggle('fade-to-black');
}

function thatHurt(){
  document.getElementById("hurt-container").classList.toggle('hide');
}
  
function toggleRain(){
  var e = document.getElementById("rain-container");
    if ( document.getElementById("rain-container").classList.contains('hide') ) {
      e.classList.toggle('hide')
      e.classList.toggle('rain-start');
    }
    else {
      e.classList.toggle('rain-end');
    }
}

function toggleColetonInspiration() { document.getElementById("coleton-fx").classList.toggle('fx-inspiration'); }
function toggleColetonGrapple() { document.getElementById("coleton-fx").classList.toggle('fx-grapple'); }
function toggleColetonProne() { document.getElementById("coleton").classList.toggle('coleton-prone'); }

function toggleJoelInspiration() { document.getElementById("joel-fx").classList.toggle('fx-inspiration'); }
function toggleJoelGrapple() { document.getElementById("joel-fx").classList.toggle('fx-grapple'); }
function toggleJoelProne() { document.getElementById("joel").classList.toggle('joel-prone'); }

function toggleMikeInspiration() { document.getElementById("mike-fx").classList.toggle('fx-inspiration'); }
function toggleMikeGrapple() { document.getElementById("mike-fx").classList.toggle('fx-grapple'); }
function toggleMikeFire() { document.getElementById("mike-fx").classList.toggle('fx-fire'); }
function toggleMikeProne() { document.getElementById("mike").classList.toggle('mike-prone'); }

function toggleBattleFog(){
  document.getElementById("fog-container").classList.toggle('hide');
}

function toggleIdle() {
  document.getElementById("mike").classList.toggle('mike-idle');
  document.getElementById("joel").classList.toggle('joel-idle');
  document.getElementById("coleton").classList.toggle('coleton-idle');
}

function idleEverything() {
  toggleIdle();
  var movingObjects = document.querySelectorAll("#background, #ground, #foreground")
  var move_array = [...movingObjects];
  for (const element of move_array) {
    element.classList.toggle("no-scroll");
  }
}

function clearLandscape() {
  document.getElementById("background").classList.toggle('hide');
  document.getElementById("ground").classList.toggle('hide');
  document.getElementById("foreground").classList.toggle('hide');
}

function setHouse() {
  idleEverything();
  document.getElementById("ground").classList.toggle('ground-grass'); 
  document.getElementById("foreground").classList.toggle('fg-forest');
  document.getElementById("cart").classList.toggle('hide');
  document.getElementById("house").classList.toggle('hide');
}

function sceneToCaveEntrance() {
  idleEverything();
  clearLandscape();
  document.getElementById("cart").classList.toggle('hide');
  document.getElementById("map-cave-entrance").classList.toggle('hide');
}

function battleCave() {
  idleEverything();
  clearLandscape();
  document.getElementById("mist-container").classList.toggle('hide');
  document.getElementById("cart").classList.toggle('hide');
  document.getElementById("map-cave").classList.toggle('hide');
  document.getElementById("giant-spider").classList.toggle('hide');
  document.getElementById("tiny-spider").classList.toggle('hide');
}

function battleWerewolf() {
  idleEverything();
  toggleBattleFog();
  clearLandscape();
  document.getElementById("cart").classList.toggle('hide');
  document.getElementById("map-forest").classList.toggle('hide');
  document.getElementById("werewolf").classList.toggle('hide');
  document.getElementById("avi").classList.toggle('hide');
  document.getElementById("sky").classList.toggle('sky-night');
}

function sceneToCampfire() {
  clearLandscape();
  document.getElementById("coleton").classList.toggle('hide');
  document.getElementById("joel").classList.toggle('hide');
  document.getElementById("mike").classList.toggle('hide');
  document.getElementById("cart").classList.toggle('hide');
  document.getElementById("dark-container").classList.toggle('hide');
  document.getElementById("map-camp").classList.toggle('hide');
  document.getElementById("campfire").classList.toggle('hide');
}

function battleCultist() {
  idleEverything();
  clearLandscape();
  document.getElementById("warp-container").classList.toggle('hide');
  document.getElementById("cart").classList.toggle('hide');
  document.getElementById("map-meadow").classList.toggle('hide');
  document.getElementById("bbeg").classList.toggle('hide');
  document.getElementById("sky").classList.toggle('sky-dusk');
}

function killNPCS() {
  document.getElementById("npc-col").classList.toggle('kill-enemy');
}

function emptySky() {
  document.getElementById("sky").removeAttribute('class');
}

function timeDawn() {
  emptySky();
  document.getElementById("sky").classList.add('sky-dawn');
}

function timeDay() {
  emptySky();
  document.getElementById("sky").classList.toggle('sky-blue');
}

function timeDusk() {
  emptySky();
  document.getElementById("sky").classList.toggle('sky-dusk');
}

function timeNight() {
  emptySky();
  document.getElementById("sky").classList.toggle('sky-night');
}
