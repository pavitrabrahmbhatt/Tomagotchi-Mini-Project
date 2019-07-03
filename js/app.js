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
    	this.age = 0;

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
	timer: 0,
	intervalID: null,
	isAlive: false,

	start: function () {
		this.makeTomagatchi()

	},

	startTimer: function() {

		if (this.isAlive === true){

			this.intervalID = setInterval(() => {	
				this.stopInterval()
				this.timer++
				this.timePasses()
				this.isLiving()
				console.log(this.timer);
			}, 1000)
        } 
	},

	stopInterval: function () {
		if (this.isAlive === false){
			clearInterval(this.intervalID)
			console.log (`YOU KILLED ${this.player.name}!!!!`)
		}
	},

	makeTomagatchi: function () {
		const yourTomagotchi = new Tomagotchi(tomagotchiName)
		this.player = yourTomagotchi
		console.log(this.player);
		this.isAlive = true
		this.startTimer()
	},

	timePasses: function () {
	    this.player.foodLevel = this.player.foodLevel - 1;
	    this.player.playLevel = this.player.playLevel - 1;
	    this.player.sleepLevel = this.player.sleepLevel - 1;
	    this.player.age = this.player.age + 1;
	    $('#myBar4').text(this.player.foodLevel);
	    $('#myBar1').text(this.player.playLevel);
	    $('#myBar2').text(this.player.sleepLevel);
	    $('#myBar3').text(this.player.age);
	    
	},


	isLiving: function () {
	    if (this.player.foodLevel <= 0 || this.player.playLevel <= 0 || this.player.sleepLevel <= 0) {
	     	this.isAlive = false;
	    } 
	    console.log(this.isAlive);
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







