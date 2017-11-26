import * as _ from '../libs/underscore.js'

export default class Attribut{
    constructor(nom, valeur, phrase){
        this._nom = nom; //nom de l'attribut (cheveux, lunettes, yeux, ...)
        this._valeur = valeur; //(bleu, vert, avec, sans, ...)
        this._phrase = phrase; // phrase d'assertion (la question quoi)
    }
    
    get nom(){
        return this._nom;
    }
    
    set nom(nom){
        this._nom = nom;
    }
    
    get valeur(){
        return this._valeur;
    }
    
    set valeur(valeur){
        this._valeur = valeur;
    }
    
    get phrase(){
        return this._phrase;
    }
    
    set phrase(phrase){
        this._phrase = phrase;
    }
}