const dino = document.querySelector('.dino');
const background = document.querySelector('.background')

function pegarEventoTeclado( event ){
    if(event.keyCode === 32 ){
        jump();
    }
};

document.addEventListener ('keyup', pegarEventoTeclado);

let position = 0;
function jump(){
    position = 20;
    dino.style.bottom = position + 'px';

    let subidaIntervalo = setInterval( () => {
        if ( position >= 200){
            clearInterval(subidaIntervalo)

            let descidaIntervalo = setInterval(() => {
                if( position <= 0){
                clearInterval(descidaIntervalo)
            }else{
                position -= 20
                dino.style.bottom = position + 'px'
                }
            } , 40)
        }
        position += 20;
        dino.style.bottom = position + 'px';
    } , 40)
}