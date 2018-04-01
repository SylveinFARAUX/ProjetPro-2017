import Application from "./Application";

class Banniere {
    constructor(appInstance) {
        if (!(appInstance instanceof Application)) {
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        this.load();
    }

    load(){
        this.loadPopulations();
        this.loadCharacters();
        this.loadStrategies();
        this.loadJeu();
    }

    loadPopulations(){
        this.addMenuItem("sousmenuPop", (evt)=>{ this.appInstance.getGestionnairePage().showPage("pop_creator", "inherit"); }, "Créer une population");
        this.addMenuItem("sousmenuPop", (evt)=>{ this.appInstance.getGestionnairePage().showLoader("pop_loader"); }, "Charger mes populations");
    }

    loadCharacters(){
        this.addMenuItem("sousmenuChar", (evt)=>{ this.appInstance.getGestionnairePage().showPage("char_creator"); }, "Créer un personnage");
        this.addMenuItem("sousmenuChar", (evt)=>{ this.appInstance.getGestionnairePage().showLoader("char_loader"); }, "Charger mes personnages");
    }

    loadStrategies(){
        this.addMenuItem("sousmenuStrat", (evt)=>{ this.appInstance.getGestionnairePage().showPage("strat_test"); }, "Tester ma stratégie");
        this.addMenuItem("sousmenuStrat", (evt)=>{ this.appInstance.getGestionnairePage().showLoader("strat_saver"); }, "Sauvegarder ma sratégie");
        this.addMenuItem("sousmenuStrat", (evt)=>{ this.appInstance.getGestionnairePage().showLoader("strat_loader"); }, "Charger mes sratégies");
    }

    loadJeu(){
        this.addMenuItem("sousmenuJeu", (evt)=>{ this.appInstance.getGestionnairePage().showInfo("info_regle"); }, "Règles du jeu");
        this.addMenuItem("sousmenuJeu", (evt)=>{ this.appInstance.getGestionnairePage().showInfo("info_tuto"); }, "Tuto-Stratégie");
        this.addMenuItem("sousmenuJeu", (evt)=>{ this.appInstance.getGestionnairePage().showInfo("info_creator"); }, "Créateurs");
    }

    addMenuItem(idSousMenu, evt, txt, classItem = undefined){
        let menuPop = document.getElementById(idSousMenu);
        if(!(menuPop instanceof Element)) return;
        let spa = document.createElement("span");
        spa.innerText = txt;
        let li = document.createElement("li");
        li.addEventListener("click", evt);
        li.appendChild(spa);
        if(classItem !== undefined) li.className = classItem;
        menuPop.appendChild(li);
    }
}

export default Banniere;