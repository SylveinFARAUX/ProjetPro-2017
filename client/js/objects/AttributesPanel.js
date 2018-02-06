import * as AttributesCollection from "./AttributesCollection";
import Attribute from './Common';

export default class AttributesPanel {
    constructor(element){
        this.attributsCollection = AttributesCollection.singleton;
        if(element === undefined) {
            throw new Error("@AttributesPanel() -> Erreur : element doit être définis");
        }
        this.element = element;
        this.buttons = [];
        this.attributsCollection.getAttributeValue();
    }

    addButton(attribute){

    }
}
