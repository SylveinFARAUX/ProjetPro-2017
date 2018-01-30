import * as _ from '../libs/underscore.js'

export default class Character{
    constructor(nom, attributs, img){
        this._nom = undefined;
        this._attributs = undefined;
        this._img = undefined;
        this.nom = nom;
        this.attributs = attributs;
        this.img = img;
    }
    
    get img(){
        return this._img;
    }
    
    set img(img){
        console.log("setting img to "+img);
        this._img = img;
    }
    
    get nom(){
        return this._nom;
    }
    
    set nom(nom){
        this._nom = nom;
    }
    
    get attributs(){
        return this._attributs;
    }
    
    set attributs(attributs){
        this._attributs = attributs;
    }
}