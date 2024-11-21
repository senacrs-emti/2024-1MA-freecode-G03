var timer, sound;
sound = new Howl({
    src: ['InicioPlay.mp3'],
    autoplay: true,
    loop: true,
    volume: 1,
});
setTimeout(function(){
    sound.play();
    },100);
