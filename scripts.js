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

  function toggleBattleFog(){
    var element = document.getElementById("fog-container");
      element.classList.toggle("fog-container");
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
        document.getElementById("mike").classList.toggle('mike-idle');
        document.getElementById("joel").classList.contains('joel-walk')
        document.getElementById("joel").classList.toggle('joel-idle');
        document.getElementById("coleton").classList.contains('coleton-walk')
        document.getElementById("coleton").classList.toggle('coleton-idle');
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

  function clearLandscape() {
    var bgClear = document.getElementById("background");
    var gClear = document.getElementById("ground");
    var fgClear = document.getElementById("foreground");
    bgClear.removeAttribute('class');
    gClear.removeAttribute('class');
    fgClear.removeAttribute('class');
  }
  
  function sceneToHouse() {
    idleEverything();
    if ( document.getElementById("background").classList.contains('bg-woods') )
  document.getElementById("ground").classList.toggle('ground-grass'); 
  document.getElementById("foreground").classList.toggle('fg-forest');
  document.getElementById("cart").classList.toggle('no-cart');
  document.getElementById("house").classList.toggle('no-house');
  document.getElementById("avi").classList.toggle('no-avi');
  }
  
  function battleWerewolf() {
    idleEverything();
    clearLandscape();
    toggleBattleFog();
    document.getElementById("cart").classList.toggle('hide-this');
    document.getElementById("map-forest").classList.toggle('hide-this');
    document.getElementById("werewolf").classList.toggle('hide-this');
    document.getElementById("avi").classList.toggle('no-avi');
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
  
