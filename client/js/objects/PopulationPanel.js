import Character from "./Character";
import Application from "./Application";
import * as AttributesCollection from "./AttributesCollection";

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
        this.population = [];
        this.activePopulation = [];
        this.attributs = AttributesCollection.singleton;
        //chargement du panel population principale
        this.loadPopulation("Vannilla");
        //chargement du panel population par défaut pour le creapop
        this.loadPopCreator();
        this.loadMenuPopDefaut();
    }

    loadPopulation(idPop, idPopClient = 0){
        this.load(idPop, idPopClient);
        this.table = document.getElementById("mainTableChar");
        this.loadTable();
        this.activePopulation = [];
        this.activePopulation = this.activePopulation.concat(this.population);
    }

    loadPopCreator(){
        this.load("All");
        this.table = document.getElementById("vannilla_pops");
        this.loadTable();
        this.load("ClientChars");
        this.table = document.getElementById("clientchars");
        this.loadTable();
        //modif spécifiques
        let fig = document.getElementById("pop_creator_content").getElementsByClassName("charfigcaptation");
        let obj = this.appInstance;
        for(let i = 0; i < fig.length; i++){
            fig[i].addEventListener("click", function(){ obj.getGestionnairePopulation().selectChar(fig[i].id);});
        }
        obj.getGestionnairePopulation().rehinit();
    }

    load(idPop, idPopClient = 0){
        let chars = [];
        switch (idPop) {
            case "All" :
                chars = this.appInstance.getGestionnairePopulation().getVannilla().characters;
                break;
            case "Vannilla" :
                chars = this.appInstance.getGestionnairePopulation().getVannilla().characters;
                break;
            case "ClientChars" :
                chars = this.appInstance.getGestionnairePopulation().getClientChars();
                break;
            case "ClientPop" :
                chars = this.appInstance.getGestionnairePopulation().getClientPop(idPopClient);
                break;
            default :
                return;
        }
        let d = new Date();
        this.population = [];
        for(let i = 0; i < chars.length; i++){
            this.population[i] = new Character(chars[i], i + "" + d.getTime(), this.attributs);
        }
        this.refresh();
    }

    /**
     *
     * @param {!Number} i l'index du personnage
     * @returns {Character} l'instance du personnage
     */
    getChar(i){
        return this.activePopulation[i];
    }

    /**
     *
     * @param {Array.<Assertion>} tabAttribute liste des critères
     * @returns {number} le nombre de personnage répondant au critères
     */
    getNumberOfActivesCharacters(tabAttribute){
        let actif = 0;
        for(let i = 0; i < this.activePopulation.length; i++){
            if(this.activePopulation[i].check(tabAttribute, false)){
                actif++;
            }
        }
        return actif;
    }

    refresh(tabAttribute){
        let actif = 0, elim = 0;
        for(let i = 0; i < this.activePopulation.length; i++){
            let bool = this.activePopulation[i].check(tabAttribute, true);
            if(bool)
                actif++;
            else
                elim++;
        }
        this.majPopInfo(actif, elim);
        return actif;
    }

    loadTable(){
        let char;
        //vide le tableau -> utile dans le cas d'un rechargement
        if(this.population === undefined || this.population.length === 0){
            this.table.innerHTML = "<p>Aucun personnage n'as été chargé.</p>";
            return;
        }
        this.table.innerHTML = "";

        let row = document.createElement("tr");
        this.table.appendChild(row);
        for(let i = 0; i < this.population.length; i++){
            char = this.population[i];
            row.appendChild(this.addChar(char));
        }
        this.majPopInfo(this.population.length, 0);
    }


    /**
     *
     * @param {!Character} char l'instance de Character
     * @returns {HTMLTableDataCellElement} l'élément 'td' de la colonne
     */
    addChar(char){
        //________création de la cellule
        let obj = this.appInstance;
        let col = document.createElement("td");
        col.id = "char" + char.id;
        col.className = "charElem";
        //_______création de l'image :
        let fig = document.createElement("figure");
        fig.id = "charfigure" + char.id;
        fig.className = "charfigure";
        fig.addEventListener("mouseover", function(){ obj.getInfoBulle().montre(char.id, col.id);});
        fig.addEventListener("mouseout", function(){ obj.getInfoBulle().cache(char.id); });
        fig.innerHTML = `
                        <img src ='` + char.img + `' alt='Perso` + char.id + `' id = 'charimg` + char.id + `'/>
                        <figcaption class = 'charfigcaptation' id = '` + char.id + `'>
                            <div class = 'charInfo'>
                                <h3 class = 'charName' id = 'charName` + char.id + `'>` + char.nom +`</h3>
                                <p id = 'charstatus` + char.id + `' class = "charstatus">Suspect</p>
                            </div>
                        </figcaption>
        `;
        //______création de l'infobulle
        this.appInstance.getInfoBulle().addTooltip(char.id);
        let area = document.createElement("div");
        area.className = "overarea";
        area.id = "overarea" + char.id;
        area.addEventListener("mouseover", function(){ obj.getInfoBulle().affiche(char.id); });
        area.addEventListener("mouseout", function(){ obj.getInfoBulle().cache(char.id); });
        let arrow = document.createElement("div");
        arrow.className = "arrow";
        arrow.id = "arrow" + char.id;
        arrow.addEventListener("mouseover", function(){ obj.getInfoBulle().affiche(char.id); });
        arrow.addEventListener("mouseout", function(){ obj.getInfoBulle().cache(char.id); });
        let tt = document.createElement("div");
        tt.className = "custom-tooltip";
        tt.id = "tooltip" + char.id;
        tt.addEventListener("mouseover", function(){ obj.getInfoBulle().affiche(char.id); });
        tt.addEventListener("mouseout", function(){ obj.getInfoBulle().cache(char.id); });
        tt.innerHTML = char.listeAttribute() + "";
        //______ajout des éléments
        col.appendChild(fig);
        let doc = document.getElementById("tooltip_conteneur");
        doc.appendChild(area);
        doc.appendChild(tt);
        doc.appendChild(arrow);
        return  col;
    }

    majPopInfo(actif, elim){
        document.getElementById("nbActif").innerHTML = actif;
        document.getElementById("nbElim").innerHTML = elim;
    }

    loadMenuPopDefaut(){
        let obj = this;
        this.appInstance.getBanniere().addMenuItem("sousmenuPop", function(){ obj.loadPopulation("Vannilla"); }, "Vanilla ", "defaultPop");
    }
}

export default PopulationPanel;