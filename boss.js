class Boss extends Zombie{
    constructor(x,y,health,damage,armor) {
     super(x,y)
      this.width = 30;
      this.height = 30;
      this.damage = damage;
      this.health = 200;
      this.armor = 300;
      this.playerPosX = player.x;
      this.playerPosY = player.y;
      this.speed = 1;
   
    }
   show() {
    fill(255,0,0);
    rect(this.x,this.y,this.width,this.height);
    
    
   }
   update() {
    let d = dist(this.x,this.y,player.x,player.y)
      let vx = (player.x-this.x)/d*this.speed;
      let vy = (player.y-this.y)/d*this.speed;
      this.x+=vx;
      this.y+=vy;  
   }
}