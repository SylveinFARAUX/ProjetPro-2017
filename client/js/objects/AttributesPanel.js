import * as AttributesCollection from "./AttributesCollection";
import * as Common from './Common';
import Attribute from './Attribute';
import AttributeButton from './AttributeButton';

export default class AttributesPanel {
    constructor(element){
        this.attributesCollection = AttributesCollection.singleton;
        if(element === undefined) {
            throw new Error("@AttributesPanel() -> Erreur : element doit être définis");
        }
        this.element = element;

        //création des boutons
        this.buttons = [];
        let map = this.attributesCollection.getAttributesValuesKeysMap();
        map.forEach(attribute => {
           this.buttons[attribute] = [];
           map[attribute].forEach(value => {
               this.buttons[attribute][value] = undefined;
               try{
                   this.addButton(this.attributesCollection.getAttributeInstance(attribute, value));
               }catch(e){
                   console.error("@AttributesPanel.constructor() : erreur lors de l'ajout du boutons ("+attribute+","+value+") : ");
                   console.error(e);
               }
           }) ;
        });
    }

    addButton(attribute){
        if(!(attribute instanceof Attribute)){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        this.buttons[attribute.getAttributeKey()][attribute.getValue()] = new AttributeButton(attribute);
    }

    hideButton(attribute){
        if(!(attribute instanceof Attribute)){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        this.buttons[attribute.getAttributeKey()][attribute.getValue()].hide();
    }

    showButton(attribute){
        if(!(attribute instanceof Attribute)){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        this.buttons[attribute.getAttributeKey()][attribute.getValue()].show();
    }
}
