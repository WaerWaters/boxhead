<<<<<<< HEAD
class Zombie{
    constructor(x,y,damage,health,speed) {
     this.x = x;
     this.y = y;
     this.width = 20;
     this.height = 20;
     this.damage = damage;
     this.health = 100;
     this.speed = speed;
     this.playerPosX = player.x;
     this.playerPosY = player.y;
   
    }
   show() {
    fill(0,255,0);
    rect(this.x,this.y,this.width,this.height);
    
    
   }
   update() {
    let d = dist(this.x,this.y,player.x,player.y)
    /*if (d<16) {
        
      }*/
      let vx = (player.x-this.x)/d;
      let vy = (player.y-this.y)/d;
      this.x+=vx;
      this.y+=vy;  
   }
}
=======
class Zombie{
    constructor(x,y,damage,health,speed) {
     this.x = x;
     this.y = y;
     this.width = 20;
     this.height = 20;
     this.damage = damage;
     this.health = health;
     this.speed = speed;
     this.playerPosX = player.x;
     this.playerPosY = player.y;
   
    }
   show() {
    fill(0,255,0);
    rect(this.x,this.y,this.width,this.height);
    
    
   }
   update() {
    let d = dist(this.x,this.y,player.x,player.y)
    /*if (d<16) {
        
      }*/
      let vx = (player.x-this.x)/d;
      let vy = (player.y-this.y)/d;
      this.x+=vx;
      this.y+=vy;  
      print(this.x);
      print(this.y);
   
   
   }
   
  }
>>>>>>> c6e861725acf09b14c4a997f1686110d9a583f06
   