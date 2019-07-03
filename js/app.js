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

	timePasses = function () {
	    this.foodLevel = this.foodLevel - 1;
	    this.playLevel = this.playLevel - 1;
	    this.sleepLevel = this.sleepLevel - 1;
	}

 
isLiving = function () {
    if (this.foodLevel <= 0 || this.playLevel <= 0 || this.sleepLevel <= 0) {
      return false;
    } else {
      return true;
    }
}