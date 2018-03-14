class Character{
    constructor(json, id){
        this.id = id;
        this.nom = json.nom;
        this.img = json.img;
        this.actived = true;
        this.attributs = [];
        for(let i = 0; i < json.attributs.length; i++){
            //this.attributs.push(Main.appInstance.getAttributeInstance(json.attributs[i].key, json.attributs[i].value));
        }
    }


    getImg(){
        return this.img;
    }

    getNom(){
        return this.nom;
    }

    getAttributs(){
        return this.attributs;
    }

    active(){
        if(this.actived)return;
        document.getElementById("charimg" + this.id).style.filter = "";
        document.getElementById("charfigure" + this.id).style.borderColor = "grey";
        document.getElementById("charstatus" + this.id).innerHTML = "Suspect";
        this.actived = true;
    }

    unactive(reason){
        if(!this.actived)return;
        document.getElementById("charimg" + this.id).style.filter = "grayscale(100%)";
        document.getElementById("charfigure" + this.id).style.borderColor = "#A61011";
        document.getElementById("charstatus" + this.id).innerHTML = "Eliminé : " + reason;
        this.actived = false;
    }

    listeAttribute(){
        let res = "";
        for(let i = 0; i < this.attributs.length; i++){
            res += this.attributs[i].attributeKey + ":" + this.attributs[i].attributeValue + "</br>";
        }
    }

    check(tabAttributs){
        for(let i = 0; i < tabAttributs.length; i++) {
            if (this.attributs.find(tabAttributs[i]) == undefined) {
                this.unactive(tabAttributs[i].court);
                return false;
            }
        }
        return true;
    }

}

export default Character;