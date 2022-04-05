class Obstacles {
    constructor(x,y){
        this.x = x
        this.y = y
        this.size = 60
    }
    show() {
        push()
        fill(200)
        square(this.x, this.y, this.size)
        pop()
    }
}