import Application from "./Application";

class GestionnairePage {
    constructor(appInstance) {
        if (!(appInstance instanceof Application)) {
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        this.actif = undefined;
        this.resizePages();
        this.showPage("app", "inherit");
    }

    resizePages(){
        //hauteur des pages de l'applciation (taille total - taille bannière)
        let contentH = document.getElementById("maindiv").clientHeight - document.getElementById("banniere").offsetHeight;

        document.getElementById("app").style.height = contentH + "px";
        document.getElementById("char_creator").style.height = contentH + "px";
    }

    showPage(pageId, display = "flex"){
        let page = document.getElementById(pageId);
        if(!(page instanceof Element)){
            console.log("Gestionnaire de Page -> showPage :\n\tPage inconnue : " + pageId + "\n\tNothing to display");
            return;
        }
        if(this.actif !== undefined)
            document.getElementById(this.actif).style.display = "none";
        this.actif = pageId;
        page.style.display = display;
    }

    showInfo(infoDivId){
        let infoDiv = document.getElementById(infoDivId);
        if(!(infoDiv instanceof Element)){
            console.log("Gestionnaire de Page -> showInfo :\n\tDivision d'information inconnue : " + infoDivId + "\n\tNothing to display");
            return;
        }
    }

    showLoader(loadId){
        switch(loadId){
            default :
                console.log("Gestionnaire de Page -> showLoader :\n\tLoader inconnu : " + loadId + "\n\tNothing to display");
                break;
        }
    }

}
export default GestionnairePage;