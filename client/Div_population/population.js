
const popSize = 24;

var popJson = `
	{
		"characters": [
			{
				"nom" : "Magalie",
				"img" : "./charimg/magalie.png",
				"attributs" : [
					{"key" : "cheveux", "value" : "rouquine"},
					{"key" : "yeux", "value" : "vert"},
					{"key" : "personalité", "value" : "salope"}
				]
			},
			{
				"nom" : "Joseph",
				"img" : "./charimg/joseph.png",
				"attributs" : [
					{"key" : "cheveux", "value" : "blond"},
					{"key" : "yeux", "value" : "bleu"},
					{"key" : "personalité", "value" : "nazi"}
				]
			}
		]
	}`;

class Population {
	
	constructor() {
		this.population = new Array(Population.popSize);
	}
	
	load(){
		var chars = JSON.parse(popJson);
		for(var i = 0; i < chars.characters.length; i++){
			this.population[i] = new Character(chars.characters[i], i);
		}
	}
	
	getChar(i){
		return this.population[i];
	}
	
	refresh(tabAttribute){
		for(var i = 0; i < this.population.length; i++){
			var bool = this.population[i].check(tabAttribute);
			
		}
	}
		
}