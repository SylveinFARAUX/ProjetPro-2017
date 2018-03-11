import Character from "./Character";

const popSize = 24;
const charWidth = 150;
const charHeight = 150;
let popJson =
    {
        "characters": [
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "vert"},
                    {"key" : "personalité", "value" : "salope"}
                ]
            },
            {
                "nom" : "Joseph",
                "img" : "./assets/charimg/joseph.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "blond"},
                    {"key" : "yeux", "value" : "bleu"},
                    {"key" : "personalité", "value" : "nazi"}
                ]
            }
        ]
    };
class PopulationPanel {

    constructor() {
        this.population = new Array(popSize);
    }

    load(){
        let chars = popJson;
        for(let i = 0; i < chars.characters.length; i++){
            this.population[i] = new Character(chars.characters[i], i);
        }
    }

    getChar(i){
        return this.population[i];
    }

    refresh(tabAttribute){
        for(let i = 0; i < this.population.length; i++){
            let bool = this.population[i].check(tabAttribute);
        }
    }

    loadTable(population){
        let table = document.getElementById("tableChar");
        let nbCol = Math.floor(document.getElementById("population").offsetWidth/charWidth);
        nbCol = (nbCol === 0) ? 1 : nbCol;
        let nbRow = Math.ceil(popSize/nbCol);

        let row;
        for(let i = 0; i < popSize; i++){
            if(i % nbCol === 0){
                row = this.addRow(table);
            }
            row.appendChild(this.addChar(population.getChar(i%2)));
        }

        this.centerCharInfos();
    }

    addRow(table){
        let row = document.createElement("tr");
        table.appendChild(row);
        return row;
    }

    addChar(char){
        let col = document.createElement("td");
        col.id = "char" + char.id;
        col.className = "charElem";
        col.innerHTML = `
								<figure>
									<img src ='` + char.img + `' alt='Perso` + char.id + `' id = 'charimg` + char.id + `'/>
									<figcaption>
										<div class = 'charInfo'>
											<h3 id = 'charName'>` + char.nom +`</h3>
											<p id = 'charstatus` + char.id + `'>Suspect</p>
											<div class = "CharTooltip">
												<span class="arrow"></span>
												<span class='CharTooltip-text'>`+ char.listeAttribute() + `</span>
											</div>
										</div>
									</figcaption>
								</figure>
							`;
        return  col;
    }

    centerCharInfos(){
        let charinfo = document.getElementsByClassName("charInfo");
        for(let i = 0; i < charinfo.length; i++){
            this.centerInParent(charinfo[i]);
        }
    }

    centerInParent(node){
        //node.style.marginTop = node.parentNode.offsetHeight/2-node.offsetHeight/2 + "px";
        node.style.marginTop = "50px";
    }

}

export default PopulationPanel;