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

        this.removeAttributeButton = document.getElementById("boutonAnnulerSupposition");
        this.removeAttributeButton.addEventListener("click", this.annulerSupposition);
    }

    /**
     * Met à jour l'états des boutons des attributs en fonction de la sélection de l'arbre de stratégie
     */
    updateButtonsStatus(){
        if(this.appInstance.getStrategyPanel() === undefined){
            return;
        }
        let selection = this.appInstance.getStrategyPanel().getSelection();
        if(Array.isArray(selection)){
            if(selection.length === 1){
                let node = selection[0];
                if(node.attribute !== undefined && node.attribute !== null && node.attribute instanceof Attribute){
                    this.removeAttributeButton.setAttribute("class", "btnActif");
                }
                let nodes = this.appInstance.getStrategyPanel().getNodes(selection);
                if(Array.isArray(nodes) && nodes.length > 0){
                    this.updateAttributesButtons(nodes);
                }
            }else{
                this.removeAttributeButton.setAttribute("class", "btnInactif");
            }
        }
    }

    /**
     * Met à jour la liste des boutons attributs à afficher en fonction de la slection donnée
     * @param {!Object} nodes Liste des noeuds vis.js sélectionnés
     */
    updateAttributesButtons(nodes){
        //TODO
    }

    annulerSupposition(event){
        console.log("Annulation supposition");
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
            this.buttons[attribute.getAttributeKey()][attribute.getValue()] = new AttributeButton(attribute,this);
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

    /**
     * Ajoute l'argument au noeuds sélectionné dans le panel de la stratégie,<br>
     * et met à jour le statut des boutons.
     * @param {!AttributeButton} button le bouton cliqué.
     */
    onButtonClick(button){
        if(!(button instanceof AttributeButton)){
            throw new Error("@AttributesPanel.onButtonClick() : L'attribut button doit être une instance de AttributeButton");
        }
        button.getAttribute().prettyPrint();
        if(this.appInstance.getStrategyPanel() !== undefined){
            this.appInstance.getStrategyPanel().setAttributeToSelection(button.getAttribute());
        }
    }

    /**
     * Retourne l'élément HTML du panel
     * @returns {HTMLElement} l'élément HTML
     */
    getElement(){
        return this.element;
    }
}

export default AttributesPanel;