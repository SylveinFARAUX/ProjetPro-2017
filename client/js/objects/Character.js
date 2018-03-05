class Character{
    constructor(nom, attributs, img, id){
        this.nom = nom;
        this.attributs = attributs;
        this.img = img;
		this.active = true;
		this.id = id;
    }
	
	constructor(json, id){
		this.id = id;
        this.nom = json.nom;
        this.img = json.img;
		this.active = true;
		this.attributs = new Array();
		for(var i = 0; i < json.attributs.length; i++){
			this.attributs.push(getAttributeInstance(json.attributs[i].key, json.attributs[i].value));
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
		if(this.active)return;
		Document.getElementById("charimg" + this.id).style.filter = "";
		Document.getElementById("charstatus" + this.id).innerHTML = "Suspect";
		this.active = true;
	}
	
	unactive(reason){
		if(!this.active)return;
		Document.getElementById("charimg" + this.id).style.filter = "grayscale(100%)";
		Document.getElementById("charstatus" + this.id).innerHTML = "Eliminé : " + reason;
		this.active = false;
	}

}

export default Character;