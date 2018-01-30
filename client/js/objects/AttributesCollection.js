import * as _ from '../libs/underscore.js'
import Attribut from './Attribut';
import attributsJSON from './attributs';

export default class AttributesCollection{
    constructor(){
        this.hydrate();
    }
    
    hydrate(){
        this.attributs = attributsJSON.attributs;
        console.log("@AttributesCollection.hydrate() -> Debug : liste des attributs : "+this.getListeAttributs());
    }
    
    getListeAttributs(){
        return _.allKeys(this.attributs);
    }
}