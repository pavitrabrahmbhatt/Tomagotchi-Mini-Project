const tomagotchiName = prompt("Please enter your name", "Name of your Tomagotchi");


class Tomagotchi {
	constructor(tomagotchiName) {
		this.name = tomagotchiName;
		this.foodLevel = 10;
    	this.playLevel = 10;
    	this.sleepLevel = 10;
	}

	feed(player) {
 		player.foodLevel += 1;
 		console.log("You pet is eating!");
 	}

 	sleep(player) {
 		player.sleepLevel += 1;
 		console.log("Your pet is going to sleep!");
 	}

 	play(player) {
 		player.playLevel += 1;
 		console.log("You are playing with your pet!");
 	}
}


//instatiate the tomagotchi





const game = {

	// start: function () {
	// 	this.makeTomagatchi();
	// 	this.timePasses();

	// }
	player: null,

	makeTomagatchi: function () {
		const yourTomagotchi = new Tomagotchi(tomagotchiName)
		this.player = yourTomagotchi
		console.log(this.player);
	},

	timePasses: function () {
	    this.player.foodLevel = this.player.foodLevel - 1;
	    this.player.playLevel = this.player.playLevel - 1;
	    this.player.sleepLevel = this.player.sleepLevel - 1;
	    console.log(this.player.foodLevel);
	    console.log(this.player.playLevel);
	    console.log(this.player.sleepLevel);
	},


	isLiving: function () {
	    if (this.player.foodLevel <= 0 || this.player.playLevel <= 0 || this.player.sleepLevel <= 0) {
	      return false;
	    } else {
	      return true;
	    }
	}

}









// $("#food-button").click(function() {
//     tamagotchi.foodUp();
//     $("span#food-level").text(tamagotchi.foodLevel);
//   })
//   $("#play-button").click(function() {
//     tamagotchi.playUp();
//     $("span#play-level").text(tamagotchi.playLevel);
//   })
//   $("#sleep-button").click(function() {
//     tamagotchi.sleepUp();
//     $("span#sleep-level").text(tamagotchi.sleepLevel);
//   })








