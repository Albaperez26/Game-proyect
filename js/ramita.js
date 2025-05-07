class Ramita {

    constructor(x, y) {

        this.node = document.createElement("img")
        this.node.src = "./images/ramita.png"

        gameBoxNode.append(this.node);

        this.x = x;
        this.y = y;
        this.w = 60;
        this.h = 20;

        
        this.node.style.left = `${this.x}px`;
        this.node.style.top = `${this.y}px`;
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
       
        this.node.classList.add("ramita");
        this.node.style.position = "absolute" // para poder posicionarlo de forma exacta
        
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`

        
    }

    automaticMovement(){
        
        
    }

    
}
    

   