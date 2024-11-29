var timer, sound;
sound = new Howl({
    src: ['finalBom.mp3'],
    autoplay: true,
    loop: false,
    volume: 1,
});
setTimeout(function(){
    sound.play();
    },100);

anime.timeline({loop: false})
    .add({
      targets: '.ml15 .word1',
      scale: [14,1],
      opacity: [0,1],
      easing: "easeOutCirc",
      duration: 800,
      delay: (el, i) => 800 * i
    }).add({
        targets: '.ml15 .word2',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
      })
