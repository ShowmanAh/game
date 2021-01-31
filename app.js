new Vue({
  'el' : '#app',
  data: {
     playerHealth: 100,
     monesterHealth: 100,
     gameIsruning: false,
     turns: [] 
  },
  methods: {
    startGame: function(){
        this.gameIsruning = true;
        this.playerHealth = 100;
        this.monesterHealth = 100;
    },
    attack: function(){
        var damage = this.calculateDamage(3, 10); 
        this.monesterHealth -= damage;
        this.turns.unshift({
            isPlayer: true,
            text: 'player hits monesterfor' + damage
        }); 
        /*
        if(this.monesterHealth <=0){
            alert('you won !');
            this.gameIsruning = false;
            return;
        }
        **/
       if(this.checkWin()){
           return;
       }
        this.playerHealth -= this.calculateDamage(5, 12);
        this.checkWin();
    },
    specialAttack: function(){
       // console.log('sdf');
         this.monesterHealth = this.calculateDamage(3, 10);
         if(this.checkWin()){
             return;
         }
         this.monesterAttack();
    },
    heal: function(){
           if(this.playerHealth <= 90){
               this.playerHealth +=10;
           }else{
               this.playerHealth = 100;
           }
           this.monesterAttack();
    },
    giveUp: function(){
          this.gameIsruning = false;
    },
    monesterAttack: function(){
        var damage = this.calculateDamage(5, 12); 
         this.playerHealth = damage;
         this.checkWin();
         this.turns.unshift({
            isPlayer: false,
            text: 'monester hits player' + damage
        }); 
    },
    calculateDamage: function(min, max){
        return Math.max(Math.floor(Math.random() * max) + 1, min); 
    }, 
    checkWin: function(){
        if(this.monesterHealth <= 0){
            if(confirm('you win ! new game?')){
                this.startGame();
            }else{
                this.gameIsruning = false;
            }
            return true;
        }else if(this.playerHealth <= 0){
          if(confirm('you lost ! new game ?')){
              this.startGame();
          } else{
              this.gameIsruning = false;
          }
          return true;
        }
        return false;
    }
  }
});
