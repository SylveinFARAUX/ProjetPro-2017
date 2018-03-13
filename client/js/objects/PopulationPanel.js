import Character from "./Character";
import Application from "./Application";

const popSize = 24;
const charWidth = 150;
const charHeight = 150;
const borderSize = 3;

let popJson =
    {
        "characters": [
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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

/**
 * Classe représentant le panel de la population
 */
class PopulationPanel {

    /**
     *
     * @param {!Application} appInstance L'instance d'application commune aux panels
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
    constructor(appInstance) {
        if(!(appInstance instanceof Application)){
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        this.population = new Array(popSize);
        this.table = document.getElementById("tableChar");
        this.element = document.getElementById("population");
        this.load();
        this.createButtons();
        this.loadTable();
        this.majPopInfo(popSize, 0);
    }

    load(){
        let chars = popJson;
        for(let i = 0; i < chars.characters.length; i++){
            this.population[i] = new Character(chars.characters[i], i);
        }
    }

    /**
     *
     * @param {!Number} i l'index du personnage
     * @returns {Character} l'instance du personnage
     */
    getChar(i){
        return this.population[i];
    }

    refresh(tabAttribute){
        let actif = 0, elim = 0;
        for(let i = 0; i < this.population.length; i++){
            let bool = this.population[i].check(tabAttribute);
            if(bool)
                actif++;
            else
                elim++;
        }
        this.majPopInfo(actif, elim);
    }

    loadTable(){
        let nbCol = Math.floor(this.element.offsetWidth/(charWidth + borderSize*2));
        nbCol = (nbCol === 0) ? 1 : nbCol;
        let nbRow = Math.ceil(popSize/nbCol);

        //vide le tableau -> utile dans le cas d'un rechargement
        this.table.innerHTML = "";

        let row;
        for(let i = 0; i < popSize; i++){
            if(i % nbCol === 0){
                row = this.addRow();
            }
            row.appendChild(this.addChar(this.getChar(i)));
        }
        this.centerCharInfos();
        this.sizeTable()
    }

    addRow(){
        let row = document.createElement("tr");
        this.table.appendChild(row);
        return row;
    }

    /**
     *
     * @param {!Character} char l'instance de Character
     * @returns {HTMLTableDataCellElement} l'élément 'td' de la colonne
     */
    addChar(char){
        let col = document.createElement("td");
        col.id = "char" + char.id;
        col.className = "charElem";
        col.innerHTML = `
								<figure id = 'charfigure` + char.id + `'>
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

    resize(){
        this.loadTable();
        var tab = new Array();//#TODO récupèré la liste d'attributs du noeud actif
        this.refresh(tab);
    }

    sizeTable(){
        let conteneurH = document.getElementById("PopulationConteneur").clientHeight;
        let titreH = document.getElementById("PopTitle").offsetHeight;
        document.getElementById("population").style.height = conteneurH - titreH + "px";
    }

    /**
     *
     * @param node ??
     */
    centerInParent(node){
        //node.style.marginTop = node.parentNode.offsetHeight/2-node.offsetHeight/2 + "px";
        node.style.marginTop = "40px";
    }

    majPopInfo(actif, elim){
        document.getElementById("nbActif").innerHTML = actif;
        document.getElementById("nbElim").innerHTML = elim;
    }

    /**
     * Créer un bouton qui désactive le personnage d'index char.
     * @param {!Number} char Index du personnage à éliminer
     * @param {!String} text Text du bouton
     * @param {!String} reason Raison de l'élimination
     * @returns {HTMLButtonElement} Le bouton HTML
     */
    createUnactiveButton(char, text, reason){
        let buttonElm = document.createElement("button");
        buttonElm.addEventListener("click", ()=>{
            this.getChar(char).unactive(reason);
        });
        buttonElm.innerText = text;
        return buttonElm;
    }

    /**
     * Créer un bouton qui active le personnage d'index char.
     * @param {!Number} char Index du personnage à éliminer
     * @param {!String} text Text du bouton
     * @returns {HTMLButtonElement} Le bouton HTLM
     */
    createActiveButton(char, text){
        let buttonElm = document.createElement("button");
        buttonElm.addEventListener("click", ()=>{
            this.getChar(char).active();
        });
        buttonElm.innerText = text;
        return buttonElm;
    }

    /**
     * Instancie les boutons d'activation/désactivation des personnages
     */
    createButtons(){
        let buttonsElm = document.getElementById("populationButtons");
        buttonsElm.appendChild(this.createUnactiveButton(0, "Désactive perso 0","Trop moche"));
        buttonsElm.appendChild(this.createActiveButton(0, "Active perso 0"));
        buttonsElm.appendChild(this.createUnactiveButton(1, "Désactive perso 1","Cheveux blond"));
        buttonsElm.appendChild(this.createActiveButton(1, "Active perso 1"));
    }


}

export default PopulationPanel;