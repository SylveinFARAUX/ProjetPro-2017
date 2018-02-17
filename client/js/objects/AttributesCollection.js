import Attribute from './Attribute';
import attributsJSON from './attributs';

/**
 * @typedef {Object} AttributeJSON
 * @property {string} long Une question décrivant la valeur l'attribut concerné (utilisée avec les boutons)
 * @property {string} court La même question au format plus court (utilisée pour l'arbre de stratégie)
 */

/**
 * Gère une collection d'Attribute.
 * Cette classe est implémentée en tant que singleton accessible
 * avec AttributesCollection.singleton, en supposant avoir importé
 * la classe sous ce même nom
 */
class AttributesCollection{

    /**
     * Stocke le JSON dans 'attributs', construits un tableau 2D
     * destiné à stocker chaque instance d'Attribute de sorte à
     * ne pas dupliquer les instances inutilement.
     */
    constructor(){
        /**
         * Le JSON contenant les attributs et leurs valeurs
         * @member {Object}
         */
        this.attributs = attributsJSON["attributs"];
        /**
         * Un tableau 2D servant à contenir chaque instances d'Attribute.
         * Chaque Attribute n'est effectivement instancié qu'après l'appel de la
         * méthode getAttributeInstance().
         * @member {Attribute[][]}
         */
        this.attributesMap = this.getAttributesValuesKeysMap();
        this.attributesMap.forEach(attribute => {
            this.attributesMap[attribute].forEach(value => {
                this.attributesMap[attribute][value] = undefined;
            });
        });
        this.prettyPrint();
    }

    /**
     * Retourne la liste des attributs contenu dans la collection.
     * @returns {string[]}
     */
    getAttributesKeys(){
        return _.allKeys(this.attributs);
    }

    /**
     * Retourne la liste des valeurs pour un attribut, ou undefined s'il n'existe pas.
     * @param attribute l'attribut
     * @returns {string[]}
     */
    getValuesKeys(attribute){
        if(this.checkAttributeExists(attribute)){
            return _.allKeys(this.attributs[attribute]);
        }else{
            return undefined;
        }
    }

    /**
     * Retourne l'objet JSON représentant un Attribute correspondant à l'attribut
     * de valeurs donnés, ou undefined si l'un ou l'autre n'existe pas.
     * @param attribute l'attribut
     * @param value la valeur
     * @returns {AttributeJSON|undefined}
     */
    getAttributeJSON(attribute, value){
        if(this.checkValueExists(attribute, value)){
            return this.attributs[attribute][value];
        }else{
            return undefined;
        }
    }

    /**
     * Retourne l'instance d'Attribute pour un attribut et une valeur données.
     * @param attribute l'attribut
     * @param value la valeur
     * @returns {Attribute|undefined}
     */
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

    /**
     * Vérifie que l'attribut existe dans la collection.
     * @param attribute l'attribut
     * @returns {boolean} true si l'attribut existe, false sinon.
     */
    checkAttributeExists(attribute){
        return typeof attribute === "string" && this.getAttributesKeys().includes(attribute);
    }

    /**
     * Vérifie que la valeur existe pour l'attribut donné
     * @param attribute l'attribut
     * @param value la valeur
     * @returns {boolean} true si la valeur existe pour l'attribut donné, false sinon.
     */
    checkValueExists(attribute, value){
        if(this.checkAttributeExists(attribute)){
            return this.getValuesKeys(attribute).includes(value);
        }else{
            return false;
        }
    }

    /**
     * Retourne un tableau 2D contenant les listes des valeurs pour chaque attributs.
     * @example
     * //Supposons que le JSON contient un attribut 'yeux' ayant deux valeurs, 'bleu' et 'vert'
     * let map = singleton.getAttributesValuesKeysMap();
     * console.log(map['yeux']); //{'bleu','vert'}
     * @returns {string[][]}
     */
    getAttributesValuesKeysMap(){
        let map = this.getAttributesKeys();
        if(map !== undefined){
            map.forEach(key => {
                map[key] = this.getValuesKeys(key);
            });
        }
        return map;
    }

    /**
     * Affiche le contenu de la collection dans la console
     */
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

/**
 * Singleton de la collection instancier au démarrage de l'application.
 * @type {AttributesCollection}
 */
export const singleton = new AttributesCollection();