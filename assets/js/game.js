var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log(playerName, playerHealth, playerAttack, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;
console.log(enemyName, enemyHealth, enemyAttack);


var fight = function() {
  window.alert("The fight has begun!");
  var promptFight = window.prompt("Would you like to Fight or SKIP this battle? Enter 'FIGHT or 'SKIP to choose.");

  if(promptFight === "FIGHT" || promptFight === "fight") {
  enemyHealth = enemyHealth - playerAttack;
  console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");


  if(enemyHealth <= 0) {
    window.alert(enemyName + " has died!");}
  else {
    window.alert(enemyName + " still has " + enemyHealth + " health left.");}

  playerHealth = playerHealth - enemyAttack;
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

  if(playerHealth <= 0) {
    window.alert(playerName + " has died!");}
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");}
  }
  else if(promptFight === "SKIP" || promptFight === "skip") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if(confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      playerMoney = playerMoney - 2;}
    else {
      fight();}
  }
  else {
    window.alert("You need to pick a valid option. Try again!");} 
    


}


fight();