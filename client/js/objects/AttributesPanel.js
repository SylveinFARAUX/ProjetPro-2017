import AttributesCollection from "./AttributesCollection";
import * as Common from './Common';

export default class AttributesPanel {
    constructor(element){
        this.attributsCollection = new AttributesCollection();
        if(element === undefined) {
            throw new Error("@AttributesPanel() -> Erreur : element doit être définis");
        }
        this.element = element;

    }
}
