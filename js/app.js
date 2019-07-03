// $(document).ready(function() {
//   $("#start-button").click(function() {
//     $("#start-button").hide();
//     tamagotchi = Object.create(Tamagotchi);
//     tamagotchi.initialize(prompt("Name your Tamagotchi"));



const tomagotchiName = prompt("Please enter your name", "Name of your Tomagotchi");


class Tomagotchi {
	constructor(tomagotchiName) {
		this.name = tomagotchiName;
		this.foodLevel = 10;
    	this.playLevel = 10;
    	this.sleepLevel = 10;
	}

	feed(player) {
 		this.foodLevel += 1;
 		console.log("You pet is eating!");
 	}

 	sleep(player) {
 		this.sleepLevel += 1;
 		console.log("Your pet is going to sleep!");
 	}

 	play(player) {
 		this.playLevel += 1;
 		console.log("You are playing with your pet!");
 	}
}


//instatiate the tomagotchi





const game = {

	player: null,

	start: function () {
		this.makeTomagatchi()

	},

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


game.start()






$("#food-button").on('click', (e) => {
    game.player.feed();
    
})

$("#play-button").on('click', (e) => {
    game.player.play();
    
})

$("#sleep-button").on('click', (e) => {
    game.player.sleep();
    
})







