import Application from "./Application";

class GestionnairePage {
    constructor(appInstance) {
        if (!(appInstance instanceof Application)) {
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        this.actif = undefined;
        this.activeInfo = undefined;
        this.resizePages();
        this.resizeContenu();
        //cache les autres pages
        document.getElementById("char_creator").style.display = "none";
        document.getElementById("pop_creator").style.display = "none";
        this.showPage("app", "inherit");
    }

    resizePages(){
        //hauteur des pages de l'applciation (taille total - taille bannière)
        let contentH = document.getElementById("maindiv").clientHeight - document.getElementById("banniere").offsetHeight;

        document.getElementById("app").style.height = contentH + "px";
        document.getElementById("char_creator").style.height = contentH + "px";
        document.getElementById("pop_creator").style.height = contentH + "px";
    }

    showPage(pageId, display = "inherit"){
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
        if(this.activeInfo !== undefined)document.getElementById(this.activeInfo).style.display = "none";
        this.activeInfo = infoDivId;
        infoDiv.style.display = "inherit";
        if(this.activeInfo !== "app")
            this.showPage("app");
    }

    showLoader(loadId){
        switch(loadId){
            case "pop_loader" :
                this.appInstance.getGestionnairePopulation().loadPopulations();
                break;
            case "char_loader" :
                this.appInstance.getGestionnairePopulation().loadCharacters();
                break;
            default :
                console.log("Gestionnaire de Page -> showLoader :\n\tLoader inconnu : " + loadId + "\n\tNothing to display");
                break;
        }
    }

    resizeContenu(){
        let title = document.getElementsByClassName("title");
        let content = document.getElementsByClassName("content");
        let parent;
        if(title.length != content.length) {
            console.log("Dimmensionnement de l'application impossible :\nNombres de titre différent du nombre de conteneur.");
            return;
        }
        for(let i = 0; i < title.length; i++){
            parent = content[i].parentNode;
            content[i].style.height = parent.clientHeight - title[i].offsetHeight + "px";
        }
    }

}
export default GestionnairePage;
