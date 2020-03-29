/* var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10,14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10,14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10,14)
  }
];  */

/* var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyNames, enemyHealth, enemyAttack); */

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// console.log(enemyNames[0]);
// console.log(enemyNames [1]);
// console.log(enemyNames[2]);
// console.log(enemyNames.length);

// for(var i = 0; i < enemyNames.length; i++) {
  // console.log(enemyNames[i]);
  // console.log(i);
  // console.log(enemyNames[i] + " is at " + i + " index");

// }


var fight = function(enemy) {
  while(enemy.health > 0 && playerInfo.health > 0){  
  // window.alert("The fight has begun!");
  var promptFight = window.prompt("Would you like to Fight or SKIP this battle? Enter 'FIGHT or 'SKIP to choose."); 
  
  
  if(promptFight === "SKIP" || promptFight === "skip") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if(confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      playerInfo.money = Math.max(0, playerInfo.money - 10);
      console.log("playerInfo.money", playerInfo.money);
      break;}
    }
  
  enemy.health = Math.max(0, enemy.health - playerInfo.attack);
  console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."); 

  if(enemy.health <= 0) {
    window.alert(enemy.name + " has died!");
    playerInfo.money = playerInfo.money + 20;
    break;}
  else {
    window.alert(enemy.name + " still has " + enemy.health + " health left.");}

  playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
  console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
  
  if(playerInfo.health <= 0) {
    window.alert(playerInfo.name + " has died!");
    break;}
  else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");}
  }
  
}

var startGame = function() {
  playerInfo.reset();

  for(var i = 0; i < enemyInfo.length; i++) {
  if (playerInfo.health > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    // debugger;
    var pickedEnemyObj = enemyInfo[i];
    pickedEnemyObj.health = randomNumber(40, 60);
    fight(pickedEnemyObj);}
    
    /* if(playerHealth > 0 && i < enemyInfo.length - 1) {
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
      if(storeConfirm) {
        shop();
      }  
    } */
  

    else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;}
}
endGame();
};

var endGame = function() {
  if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  }
  else {
    window.alert("You've lost your robot in battle!")
  }
var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
  // restart the game
  startGame();
  } 
  else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}

var shop = function(){
  console.log("entered the shop");
}

var playerInfo = {
  name: window.prompt("What is your robot's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function() {
    this.health += 20;
    this.money -= 7;
  },
  upgradeAttack: function() {
    this.attack += 6;
    this.money -= 7;
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10,14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10,14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10,14)
  }
];  


startGame();

//fight();