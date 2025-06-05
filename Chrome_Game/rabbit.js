class Rabbit {
    constructor(img) {
        this.img = img
        this.w = 55
        this.h = 50
        this.x = this.w + 100;
        this.y = height - this.h;
        this.vy = 0;
        this.gravity = 1.0;
    }
    move() {
        // this.x += 2
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 5, height - this.h)
    }
    jump() {
        if (this.y == height - this.h) {
            this.vy = -22;
        }
    }
    show() {
        image(this.img, this.x, this.y, this.w, this.h)
    }

    collides(obstacle) {
        // if (this.x + this.w > obstacle.x || obstacle.x + obstacle.w < this.x + this.w) {
        //     return false
        // }
        // if (this.h > obstacle.y + obstacle.h || obstacle.y > this.y + this.h) {
        //     return false
        // }
        // return true

        // works
        if (this.x - 10 > obstacle.x + obstacle.w || obstacle.x - obstacle.w > this.x - 20) {
            return false
        }
        // doesn't work
        if (this.y + this.h > obstacle.y + obstacle.h || obstacle.y + obstacle.h > this.y + this.h + 20) {
            return false
        } else {
            return true
        }
    }

    captured(eagle) {
        if (this.y - 48 > eagle.y + eagle.h - 60) {
            return false
        }
        if (this.x > eagle.x + eagle.w || eagle.x > this.x + this.w) {
            return false
        }
        return true
    }
}
