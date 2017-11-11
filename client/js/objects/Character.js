import * as _ from '../libs/underscore.js'

const REQUIRED_ATTRIBUTES = ['gender', 'shape', 'eyeColor', 'hairColor', 'hairShape',
                            'facialHair', 'skinColor', 'glasses', 'hat']; 

export default class Character{
    constructor(name, attributeCollection){
        this.isUp = true; //le personnage n'est pas éliminé pour la partie en cours
        this.name = name; //string
        this.gender = null; //homme/femme
        this.shape = null; //visage rond/oeuf/fin/carré
        this.eyeColor = null; //bleu/vert/marron
        this.hairColor = null; //blond/brun/noir/blanc/roux
        this.hairShape = null; //chauve/long/court
        this.facialHair = null; //barbe/moustache/barbe+moustache/rien
        this.skinColor = null; //blanc/noir
        this.glasses = null; //lunettes/rien
        this.hat = null; //chapeau/rien
        initAttributesWith(attributeCollection);
    }
    
    initAttributesWith(attrs){
        if(!checkAttributesList(attrs))
            return;
        
    }
    
    checkAttributesList(attrs){
        
    }
    
    headShape(){
        return this.attributes.headShape;
    }
    
    skinColor(){
        return this.attributes.skinColor;
    }
    
    hairColor(){
        return this.attributes.hairColor;
    }
}