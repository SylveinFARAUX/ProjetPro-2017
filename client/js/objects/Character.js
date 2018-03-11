class Character{
    constructor(json, id){
        this.id = id;
        this.nom = json.nom;
        this.img = json.img;
        this.actived = true;
        this.attributs = [];
        for(let i = 0; i < json.attributs.length; i++){
            //this.attributs.push(getAttributeInstance(json.attributs[i].key, json.attributs[i].value));
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
        let img = document.getElementById("charimg" + this.id);
        img.style.filter = "";
        img.style.borderColor = "grey";
        document.getElementById("charstatus" + this.id).innerHTML = "Suspect";
        this.actived = true;
    }

    unactive(reason){
        if(!this.actived)return;
        let img = document.getElementById("charimg" + this.id);
        img.style.filter = "grayscale(100%)";
        console.log("ici");
        img.style.borderColor = "#A61011";
        document.getElementById("charstatus" + this.id).innerHTML = "Eliminé : " + reason;
        this.actived = false;
    }

    listeAttribute(){
        let res = "";
        for(let i = 0; i < this.attributs.length; i++){
            res += this.attributs[i].attributeKey + ":" + this.attributs[i].attributeValue + "</br>";
        }
    }

}

export default Character;