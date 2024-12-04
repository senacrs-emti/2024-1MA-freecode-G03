const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

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


   if (pipePosition <= 110  && pipePosition > 0 && marioPosition < 80 ){
      
     pipe.style.animation = 'none';
     pipe.style.left = `${pipePosition}px`;

     mario.style.animation = 'none';
     mario.style.bottom = `${marioPosition}px`;

     mario.style.width = '110px'
     mario.style.marginLeft = '0px'

     clearInterval(loop);
    
   }



   
},10);

document.addEventListener("keydown", (e) => {
	if((e.code === "ArrowUp")    |  (e.code === "KeyW") ){
		jump();
	}
	
});