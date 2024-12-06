const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let isGameOver = false;
function jump() {
  mario.classList.add('pulo');

  setTimeout (() =>{
    mario.classList.remove('pulo');

  },500);
};



const loop = setInterval(()=>{
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
  console.log(marioPosition);


   if (pipePosition <= 100  && pipePosition > 5 && marioPosition < 90 ){
     pipe.style.border = 'none'
     pipe.style.animation = 'none';
     pipe.style.left = `${pipePosition}px`;

     mario.style.animation = 'none';
     mario.style.bottom = `${marioPosition}px`;

     mario.style.width = '160px'
     mario.style.marginLeft = '0px'
     isGameOver = true
     

     if (isGameOver = true){
      window.location.href = "GameOver/GameOver.html"
     }
     clearInterval(loop);
    
   }



   
},10);

document.addEventListener("keydown", (e) => {
	if((e.code === "ArrowUp")    |  (e.code === "KeyW") ){
		jump();
	}
	
});