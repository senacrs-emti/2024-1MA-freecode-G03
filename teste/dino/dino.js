const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const pergunta = document.querySelector('.question')

let isGameOver = false;
let position = 0;

document.addEventListener("keydown", (e) => {
	if((e.code === "ArrowUp")    |  (e.code === "KeyW")){
		jump();
	}
});

document.addEventListener("keydown", (e) => {
	if((e.code === "ArrowDown")   |  (e.code === "KeyS")){
		reduce();
	}    
});
function jump() {
	isJumping = true;
  
	let upInterval = setInterval(() => {
	  if (position >= 130) {
		// Descendo
		clearInterval(upInterval);
  
		let downInterval = setInterval(() => {
		  if (position <= 0) {
			clearInterval(downInterval);
			isJumping = false;
		  } else {
			position -= 10;
			dino.style.bottom = position + 'px';
		  }
		}, 20);
	  } else {
		// Subindo
		position += 10;
		dino.style.bottom = position + 'px';
	  }
	}, 28);
  };

  function reduce() {
	dino.classList.add ("dinobaixo")
	setTimeout(function() {
		dino.classList.remove("dinobaixo")
	},1000);
};


function createCactus() {
	const cactus = document.createElement('div');
	let cactusPosition = 1000;
	let randomTime = Math.floor((Math.random() * 4000) + 1000);

	if (isGameOver) return;
  
	cactus.classList.add('cactus');
	background.appendChild(cactus);
	cactus.style.left = cactusPosition + 'px';
  
	let leftTimer = setInterval(() => {
	  if (cactusPosition < -60) {
		// Saiu da tela
		clearInterval(leftTimer);
		background.removeChild(cactus);
	  } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
		// Game over
		clearInterval(leftTimer);
		isJumping = false;
		isGameOver = true;
	  } else {
		cactusPosition -= 10;
		cactus.style.left = cactusPosition + 'px';
	  }
	}, 20);
  
	setTimeout(createCactus, randomTime);
  }
  
  createCactus();