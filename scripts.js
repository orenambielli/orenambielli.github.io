function toggleDiscord(){
  document.getElementById("discord-bot").classList.toggle('hide');
}
  
function toggleBlack() {
  document.getElementById("black-container").classList.toggle('fade-to-black');
}

function clearLandscape() {
  var landscapeObjects = document.querySelectorAll("#background, #ground, #foreground, #map-container, #overlay, #overlay-anim")
  var land_array = [...landscapeObjects];
  for (const element of land_array) {
    element.removeAttribute('class');
  }
}

function clearOverlay() {
  document.getElementById("overlay").removeAttribute('class');
}

function clearCharacters() {
  var characters = document.querySelectorAll("#coleton, #joel, #mike")
  var char_array = [...characters];
  for (const element of char_array) {
    element.removeAttribute('class');
  }
}

function clearObjects() {
  var objects = document.querySelectorAll("#cart, #wheel-lg, #wheel-sm")
  var obj = [...objects];
  for (const element of obj) {
    element.removeAttribute('class');
  }
}

function clearEnemies() {
  document.getElementById("md-enemy").removeAttribute('class');
}

function clearEverything() {
  clearOverlay();
  clearLandscape();
  clearObjects();
  clearEnemies();
}

function thatHurt(){
  document.getElementById("hurt-container").classList.toggle('hide');
}
  
function toggleRain(){
  const o = document.getElementById("overlay");
  const oa = document.getElementById("overlay-anim");
  oa.classList.add('rain-anim');
    if ( o.classList.contains('rain-start') ) {
      o.classList.toggle('rain-end');
    }
    else {
      o.classList.toggle('rain-start');
    }
}

function toggleBattleFog(){
  clearOverlay();
  document.getElementById("overlay").classList.add('fog-anim');
}

function charactersIdle() {
  clearCharacters();
  document.getElementById("mike").classList.add('mike-idle', 'large');
  document.getElementById("joel").classList.add('joel-idle', 'large');
  document.getElementById("coleton").classList.add('coleton-idle', 'large');
}

function charactersWalk() {
  clearCharacters();
  document.getElementById("mike").classList.add('mike-walk', 'large');
  document.getElementById("joel").classList.add('joel-walk', 'large');
  document.getElementById("coleton").classList.add('coleton-walk', 'large');
}

function toggleCharactersWalk() {
  const c = document.getElementById("coleton");
  if ( c.classList.contains('coleton-walk') ) {
    charactersIdle();
  }
  else if ( c.classList.contains('coleton-idle') ) {
    charactersWalk();
  }
}

function toggleIdleLandscape() {
  var movingObjects = document.querySelectorAll("#background, #ground, #foreground")
  var move_array = [...movingObjects];
  for (const element of move_array) {
    element.classList.toggle('no-scroll');
  }
}

function toggleIdleCart() {
  var cart = document.getElementById("cart");
  if ( cart.classList.contains('cart-anim') ) {
    cart.removeAttribute('class');
    cart.classList.add('cart-idle');
    document.getElementById("wheel-lg").removeAttribute('class');
    document.getElementById("wheel-sm").removeAttribute('class');
  }
  else {
    cart.classList.add('cart-anim');
    document.getElementById("wheel-lg").classList.add('spin-slow');
    document.getElementById("wheel-sm").classList.add('spin-slow');
  }
}

function clearCart() {
  document.getElementById("whole-cart").classList.add('d-none');
  document.getElementById("wheel-lg").classList.add('d-none');
  document.getElementById("wheel-sm").classList.add('d-none');
}

function idleEverything() {
  toggleIdleLandscape();
  toggleIdleCart();
  toggleCharactersWalk();
}

function toggleMainRoad() {
  clearEverything();
  document.getElementById("background").classList.add('bg-woods', 'scroll-bg');
  document.getElementById("ground").classList.add('ground-woods', 'scroll-ground');
  document.getElementById("foreground").classList.add('fg-woods', 'scroll-fg');
  document.getElementById("cart").classList.add('cart-anim');
}

function onTheRoadAgain() {
  clearEverything();
  charactersWalk();
  toggleMainRoad();
}

function setHouse() {
  charactersIdle();
  document.getElementById("ground").classList.toggle('ground-grass'); 
  document.getElementById("foreground").classList.toggle('fg-forest');
  document.getElementById("cart").classList.toggle('hide');
  document.getElementById("house").classList.toggle('hide');
}

function sceneToCaveEntrance() {
  clearEverything();
  charactersIdle();
  document.getElementById("map-container").classList.add('map-cave-entrance');
}

function battleCave() {
  clearEverything();
  charactersIdle();
  document.getElementById("map-container").classList.add('map-cave');
  document.getElementById("overlay").classList.add('mist-anim');
  document.getElementById("cart").classList.toggle('hide');
  document.getElementById("md-enemy").classList.add('giant-spider', 'medium');
  document.getElementById("tiny-spider").classList.toggle('hide');
}

function battleWerewolf() {
  clearEverything();
  charactersIdle();
  toggleBattleFog();
  document.getElementById("cart").classList.toggle('hide');
  document.getElementById("map-container").classList.toggle('map-forest');
  document.getElementById("md-enemy").classList.add('werewolf', 'large');
  document.getElementById("avi").classList.toggle('hide');
  document.getElementById("sky").classList.toggle('sky-night');
}

function sceneToCampfire() {
  clearEverything();
  clearCharacters();
  document.getElementById("cart").classList.toggle('hide');
  document.getElementById("dark-container").classList.toggle('hide');
  document.getElementById("map-container").classList.add('map-camp');
  document.getElementById("campfire").classList.toggle('hide');
}

function battleCultist() {
  clearEverything();
  charactersIdle();
  document.getElementById("overlay").classList.toggle('warp-anim');
  document.getElementById("cart").classList.toggle('hide');
  document.getElementById("map-container").classList.add('map-meadow');
  document.getElementById("md-enemy").classList.add('bbeg', 'large');
  document.getElementById("sky").classList.add('sky-dusk');
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
