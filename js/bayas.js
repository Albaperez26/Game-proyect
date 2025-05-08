class Bayas {
    constructor(x, y) {
        this.sonido = new Audio("./sounds/baya.mp3");
        this.node = document.createElement("img")
        this.node.src = "./images/baya.png"

        gameBoxNode.append(this.node);

        this.x = x;
        this.y = y;
        this.w = 32.25;
        this.h = 34.25;

        this.node.style.left = `${this.x}px`;
        this.node.style.top = `${this.y}px`;
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;

        this.node.classList.add("baya");
        this.node.style.position = "absolute" // para poder posicionarlo de forma exacta
    }

    caerBaya() {
        this.y += 0.5;
        this.node.style.top = `${this.y}px`
    }

    eliminarBaya() {
        this.node.remove();
        this.sonido.play();
    }
}