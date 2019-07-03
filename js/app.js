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
 		return this.foodLevel
 	}

 	sleep(player) {
 		player.sleepLevel += 1;
 		return this.sleepLevel
 	}

 	play(player) {
 		player.playLevel += 1;
 		return this.playLevel
 	}
}


//instatiate the tomagotchi





const game = {

	makeTomagatchi: function () {
		const yourTomagotchi = new Tomagotchi()
		this.player = yourTomagotchi
	},

	timePasses: function () {
	    this.foodLevel = this.foodLevel - 1;
	    this.playLevel = this.playLevel - 1;
	    this.sleepLevel = this.sleepLevel - 1;
	},


	isLiving: function () {
	    if (this.foodLevel <= 0 || this.playLevel <= 0 || this.sleepLevel <= 0) {
	      return false;
	    } else {
	      return true;
	    }
	}

}


game.makeTomagatchi()






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








