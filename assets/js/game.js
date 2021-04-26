var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
    if (playerHealth == 0) {
        console.log("This will not run.");
    }
    else {
        console.log("This will run instead.");
    }
var playerAttack = 10;

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttaack = 12;

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
//subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth - playerAttack;

// Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. ");
// check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
        }
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
     playerHealth = playerHealth - enemyAttaack;

// Log a resulting message to the console so we know that it worked.
      console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

// check player's health
        if (playerHealth <=0 ) {
            window.alert(playerName + " has died! ");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
};



fight();