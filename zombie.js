class Zombie{
    constructor(x,y,damage,health) {
     this.x = x;
     this.y = y;
     this.width = 20;
     this.height = 20;
     this.damage = damage;
     this.health = 100;
     this.playerPosX = player.x;
     this.playerPosY = player.y;
   
    }
   show() {
    fill(105,200,0);
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
   