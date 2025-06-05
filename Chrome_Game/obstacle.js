class Obstacle {
    constructor(img) {
        this.img = img
        this.w = 64
        this.h = 45
        this.x = width
        this.y = height - this.h
        this.scroll = -1
        this.scored = false
        this.yvel = 0
    }

    show() {
        // rect(this.x, this.y, this.w, this.h);
        image(this.img, this.x, this.y, this.w, this.h);
    }

    move() {
        this.x -= 5;
    }

    update() {
        this.x += this.scroll;
    }
}
