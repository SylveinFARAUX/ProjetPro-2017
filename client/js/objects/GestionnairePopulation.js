import Application from "./Application";
import PopulationPanel from "./PopulationPanel";

let vanilla =
    {
        "characters": [
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "chauve"},
                    {"key" : "yeux", "value" : "marron"},
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
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"},
                    {"key" : "personalité", "value" : "nazi"}
                ]
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
        this.clientChars = undefined;
        this.clientPops = undefined;
    }

    getVannilla(){
        return vanilla;
    }

    getClientPop(idPopClient){
        return this.clientPops[idPopClient];
    }

    loadCharacters(){
        let chars = localStorage.getItem('characters');
        if(chars !== null){
            this.clientChars = JSON.parse(chars);
            alert(this.clientChars.length + " personnages ont été chargés.");
        }else{
            alert("Aucun personnage n'a été trouvé sur cet ordinateur.");
        }
    }

    loadPopulations(){
        let pops = localStorage.getItem('populations');
        if(pops !== null){
            this.clientPops = JSON.parse(pops);
            alert(this.clientPops.length + " populations ont été chargés.");
            this.clearMenuPop();
            this.loadMenuPop();
        }else{
            alert("Aucune population n'a été trouvée sur cet ordinateur.");
        }
    }

    clearMenuPop(){
        li = document.getElementsByClassName("clientPop");
        for(let i = 0; i < li.length; i++) {
            document.removeChild(li[i]);
        }
    }

    loadMenuPop(){
        for(let i = 0; i < this.clientPops.length; i++){
            this.appInstance.getBanniere().addMenuItem(sousmenuPop, (evt)=>{ this.appInstance.getPopulationPanel().load("ClientPop", i); }, "Ma Population " + i)
        }
    }
}
export default GestionnairePopulation;