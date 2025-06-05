class Eagle {
    constructor(img) {
        this.img = img
        this.w = 96
        this.h = 104
        this.x = width / 2;
        this.y = 40;
        this.vx = 1;
        this.vy = 0;
        this.gravity = 2;
    }
    move() {
        this.x += this.vx;
        if (this.x + this.w > width || this.x + this.w < 0) {
            this.vx = -this.vx
        }
        // this.y += this.vy;
        // this.vy += this.gravity;
        // this.y = constrain(this.y, 0, height / 2)
    }
    show() {
        if (this.vx > 0) {
            push();
            scale(-1, 1);
            image(this.img, -this.x, this.y, this.w, this.h)
            pop();
        } else {
            image(this.img, this.x, this.y, this.w, this.h)
        }
    }
}
