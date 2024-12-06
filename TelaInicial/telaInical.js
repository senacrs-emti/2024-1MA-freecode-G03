
var timer, sound;
sound = new Howl({
    src: ['selecao.mp3.'],
    autoplay: true,
    loop: false,
    volume: 1,
});
setTimeout(function(){
    sound.play();
    },100);