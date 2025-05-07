class Canela  {

    constructor() {
        //propiedades y caracteristicas

        this.node = document.createElement("img")
        this.node.src = "./images/canela.png";
        
        gameBoxNode.append(this.node);

        this.x = 50;
        this.y = 500;
        this.w = 50;
        this.h = 60;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;

        //definimos posiciones iniciales
        this.node.style.position = "absolute" // para poder posicionarlo de forma exacta
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`

        
        this.gravitySpeed = 0.5;
        this.jumpSpeed = 30;
       
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
        if(this.y > 0) {
           //salta dentro de la caja de juego
        this.y -= this.jumpSpeed;
        this.node.style.top = `${this.y}px`
        }

    }

    }