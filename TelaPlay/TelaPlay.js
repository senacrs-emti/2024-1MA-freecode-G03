
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .Letras');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='Letras'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml9 .Letras',
    scale: [0, 1],
    duration: 2500,
    elasticity: 600,
    delay: (el, i) => 45 * (i+1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
