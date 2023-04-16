
const Player = document.getElementById('Player');
const Obstacle1 = document.querySelector('#Platform1');
const Obstacle4 = document.querySelector('#Platform4');






document.addEventListener('keydown', (e) => {


    switch (e.key) {
        case 'ArrowRight':  //left
            Player.style.left = Player.offsetLeft + 10 + 'px';
            break;


        case "ArrowUp":  //up
            Player.style.bottom = -200 + 'px';
            setTimeout(() => {
                Player.style.bottom = -289 + 'px';
            }, 1200);

            
            break;

        case "ArrowLeft": //right
            Player.style.left = Player.offsetLeft - 20 + 'px';
            break;

        case "ArrowDown":  //down
            // Player.style.bottom = 100 + 'px';
            Player.style.height = 30 + 'px';
            setTimeout(() => {
                Player.style.height = 70 + 'px';
            }, 800);
            break;


        default:
            break;
    }
})








///////////////////////
































