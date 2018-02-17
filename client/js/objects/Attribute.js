/**
 * Représente un attribut d'un personnage avec une valeur.
 * Chaque instance d'Attribute ne contient qu'une seule valeur.
 */
class Attribute{
    /**
     * Constructeur
     * @param {!AttributeJSON} jsonDesc Un objet JSON décrivant l'attribut
     * @param {!string} attribute Le nom de l'attribut (ex : 'cheveux')
     * @param {!string} value La valeur de l'attribut (ex : 'chauve')
     * @throws {Error} Lance une erreur si jsonDesc n'est pas un objet ou si attribute ou value ne sont pas une chaîne
     */
    constructor(jsonDesc, attribute, value){
        if(typeof jsonDesc !== "object"){
            throw new Error("@Attribute.constructor() : L'argument jsonDesc doit être un objet JSON");
        }
        if(typeof attribute !== "string"){
            throw new Error("@Attribute.constructor() : L'argument attribute doit être une chaîne de caractère");
        }
        if(typeof value !== "string"){
            throw new Error("@Attribute.constructor() : L'argument value doit être une chaîne de caractère");
        }
        /**
         * Le nom de l'attribut
         * @member {string}
         */
        this.attributeKey = attribute;
        /**
         * La valeur de l'attribut
         * @member {string}
         */
        this.value = value;
        /**
         * Le test de la proposition au format court
         * @member {string}
         */
        this.short = jsonDesc["court"];
        /**
         * Le test de la proposition au format long
         * @member {string}
         */
        this.long = jsonDesc["long"];
    }

    /**
     * Retourne la valeur de l'attribut (ex : 'chauve')
     * @returns {string}
     */
    getValue(){
        return this.value;
    }

    /**
     * Retourne la proposition de l'attribut au format court
     * @returns {string}
     */
    getShortText(){
        return this.short;
    }

    /**
     * Retourne la proposition de l'attribut au format long
     * @returns {string}
     */
    getLongText(){
        return this.long;
    }

    /**
     * Retourne le nom de l'attribut
     * @returns {string}
     */
    getAttributeKey(){
        return this.attributeKey;
    }

    /**
     * Affiche l'attribut dans la console
     */
    prettyPrint(){
        console.log(`Attribut ${this.getAttributeKey()} -> ${this.getValue()} :`);
        console.log(`\ttexte long  : "${this.getLongText()}"\n\ttexte court : "${this.getShortText()}"`);
    }
}

export default Attribute;