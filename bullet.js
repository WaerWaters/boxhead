class Bullet {
    constructor(x, y, xDir, yDir) {
        this.x = x
        this.y = y
        this.xDir = xDir
        this.yDir = yDir
        this.size = 1
        this.speed = 4
    }
    show() {
        push()
        stroke(0)
        fill(0)
        ellipse(this.x, this.y, this.size, this.size)
        pop()
    }
    update() {
        this.x += this.xDir * this.speed
        this.y += this.yDir * this.speed
    }
    outOfBounds() {
        return(this.x < 0 || this.x > width || this.y < 0 || this.y > height)
    }
    hit() {

    }
}