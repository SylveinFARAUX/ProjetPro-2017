export default class Character{
    constructor(nom, attributs, img){
        this.nom = nom;
        this.attributs = attributs;
        this.img = img;
    }
    
    getImg(){
        return this.img;
    }
    
    setImg(img){
        this.img = img;
    }
    
    getNom(){
        return this.nom;
    }
    
    setNom(nom){
        this.nom = nom;
    }
    
    getAttributs(){
        return this.attributs;
    }
    
    setAttributs(attributs){
        this.attributs = attributs;
    }
}