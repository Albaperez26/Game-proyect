class Canela  {

    constructor(x, y) {
        this.node = document.createElement("img")
        this.node.src = "./images/canela.png";
        
        gameBoxNode.append(this.node);

        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 60;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;

        //definimos posiciones iniciales
        this.node.style.position = "absolute" // posiciona de forma exacta
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`

        
        this.gravitySpeed = 1.5;
        this.jumpSpeed = 100;
       
    }
    
    gravityEffect() { //actualiza la gravedad del personaje en caida
        this.y += this.gravitySpeed;
        this.node.style.top = `${this.y}px`
    }
    
    
    jump() {
        this.y -= this.jumpSpeed; //salta dentro de la caja de juego
        this.node.style.top = `${this.y}px`
    

    }

    moverseDerecha() {
        if(this.x < 350) {
        this.x += 15;
        this.node.style.left = `${this.x}px`
        }
    }

    moverseIzquierda() {
        if (this.x > 0){
        this.x -= 15;
        this.node.style.left = `${this.x}px`
        }

    }
}