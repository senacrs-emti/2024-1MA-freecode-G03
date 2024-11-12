const dino = document.querySelector('.dino');
const cacto = document.querySelector('.cacto')

let alredyJump = false;

document.addEventListener("keydown", (e) => {
	if((e.code === "ArrowUp")    |  (e.code === "Space")){
		jump();
	}
});

function jump() {
	if (!dino.classList.contains("jump")) {
		dino.classList.add("jump");
		alredyJump = true;

		setTimeout(() => {
			dino.classList.remove("jump")
			alredyJump = false;
		}, 1100);
	};
};

setInterval (() => {
	let dinoBottom = parseInt(
		window.getComputedStyle(dino).getPropertyValue("bottom")
	);
	let cactoLeft = parseInt(
		window.getComputedStyle(cacto).getPropertyValue("left")
	);

	if(cactoLeft > 20 && cactoLeft < 61  && dinoBottom <= 20 && !alredyJump) {
		alert('Game Over')
	}
})

let randomTime = Math.random() * 4000;
function gerar() {
  var block = 
    document.getPropertyValue(randomTime)
    
}
