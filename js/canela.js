class Canela  {

    constructor(x, y) {
        //propiedades y caracteristicas

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
        this.node.style.position = "absolute" // para poder posicionarlo de forma exacta
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`

        
        this.gravitySpeed = 1.5;
        this.jumpSpeed = 100;
       
    }
    // .todos los metodos o accione
    gravityEffect() {
        //console.log("fuerza de gravedad");
        this.y += this.gravitySpeed;
        //siempre que una propiedad cambie, debemos actualizar el .style del nodo
        this.node.style.top = `${this.y}px`
    }
    
    
    jump() {
        //console.log("jumpppp");
           //salta dentro de la caja de juego
        this.y -= this.jumpSpeed;
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