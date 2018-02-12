import Attribute from './Attribute';
import attributsJSON from './attributs';

class AttributesCollection{
    constructor(){
        this.attributs = attributsJSON["attributs"];
        this.attributesMap = this.getAttributesValuesKeysMap();
        this.attributesMap.forEach(attribute => {
            this.attributesMap[attribute].forEach(value => {
                this.attributesMap[attribute][value] = undefined;
            });
        });
        this.prettyPrint();
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

    getAttributeJSON(attribute, value){
        if(this.checkValueExists(attribute, value)){
            return this.attributs[attribute][value];
        }else{
            return undefined;
        }
    }

    getAttributeInstance(attribute, value){
        let jsonAttribute = this.getAttributeJSON(attribute, value);
        if(jsonAttribute !== undefined){
            if(this.attributesMap[attribute][value] === undefined) {
                let attr = new Attribute(jsonAttribute, attribute, value);
                this.attributesMap[attribute][value] = attr;
                return attr;
            }else{
                return this.attributesMap[attribute][value];
            }
        }
        return undefined;
    }

    checkAttributeExists(attribute){
        return typeof attribute === "string" && this.getAttributesKeys().includes(attribute);
    }

    checkValueExists(attribute, value){
        if(this.checkAttributeExists(attribute)){
            return this.getValuesKeys(attribute).includes(value);
        }else{
            return false;
        }
    }

    getAttributesValuesKeysMap(){
        let map = this.getAttributesKeys();
        if(map !== undefined){
            map.forEach(key => {
                map[key] = this.getValuesKeys(key);
            });
        }
        return map;
    }

    prettyPrint(){
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