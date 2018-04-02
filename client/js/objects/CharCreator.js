import Application from "./Application";
import * as AttributesCollection from "./AttributesCollection";

class CharCreator {
    constructor(appInstance) {
        if (!(appInstance instanceof Application)) {
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        this.characters = [];
        this.img = "test";
        this.load();
    }

    load(){
        let conteneur = document.getElementById("purpose_attributs_elem");
        conteneur.innerHTML += "";
        let attrsKey = AttributesCollection.singleton.getAttributesKeys();
        let div, ul, p, attrsVal, li, lip;
        //créations des attributs
        for(let i = 0; i < attrsKey.length; i++){
            //création du conteneur de l'attributs i
            div = document.createElement("div");
            div.className = "attr_key";
            div.id = attrsKey[i];
            div.addEventListener("click", (evt)=> {this.afficher_attr_key(attrsKey[i] + "")});
            p = document.createElement("p");
            p.id = "attr_key_label_" + attrsKey[i];
            p.innerText = attrsKey[i];
            ul = document.createElement("ul");
            ul.className = "attr_value";
            ul.id = "attr_key_" + attrsKey[i];
            //ajout des valeures de l'attributs i
            attrsVal = AttributesCollection.singleton.getValuesKeys(attrsKey[i]);
            for(let j = 0; j < attrsVal.length; j++){
                let attrid = attrsKey[i] + "_value_" + attrsVal[j];
                li = document.createElement("li");
                lip = document.createElement("p");
                lip.id = attrid;
                lip.innerText = attrsVal[j];
                lip.addEventListener("click", (evt)=> {this.selectAttribut(attrid, attrsKey[i])});
                li.appendChild(lip);
                ul.appendChild(li);
            }

            div.appendChild(p);
            div.appendChild(ul);
            conteneur.appendChild(div);
        }
        //ajout des boutons
        document.getElementById("char_creator_ret").addEventListener("click", (evt)=>{this.retourStrat();});
        document.getElementById("char_creator_save").addEventListener("click", (evt)=>{this.save_char();});
        document.getElementById("char_creator_save_all").addEventListener("click", (evt)=>{this.save_all();});
        document.getElementById("char_creator_save_all").style.display = "none";
        this.loadImage();
    }

    loadImage(){
        document.getElementById("dragg_img").addEventListener("dragover", function(e){
            e.preventDefault();
        });
        let instance = this;
        document.getElementById("dragg_img").addEventListener("drop", function(e){
            e.preventDefault();
            instance.img = e.dataTransfer.files[0];
            document.getElementById("dragg_img").src = instance.img;
        });
    }

    afficher_attr_key(id){
        let vals = document.getElementById("attr_key_" + id);
        if(vals.style.display == "inherit")
            vals.style.display = "none";
        else
            vals.style.display = "inherit";
    }

    selectAttribut(id, parent){
        //on ajoute l'attributs sélectionné
        let conteneur = document.getElementById("added_attributs");
        let li = document.createElement("li");
        li.id = "added_attr_" + id;
        let p = document.createElement("p");
        let spak = document.createElement("span");
        spak.className = "char_creator_key";
        spak.innerText = document.getElementById("attr_key_label_" + parent).innerText;
        let spav = document.createElement("span");
        spav.className = "char_creator_value";
        spav.innerText = document.getElementById(id).innerText;
        let spam = document.createElement("span");
        spam.innerText = " : ";
        p.appendChild(spak);
        p.appendChild(spam);
        p.appendChild(spav);
        p.addEventListener("click", (evt)=> {this.removeSelectedAttribut("added_attr_" + id, parent)});
        li.appendChild(p);
        conteneur.appendChild(li);
        //on chache la proposition
        document.getElementById(parent).style.display = "none";
    }

    removeSelectedAttribut(id, parent){
        document.getElementById("added_attributs").removeChild(document.getElementById(id));
        document.getElementById(parent).style.display = "inherit";
    }

    retourStrat(){
        if(this.quit()){
            this.rehinit();
            this.appInstance.getGestionnairePage().showPage("app", "inherit");
        }
    }

    rehinit(){
        document.getElementById("nom_perso_creat").value = "";
        document.getElementById("added_attributs").innerHTML = "";
        let attrs = document.getElementById("purpose_attributs_elem").childNodes;
        for(let i = 1; i < attrs.length; i++){
            attrs[i].style.display = "inherit";
        }
        document.getElementById("crea_perso_nbChar").innerText = this.characters.length + "";
        if(this.characters.length > 0)
            document.getElementById("char_creator_save_all").style.display = "inline-block";
        else
            document.getElementById("char_creator_save_all").style.display = "none";
        this.img = undefined;
        document.getElementById("dragg_img").src = "./assets/dragg.png";
    }

    quit(){
        if(document.getElementById("added_attributs").childNodes.length > 0)
            return confirm("Est-vous sûr de vouloir quitter ?\nLe personnage ne seras pas sauvegardé");
        return true;
    }

    save_char(){
        if (!this.check())return;

        let char = Object();
        char.img = "./assets/dragg.png";
        char.nom = document.getElementById("nom_perso_creat").value;
        char.attributs = [];
        let attr;
        let attrKeys = document.getElementsByClassName("char_creator_key");
        let attrVals = document.getElementsByClassName("char_creator_value");
        for(let i = 0; i < attrKeys.length; i++){
            attr = new Object();
            attr.key = attrKeys[i].innerText;
            attr.value = attrVals[i].innerText;
            char.attributs.push(attr);
        }
        this.characters.push(char);
        this.rehinit();
    }

    check(){
        let nom = document.getElementById("nom_perso_creat").value;
        if(document.getElementById("added_attributs").childNodes.length <= 0){
            alert("Vous n'avez saisie aucun attributs\nRien à sauvegarder");
            return false;
        }
        if(nom === undefined || nom === ""){
            alert("Vous n'avez pas saisie le nom\nSauvegarde annulée");
            return false;
        }
        if(this.img === undefined){
            alert("Vous n'avez pas déposé d'image\nSauvegarde annulée");
            return false;
        }
        return true;
    }

    save_all(){
        let count = this.characters.length, ansJson;
        if(count === 0)
            return;
        let ansChar = localStorage.getItem('characters');
        if(ansChar !== null && ansChar !== "" && ansChar !== undefined){
            ansJson = JSON.parse(ansChar);
            this.characters = this.characters.concat(ansJson);
        }
        let json = JSON.stringify(this.characters);
        localStorage.clear();
        localStorage.setItem('characters', json);
        alert("Personnages bien sauvegardés.\nAjoutés : " + count + "\nTotal : " + this.characters.length);
        this.characters = [];
        this.rehinit();

    }

}

export default CharCreator;