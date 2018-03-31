import Character from "./Character";
import Application from "./Application";
import * as AttributesCollection from "./AttributesCollection";

const popSize = 24;
const charWidth = 125;
const borderSize = 1;

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
        this.attributs = AttributesCollection.singleton;
        this.load("Vannilla");
        this.loadTable();
        this.majPopInfo(popSize, 0);
    }

    load(idPop, idPopClient = 0){
        let chars;
        switch (idPop) {
            case "Vannilla" :
                chars = this.appInstance.getGestionnairePopulation().getVannilla();
                break;
            case "ClientPop" :
                chars = this.appInstance.getGestionnairePopulation().getClientPop(idPopClient);
                break;
            default :
                return;
        }
        for(let i = 0; i < chars.characters.length; i++){
            this.population[i] = new Character(chars.characters[i], i, this.attributs);
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
        let nbCol = Math.floor(this.element.clientWidth/(charWidth + borderSize*2));
        nbCol = (nbCol === 0) ? 1 : nbCol;

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
        //________création de la cellule
        let col = document.createElement("td");
        col.id = "char" + char.id;
        col.className = "charElem";
        //_______création de l'image :
        let fig = document.createElement("figure");
        fig.id = "charfigure" + char.id;
        fig.addEventListener("mouseover", (evt)=>{ this.appInstance.getInfoBulle().montre(char.id, col.id);});
        fig.addEventListener("mouseout", (evt)=>{ this.appInstance.getInfoBulle().cache(char.id); });
        fig.innerHTML = `
                        <img src ='` + char.img + `' alt='Perso` + char.id + `' id = 'charimg` + char.id + `'/>
                        <figcaption>
                            <div class = 'charInfo'>
                                <h3 class = 'charName'>` + char.nom +`</h3>
                                <p id = 'charstatus` + char.id + `'>Suspect</p>
                            </div>
                        </figcaption>
        `;
        //______création de l'infobulle
        this.appInstance.getInfoBulle().addTooltip(char.id);
        let area = document.createElement("div");
        area.className = "overarea";
        area.id = "overarea" + char.id;
        area.addEventListener("mouseover", (evt)=>{ this.appInstance.getInfoBulle().affiche(char.id); });
        area.addEventListener("mouseout", (evt)=>{ this.appInstance.getInfoBulle().cache(char.id); });
        let arrow = document.createElement("div");
        arrow.className = "arrow";
        arrow.id = "arrow" + char.id;
        arrow.addEventListener("mouseover", (evt)=>{ this.appInstance.getInfoBulle().affiche(char.id); });
        arrow.addEventListener("mouseout", (evt)=>{ this.appInstance.getInfoBulle().cache(char.id); });
        let tt = document.createElement("div");
        tt.className = "custom-tooltip";
        tt.id = "tooltip" + char.id;
        tt.addEventListener("mouseover", (evt)=>{ this.appInstance.getInfoBulle().affiche(char.id); });
        tt.addEventListener("mouseout", (evt)=>{ this.appInstance.getInfoBulle().cache(char.id); });
        tt.innerHTML = char.listeAttribute() + "";
        //______ajout des éléments
        col.appendChild(fig);
        let doc = document.getElementById("tooltip_conteneur");
        doc.appendChild(area);
        doc.appendChild(tt);
        doc.appendChild(arrow);
        return  col;
    }

    centerCharInfos(){
        let charinfo = document.getElementsByClassName("charInfo");
        for(let i = 0; i < charinfo.length; i++){
            this.centerInParent(charinfo[i]);
        }
    }

    resizePanel(){
        this.loadTable();
        let tab = [];//#TODO récupèré la liste d'attributs du noeud actif
        this.refresh(tab);
    }

    /**
     *
     * @param node ??
     */
    centerInParent(node){
        //node.style.marginTop = node.parentNode.offsetHeight/2-node.offsetHeight/2 + "px";
        node.style.marginTop = "25px";
    }

    majPopInfo(actif, elim){
        document.getElementById("nbActif").innerHTML = actif;
        document.getElementById("nbElim").innerHTML = elim;
    }
}

export default PopulationPanel;