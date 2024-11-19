var timer, sound;
sound = new Howl({
    src: ['finalRuim.mp3'],
    autoplay: true,
    loop: false,
    volume: 1,
});
setTimeout(function(){
    sound.play();
    },100);

anime.timeline({loop: false})
    .add({
      targets: '.ml16 .word3',
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    }).add({
        targets: '.ml16 .word4',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
      })

