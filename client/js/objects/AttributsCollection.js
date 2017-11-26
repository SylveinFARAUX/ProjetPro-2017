import * as _ from '../libs/underscore.js'
import Attribut from './Attribut';
import attributsJSON from './attributs';

export default class AttributCollection{
    constructor(){
        this._attributs = [];
        this.hydrate();
    }
    
    hydrate(){
        console.log(attributsJSON);
        this._attributs = attributsJSON.attributs;
    }
    
    getValeurs(attribut){
        if(typeof attribut === "string")
            return _.toArray(this._attributs[attribut].valeurs);
    }
    
    existsAttribut(attribut){
        if(typeof attribut === "string" && typeof attribut === "string")
            return this._attributs.hasOwnProperty(attribut);
        else
            return false;
    }
    
    existsValeur(attribut, valeur){
        if(this.existsAttribut(attribut) && typeof valeur === "string")
            return this.getValeurs(attribut).includes(valeur);
        else
            return false;
    }
    
    createAttribut(attribut, valeur){
        if(this.existsValeur(attribut,valeur)){
            let phrase = this._attributs[attribut].phrase;
            phrase += " "+valeur+" ?";
            return new Attribut(attribut,valeur,phrase);
        }
    }
}