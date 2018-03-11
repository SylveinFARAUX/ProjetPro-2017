import * as AttributesCollection from "./AttributesCollection";
import * as Common from './Common';
import Attribute from './Attribute';
import AttributeButton from './AttributeButton';
import Application from "./Application";

/**
 * Panel contenant les boutons des attributs
 */
class AttributesPanel {
    /**
     * Constructeur.
     * Instancie directement tout les boutons sans les cacher.
     * @param {!Application} appInstance L'instance d'application commune aux panels
     * @trhows {Error} Lance un erreur si element n'est pas une instance de HTMLElement
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
    constructor(appInstance){
        if(!(appInstance instanceof Application)){
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        /**
         * Singleton de la collection des attributs.
         * @member {AttributesCollection}
         */
        this.attributesCollection = AttributesCollection.singleton;
        /**
         * Element HTML du panel
         * @member {HTMLElement}
         */
        this.element = document.getElementById('attributs');
        if(!(this.element instanceof HTMLElement)) {
            throw new Error("@AttributesPanel() -> Erreur : element doit être une instance de HTMLElement d'id 'strategie-network'");
        }

        //création des boutons
        /**
         * Liste des boutons du panel
         * @member {Array<AttributeButton>}
         */
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

    /**
     * Ajoute un bouton avec l'attribut donné s'il n'existe pas déja
     * @param {!Attribute} attribute l'instance de l'attribut
     * @throws {Error} Lance un erreur si attribute n'est pas une instance de Attribute
     */
    addButton(attribute){
        if(!(attribute instanceof Attribute)){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        if(!(this.buttons[attribute.getAttributeKey()][attribute.getValue()] instanceof AttributeButton)){
            this.buttons[attribute.getAttributeKey()][attribute.getValue()] = new AttributeButton(attribute,this.element);
        }
    }

    /**
     * Chache le bouton correspondant à l'attribut s'il existe
     * @param {!Attribute} attribute l'instance de l'attribut
     * @throws {Error} Lance un erreur si attribute n'est pas une instance de Attribute
     */
    hideButton(attribute){
        if(!(attribute instanceof Attribute)){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        if(this.buttons[attribute.getAttributeKey()][attribute.getValue()] instanceof Attribute){
            this.buttons[attribute.getAttributeKey()][attribute.getValue()].hide();
        }
    }

    /**
     * Rend visible le bouton correspondant à l'attribut s'il existe
     * @param {!Attribute} attribute l'instance de l'attribut
     * @throws {Error} Lance un erreur si attribute n'est pas une instance de Attribute
     */
    showButton(attribute){
        if(!(attribute instanceof Attribute)){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        if(this.buttons[attribute.getAttributeKey()][attribute.getValue()] instanceof Attribute) {
            this.buttons[attribute.getAttributeKey()][attribute.getValue()].show();
        }
    }
}

export default AttributesPanel;