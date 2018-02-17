import * as Common from './Common';
import Attribute from './Attribute';

let nextButtonId = 0;

/**
 * Représente un bouton lié à un attribut.
 * Utilisé dans le panel 'Attributs'
 * @see Attribute
 */
class AttributeButton {
    /**
     * Constructeur.
     * Dans le cas ou l'argument parent n'est pas un objet ou n'est pas renseigné,
     * on tente de trouver la div avec l'id 'attributs' à la place.
     * @param {!Attribute} attribute Une instance d'Attribute
     * @param {?HTMLElement} parent L'élément parent (censé être la div du panel 'Attributs')
     * @throws {Error} Lance une erreur si attribute n'est une instance d'Attribute
     * @throws {Error} Lance une si l'élément d'id 'attributs' n'à pas pu être trouvé dans le cas il l'argument parent serais mal renseigné
     */
    constructor(attribute, parent){
        if(!(attribute instanceof Attribute)){
            throw new Error("L'argument attribute doit être une instance de Attribute");
        }
        if(!(parent instanceof HTMLElement)){
            this.parent = document.getElementById('attributs');
            if(!(parent instanceof HTMLElement)){
                throw new Error("L'argument parent doit être un Element HTML");
            }
        }else{
            this.parent = parent;
        }

        /**
         * L'élément HTML du bouton
         * @member{Element}
         */
        this.element = Common.createChildDiv(this.parent, "attributeButton"+nextButtonId);
        this.element.setAttribute("class", "attributeButton");
        nextButtonId++;
        /**
         * Indique si le bouton est caché ou visible
         * @member{boolean}
         */
        this.hidden = false;
        /**
         * L'instance d'Attribute liée à ce bouton
         * @member{Attribute}
         */
        this.attribute = attribute;
        this.setText(this.attribute.getLongText());
        this.element.addEventListener("click", event => this.onClick(event));
        //si on ne donne pas un consommateur de event, on perd la référence à this dans le listener
    }

    /**
     * Cache le bouton s'il est visible
     */
    hide(){
        if(!this.hidden){
            this.element.setAttribute('style', 'display: none;');
        }
    }

    /**
     * Rend visible le bouton s'il est caché
     */
    show(){
        if(this.hidden){
            this.element.removeAttribute('style');
        }
    }

    /**
     * Handler de l'événement 'onClick' sur l'élément HTML du bouton
     * @param {Event} event l'événement onClick
     */
    onClick(event){
        this.attribute.prettyPrint();
    }

    /**
     * Indique si le bouton est caché ou visible
     * @returns {boolean} true si le bouton est caché, false s'il est visible
     */
    isHidden(){
        return this.hidden;
    }

    /**
     * Définis le texte du bouton
     * @param {?string} text le nouveau texte
     */
    setText(text){
        let textNode;
        if(text === undefined) {
            textNode = document.createTextNode("");
        }else{
            textNode = document.createTextNode(text);
        }
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
        this.element.appendChild(textNode);
    }
}

export default AttributeButton;