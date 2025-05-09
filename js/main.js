const splashScreenNode = document.querySelector("#splash-screen")
const gameScreenNode = document.querySelector("#game-screen")
const gameOverScreenNode = document.querySelector("#game-over-screen")

const startBtnNode = document.querySelector("#start-btn");

const gameBoxNode = document.querySelector("#game-box");
const restartBtnNode = document.querySelector("#restartbtn");

//* VARIABLES GLOBALES DEL JUEGO
let canelaObj = null;
let ramitaObj = null;
let tomObj = null;
let x;

let pantallay = 0;
let puntuacion = 0;

//variables de la música y volumen
let musicaFondo = new Audio("./sounds/animalcrossing.mp3");
musicaFondo.loop = true;
musicaFondo.volume = 0.1;

let musicaGameOver = new Audio("./sounds/gameover.mp3");
musicaGameOver.loop = true;
musicaGameOver.volume = 0.1;


//* FUNCIONES GLOBALES DEL JUEGO

function startGame() {

    // iniciamos la musica de fondo y pausamos la de gameover
    musicaFondo.currentTime = 0;
    musicaFondo.play();
    musicaGameOver.pause();

    splashScreenNode.style.display = "none";
    //mostrar la pantalla de juego
    gameScreenNode.style.display = "flex";

    /*añadimos los elementos del juego
        -Canela
        -Ramita donde cae canela
    */

    canelaObj = new Canela(50, 450)

    ramitaObj = new Ramita(50, 500);
    ramitasArr.push(ramitaObj);

    /*iniciamos el intervalo principal del juego*/
    intervalId = setInterval(() => {
        gameLoop();
    }, Math.round(1000 / 60));

}

let ramitasArr = [];
let tomArr = [];
let bayasArr = [];
let intervalId = null;


function gameLoop() { 
    canelaObj.gravityEffect(); //hace que canela salte de forma automática
   
    // Caer ramitas, toms y bayas
    caerRamitas();
    caerToms();
    caerBayas();

    actualizarPuntuacion();//actualizamos la puntuacion
    CheckCollisionCanelaRamita()//chequeamos si choca con la rama para poder saltar
    CheckCollisionCanelaTom(); // Enemigo
    CheckCollisionCanelaBaya();// Bayas

    generarRamitas();

    comprobarSiCanelaMuere(); //si sale de la pantalla por debajo, gameover
}

function caerRamitas() {
    ramitasArr.forEach((ramitaObj) => {
        ramitaObj.caerRamita();
    });
}

function caerToms() {
    tomArr.forEach((tomObj) => {
        tomObj.caerTom();
    });
}

function caerBayas() {
    bayasArr.forEach((bayasObj) => {
        bayasObj.caerBaya();
    });
}

function comprobarSiCanelaMuere() {
    if (canelaObj.y > 600) {
        gameOver();
    }
}

function actualizarPuntuacion() {
    const puntuacionNode = document.getElementById("score");

    if (puntuacionNode != null) {
        puntuacionNode.innerHTML = `Puntuación: ${puntuacion}`;
    }
}


function generarRamitas() {
    const margenExtra = 40; // margen para evitar que las ramitas se solapen

    for (let i = 0; i < 25; i++) {

    const randomX = Math.floor(Math.random() * 250) + 50; // posición horizontal aleatoria
    const randomY = Math.floor(Math.random() * 500) + 100; // posicion vertical aleatoria
    const existeRamita = comprobarSiExisteRamita(randomX, randomY, margenExtra);
   
        if (existeRamita == false) {
            ramitaObj = new Ramita(randomX, randomY);
            ramitasArr.push(ramitaObj);

            const random = Math.floor(Math.random() * 10);

                if (random == 0) {
                    tomObj = new Tom(randomX + 15, randomY - 37);
                    tomArr.push(tomObj);
                }
                else if (random == 1) {
                    bayasObj = new Bayas(randomX + 15, randomY - 28);
                    bayasArr.push(bayasObj);

                }
        }
    }
}

function comprobarSiExisteRamita(x, y, margen) { //hace que las ramitas no se solapen entre ellas
    for (let i = 0; i < ramitasArr.length; i++) {
        if (
            x < ramitasArr[i].x + ramitasArr[i].w + margen &&
            x + ramitaObj.w > ramitasArr[i].x - margen &&
            y < ramitasArr[i].y + ramitasArr[i].h + margen &&
            y + ramitaObj.h > ramitasArr[i].y - margen
        ) {
            return true;
        }
    }
    return false;
}

function comprobarSiExisteTom(x, y, margen) { // hace que no salgan enemeigos superpuestos o muy juntos
    for (let i = 0; i < tomArr.length; i++) {
        if (
            x < tomArr[i].x + tomArr[i].w + margen &&
            x + tomObj.w > tomArr[i].x - margen &&
            y < tomArr[i].y + tomArr[i].h + margen &&
            y + tomObj.h > tomArr[i].y - margen
        ) {
            return true;
        }
    }
    return false;
}

function CheckCollisionCanelaRamita() {
    ramitasArr.forEach((eachRamitaobj) => {
        if (
            canelaObj.x < eachRamitaobj.x + eachRamitaobj.w &&
            canelaObj.x + canelaObj.w > eachRamitaobj.x &&
            (canelaObj.y + 59)  < eachRamitaobj.y + eachRamitaobj.h &&
            canelaObj.y + canelaObj.h > eachRamitaobj.y
          ) {
            canelaObj.jump()
          }
          
    });
}

function CheckCollisionCanelaTom() {
    tomArr.forEach((eachTomObj) => {
        if (
            canelaObj.x < eachTomObj.x + eachTomObj.w &&
            canelaObj.x + canelaObj.w > eachTomObj.x &&
            canelaObj.y < eachTomObj.y + eachTomObj.h &&
            canelaObj.y + canelaObj.h > eachTomObj.y
          ) {
            gameOver();
          }  
    });
}

function CheckCollisionCanelaBaya() {
    bayasArr.forEach((eachBayaObj, index) => {
        if (
            canelaObj.x < eachBayaObj.x + eachBayaObj.w &&
            canelaObj.x + canelaObj.w > eachBayaObj.x &&
            canelaObj.y < eachBayaObj.y + eachBayaObj.h &&
            canelaObj.y + canelaObj.h > eachBayaObj.y
        ) {
            puntuacion += 5;
            eachBayaObj.eliminarBaya();
            bayasArr.splice(index, 1); // elimina la baya del array y de la pantalla
        }
    });
}


function gameOver() {
    // iniciamos la musica de fondo
    musicaGameOver.currentTime = 0;
    musicaFondo.pause();
    musicaGameOver.play();
    

    clearInterval(intervalId);
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";

}

function restartGame() {
    
    gameOverScreenNode.style.display = "none";//quitamos todo lo del juego para que haya un restart
    ramitasArr = [];
    tomArr = [];
    bayasArr = [];
    canelaObj = null;
    ramitaObj = null;
    tomObj = null;
    gameBoxNode.innerHTML = "";
    puntuacion = 0;
    
    startGame(); //iniciamos el juego de nuevo.

}

//eventlisteners
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
});

restartBtnNode.addEventListener("click", () => {
    restartGame();
})