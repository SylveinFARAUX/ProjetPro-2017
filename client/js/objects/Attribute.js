export default class Attribute{
    constructor(jsonDesc, attribute, value){
        if(typeof jsonDesc !== "object"){
            throw new Error("@Attribute.constructor() : L'attribut jsonDesc doit être un objet JSON");
        }
        if(typeof name !== "string"){
            throw new Error("@Attribute.constructor() : L'attribut name doit être une chaîne de caractère");
        }
        this.attributeKey = attribute;
        this.name = value;
        this.short = jsonDesc["court"];
        this.long = jsonDesc["long"];
    }

    getValue(){
        return this.name;
    }

    getShortText(){
        return this.short;
    }

    getLongText(){
        return this.long;
    }

    getAttributeKey(){
        return this.attributeKey;
    }

    prettyPrint(){
        console.log(`Attribut ${this.getAttributeKey()} -> ${this.getValue()} :`);
        console.log(`\ttexte long  : "${this.getLongText()}"\n\ttexte court : "${this.getShortText()}"`);
    }
}