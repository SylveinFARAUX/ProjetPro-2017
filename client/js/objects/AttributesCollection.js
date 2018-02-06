import Attribute from './Attribute';
import attributsJSON from './attributs';

class AttributesCollection{
    constructor(){
        this.attributs = attributsJSON["attributs"];
        this.toString();
        console.log("hey !");
    }
    
    getAttributesKeys(){
        return _.allKeys(this.attributs);
    }

    getValuesKeys(attribute){
        if(this.checkAttributeExists(attribute)){
            return _.allKeys(this.attributs[attribute]);
        }else{
            return undefined;
        }
    }

    getAttributeValue(attribute, value){
        if(this.checkValueExists()){
            return this.attributs[attribute][value];
        }else{
            return undefined;
        }
    }

    createAttributeInstance(attribute, value){
        let jsonAttribute = this.getAttributeValue(attribute, value);
        if(jsonAttribute === undefined){
            return new Attribute(jsonAttribute);
        }
        return undefined;
    }

    checkAttributeExists(attribute){
        return typeof attribute === "string" && this.getAttributesKeys().includes(attribute);
    }

    checkValueExists(attribute, value){
        if(this.checkAttributeExists(attribute)){
            return this.getValuesKeys().includes(value);
        }else{
            return false;
        }
    }

    getAttributesValuesKeysMap(){
        //FIXME retourne une map vide
        let map = [];
        let attributeKeys = this.getAttributesKeys();
        if(attributeKeys !== undefined){
            attributeKeys.forEach( key => {
                map[key] = this.getValuesKeys(key);
            });
        }
        return map;
    }

    toString(){
        let map = this.getAttributesValuesKeysMap();
        if(map.length < 1){
            console.log("Map des attributs vide");
        }else{
            map.forEach(attribute => {
                console.log(`Valeurs pour l'attribut '${attribute}' :`);
                map[attribute].forEach(value => {
                    console.log(`\t${value}`) ;
                });
            });
        }
    }
}

export const singleton = new AttributesCollection();