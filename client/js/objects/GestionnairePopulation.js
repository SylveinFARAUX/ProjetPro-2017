import Application from "./Application";

let vanilla =
    {
        "characters": [
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "Couleur Cheveux", "value" : "Blond"},
                    {"key" : "Coupe de Cheveux", "value" : "Chauve"},
                    {"key" : "Attache de Cheveux", "value" : "Détaché"}
                ]
            },
            {
                "nom" : "Joseph",
                "img" : "./assets/charimg/joseph.png",
                "attributs" : [
                    {"key" : "Couleur Cheveux", "value" : "Brun"},
                    {"key" : "Coupe de Cheveux", "value" : "Court"},
                    {"key" : "Attache de Cheveux", "value" : "Nattes"}
                ]
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : []
            }
        ]
    };

class GestionnairePopulation {

    /**
     *
     * @param {!Application} appInstance L'instance d'application commune aux panels
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
    constructor(appInstance) {
        if (!(appInstance instanceof Application)) {
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        this.clientChars = [];
        this.clientPops = undefined;
        this.rehinit();
        let obj = this;
        document.getElementById("pop_creator_ret").addEventListener("click", function(){obj.appInstance.getGestionnairePage().showPage("app", "inherit");});
        document.getElementById("pop_creator_save").addEventListener("click", function(){obj.save();});
    }

    getVannilla(){
        return vanilla;
    }

    getClientPop(idPopClient){
        return this.clientPops[idPopClient];
    }

    getClientChars(){
        return this.clientChars;
    }

    loadCharacters(){
        let chars = localStorage.getItem('characters');
        if(chars !== null){
            this.clientChars = JSON.parse(chars);
            this.appInstance.getPopulationPanel().loadPopCreator();
            alert(this.clientChars.length + " personnages ont été chargés.");
        }else{
            alert("Aucun personnage n'a été trouvé sur cet ordinateur.");
        }
    }

    loadPopulations(){
        let popCount = localStorage.getItem('popCount');
        let pops;
        this.clientPops = [];
        for(let i = 0; i < popCount; i++){
            pops = localStorage.getItem('population' + i);
            this.clientPops.push(JSON.parse(pops));
        }
        if(popCount == 0 || popCount === null){
            alert("Aucune population n'a été trouvée sur cet ordinateur.");
        }else{
            this.clearMenuPop();
            this.loadMenuPop();
            alert(popCount + " populations ont été chargés.");
        }
    }

    clearMenuPop(){
        let li = document.getElementsByClassName("clientPop");
        while(li.length != 0) {
            document.getElementById("sousmenuPop").removeChild(li[0]);
        }
    }

    loadMenuPop(){
        let obj = this.appInstance.getPopulationPanel();
        for(let i = 0; i < this.clientPops.length; i++){
            this.appInstance.getBanniere().addMenuItem("sousmenuPop", function(){ obj.loadPopulation("ClientPop", i); }, "Ma Population " + i, "clientPop")
        }
    }

    selectChar(idChar){
        let idx = this.selected.indexOf(idChar);
        if(idx < 0)
            this.select(idChar);
        else
            this.unselect(idChar, idx);
    }

    select(idChar){
        if(this.selected.length === 24)
            return;
        this.selected.push(idChar);
        document.getElementById("charfigure" + idChar).style.borderColor = "#df4540";
        document.getElementById("charstatus" + idChar).innerText = "Sélectionné";
        let char = Object();
        char.img = document.getElementById("charimg" + idChar).src;
        char.nom = document.getElementById("charName" + idChar).innerText;
        char.attributs = [];
        let attr;
        let attrKeys = document.getElementById("tooltip" + idChar).getElementsByClassName("attr_id");
        let attrVals = document.getElementById("tooltip" + idChar).getElementsByClassName("attr_value");
        for(let i = 0; i < attrKeys.length; i++){
            attr = {
                key: attrKeys[i].innerHTML,
                value: attrVals[i].innerHTML
            };
            char.attributs.push(attr);
        }
        this.creaPop.push(char);
        this.majCompteur();
    }

    unselect(idChar, idx){
        document.getElementById("charfigure" + idChar).style.borderColor = "grey";
        document.getElementById("charstatus" + idChar).innerText = "";
        this.selected.splice(idx, 1);
        this.creaPop.splice(idx, 1);
        this.majCompteur();
    }

    majCompteur(){
        let cpt = (24 - this.creaPop.length);
        if(cpt == 0)
            document.getElementById("pop_creator_save").style.display = "inherit";
        else
            document.getElementById("pop_creator_save").style.display = "none";
        document.getElementById("nbPerManquant").innerText = cpt + "";
    }

    save(){
        let count = localStorage.getItem('popCount');
        if(count == null)
            count = 0;
        let json = JSON.stringify(this.creaPop);
        localStorage.setItem('population' + count, json);
        count++;
        localStorage.setItem('popCount', count);
        alert("Population bien sauvegardés.\nTotal : " + count);
        this.rehinit();
    }

    rehinit(){
        this.selected = [];
        this.creaPop = [];
        document.getElementById("pop_creator_save").style.display = "none";
        let status = document.getElementById("pop_creator_content").getElementsByClassName("charstatus");
        let fig = document.getElementById("pop_creator_content").getElementsByClassName("charfigure");
        for(let i = 0; i < status.length; i++){
            status[i].innerText = "";
            fig[i].style.borderColor = "grey";
        }
    }
}
export default GestionnairePopulation;