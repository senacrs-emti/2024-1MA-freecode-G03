function jumpi() {
  isJumping = true;
  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= 10;
          block.style.bottom = position + 'px';
        }
      }, 20);
    } else {
      position += 10;
      block.style.bottom = position + 'px';
    }
  }, 20);
}
function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jumpi();
    }
  }
}
var character = document.getElementById("character")
var block = document.getElementById ("block")
function jump() {

    if(character.classList !="animate"){
      character.classList.add("animate")
    };
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

var checkDead = setInterval(function(){
  var characterTop = 
      parseInt(window.getComputedStyle(character).getPropertyValue("top"));
  var blockleft = 
      parseInt(window.getComputedStyle(block).getPropertyValue("left"));
      if(blockleft<20 && blockleft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("u lose.");
      }
},10); 

let randomTime = Math.random() * 6000;