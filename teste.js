const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const pergunta = document.querySelector('.question')

let isGameOver = false;
let position = 0;

document.addEventListener("keydown", (e) => {
	if((e.code === "ArrowUp")    |  (e.code === "KeyW") ){
		jump();
	}
	
});
function jump() {
	dino.classList.add("jump")
	setTimeout(function(){
		dino.classList.remove("jump")
	},800)
};
function createCactus() {
	const cactus = document.createElement('div');
	let cactusPosition = 1000;
	let randomTime = Math.floor((Math.random() * 3000) + 100);

	if (isGameOver) return;
  
	cactus.classList.add('cactus');
	background.appendChild(cactus);
	cactus.style.left = cactusPosition + 'px';
  
	let leftTimer = setInterval(() => {
	  if (cactusPosition < -60) {
		// Saiu da tela
		clearInterval(leftTimer);
		background.removeChild(cactus);
	  } else if (cactusPosition > 0 && cactusPosition < 70 && position < 60) {
		// Game over
		clearInterval(leftTimer);
		isJumping = false;
		isGameOver = true;
	  } else {
		cactusPosition -= 7;
		cactus.style.left = cactusPosition + 'px';
	  }
	}, 20);
  
	setTimeout(createCactus, randomTime);
  }
  
  createCactus();
  const mario = document.querySelector('.dino');
const pipe = document.querySelector('.pipe');

const pulo = () => {
  mario.classList.add('pulo');

  setTimeout (() =>{
    mario.classList.remove('pulo');

  },500);
}



const loop = setInterval(()=>{
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
  console.log(marioPosition);


   if (pipePosition <= 120  && pipePosition > 0 && marioPosition < 80 ){
      
     pipe.style.animation = 'none';
     pipe.style.left = `${pipePosition}px`;

     mario.style.animation = 'none';
     mario.style.bottom = `${marioPosition}px`;

     mario.src = 'game-over.png';
     mario.style.width = '75px'
     mario.style.marginLeft = '90px'

     clearInterval(loop);
    
   }



   
},10);