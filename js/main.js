const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

const startBtnNode = document.querySelector("#start-btn");

const gameBoxNode = document.querySelector("#game-box");

//* VARIABLES GLOBALES DEL JUEGO
let canelaObj = null;
let ramitaObj = null;

let x;

//* FUNCIONES GLOBALES DEL JUEGO

function startGame() {
    splashScreenNode.style.display = "none";
    //mostrar la pantalla de juego
    gameScreenNode.style.display = "flex";

    /*añadimos los elementos del juego
        -Canela
    */
    ramitaObj = new Ramita(50, 500);
    ramitasArr.push(ramitaObj);

    canelaObj = new Canela()
    
    for ( let i = 0; i < 40; i++) {
        generarRamitas();
    }
    
    /*iniciamos el intervalo principal del juego*/
    setInterval(() => {
        gameLoop();
    }, Math.round(1000/60))

    /*iniciamos otros intervalos del juego*/

   
}


let count = 0;
let ramitasArr = [];

function gameLoop() { //funciona!
    canelaObj.gravityEffect();
   //hacemos que salte de forma automática
    count++;

   
   //ramitas
   ramitasArr.forEach((eachRamitaobj) => {
    eachRamitaobj.automaticMovement()
   });

     CheckCollisionCanelaRamita() 


}

function generarRamitas() {
    
    const randomX = Math.floor(Math.random() * 250) + 50; // posición horizontal aleatoria
    const randomY = Math.floor(Math.random() * 500) + 100; // posicion vertical aleatoria
    let ramitaSpaceBetween = 100;
    ramitaObj = new Ramita(randomX, randomY);
    ramitasArr.push(ramitaObj);
}

function CheckCollisionCanelaRamita() {
    ramitasArr.forEach((eachRamitaobj) => {
        if (
            canelaObj.x < eachRamitaobj.x + eachRamitaobj.w &&
            canelaObj.x + canelaObj.w > eachRamitaobj.x &&
            (canelaObj.y + 59)  < eachRamitaobj.y + eachRamitaobj.h &&
            canelaObj.y + canelaObj.h > eachRamitaobj.y
          ) {
            // Collision detected!
            console.log("canela ha chocado!")
            canelaObj.jump()
          }
          
    });
}



/* EVENT LISTENERS*/
startBtnNode.addEventListener("click", () => {
    startGame();
});

document.addEventListener("keydown",(e) => {

    console.log(e.code);
    if(e.code === "ArrowLeft") {
        //x = x-100;
        canelaObj.moverseIzquierda();
    }

    if(e.code === "ArrowRight") {
       // x = x+100;
        canelaObj.moverseDerecha();
    }


   // canelaObj.style = x + "px";
});








/*PLANIFICACIÓN RESTANTE

-mostrar fondo X
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
    2





*/ 