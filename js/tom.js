class Tom {

    constructor(x, y) {
        this.node = document.createElement("img")
        this.node.src = "./images/tomnook.png";
        
        gameBoxNode.append(this.node);

        this.x = x;
        this.y = y;
        this.w = 37.5;
        this.h = 45;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.classList.add("tom");
        
        
        this.node.style.position = "absolute" // para poder posicionarlo de forma exacta
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
    }
   
    caerTom() {
        this.y += 0.5;
        this.node.style.top = `${this.y}px`
    }
}