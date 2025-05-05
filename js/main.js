const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

const startBtnNode = document.querySelector("#start-btn");

const gameBoxNode = document.querySelector ("#gameBox");

//* VARIABLES GLOBALES DEL JUEGO
let canelaObj = null;
let ramitaObj = null;
let tomNookObj = null;

//* FUNCIONES GLOBALES DEL JUEGO

function startGame() {
    splashScreenNode.style.display = "none";
    //mostrar la pantalla de juego
    gameScreenNode.style.display = "flex";

    /*añadimos los elementos del juego
        -Canela
        -Ramitas
        -Tom Nook
    */


    /*iniciamos el intervalo principal del juego*/
    setInterval(() => {
        gameLoop();
    }, Math.round(1000/60))

    /*iniciamos otros intervalos del juego*/

}

function gameLoop() { //funciona!
    
}



/* EVENT LISTENERS*/
startBtnNode.addEventListener("click", () => {
    startGame();
});




/*PLANIFICACIÓN RESTANTE

-mostrar fondo
-mostrar personaje (x, y, w, h, speed) 
    + jump(addeventlistener-- no puede saltar mas que el techo)
-mostrar tom nook AUTOMATIC() (aleatorio)(x, y, w, h, speed)
-mostrar ramitas AUTOMATIC() aleatorio(x, y, w, h)-----con opcion a desplazarse 
-mostrar bayas AUTOMATIC() 

-spawn(ramas y tom nook aparezca y desaparezca)
-colision canela y tom nook
-colision canela y suelo
    ---GameOver()

-Score
-Reiniciar

    MUY EXTRA:
    -Cambio de fondo animado(en vertical)
    -Poder lanzar fosiles 
    




*/ 