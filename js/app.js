const tomagotchiName = prompt("Please enter your name", "Name of your Tomagotchi");


class Tomagotchi {
	constructor(tomagotchiName) {
		this.name = tomagotchiName;
		this.foodLevel = 10;
    	this.playLevel = 10;
    	this.sleepLevel = 10;
	}
}


//instatiate the tomagotchi
const yourTomagotchi = new Tomagotchi(tomagotchiName)

console.log(yourTomagotchi);


 