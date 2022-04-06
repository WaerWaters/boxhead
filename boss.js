class Boss extends Zombie{
    constructor(x,y,health,damage) {
     super(x,y)
      this.width = 30;
      this.height = 30;
      this.damage = damage;
      this.health = health;
      this.playerPosX = player.x;
      this.playerPosY = player.y;
   
    }
   show() {
    fill(255,0,0);
    rect(this.x,this.y,this.width,this.height);
    
    
   }
   update() {
    let d = dist(this.x,this.y,player.x,player.y)
      let vx = (player.x-this.x)/d*1.5;
      let vy = (player.y-this.y)/d*1.5;
      this.x+=vx;
      this.y+=vy;  
   }
}