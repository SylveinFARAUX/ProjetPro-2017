import Application from "./Application";

class GestionnairePage {
    constructor(appInstance) {
        if (!(appInstance instanceof Application)) {
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        this.actif = undefined;
        this.sizePages();
        this.showPage("app");
    }

    sizePages(){
        //hauteur des pages de l'applciation (taille total - taille bannière)
        let contentH = document.getElementById("maindiv").clientHeight - document.getElementById("banniere").offsetHeight;

        document.getElementById("app").style.height = contentH + "px";
        document.getElementById("char_creator").style.height = contentH + "px";
    }

    showPage(pageId){
        let page = document.getElementById(pageId);
        if(!(page instanceof Element)) return;
        if(this.actif !== undefined)
            document.getElementById(this.actif).style.display = "none";
        this.actif = pageId;
        page.style.dysplay = "inherit";
    }

}

export default GestionnairePage;