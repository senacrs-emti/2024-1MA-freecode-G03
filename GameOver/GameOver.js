var timer, sound;
sound = new Howl({
    src: ['final.mp3']
});
setInterval(function(){
sound.play();
},1000);
