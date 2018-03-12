import * as Common from './Common';
import Attribute from './Attribute';
import AttributePanel from './AttributesPanel';

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
     * @param {!AttributePanel} attributePanel L'instance du panel des attributs
     * @throws {Error} Lance une erreur si attribute n'est une instance d'Attribute
     * @throws {Error} Lance une si l'élément d'id 'attributs' n'à pas pu être trouvé dans le cas il l'argument parent serais mal renseigné
     */
    constructor(attribute, attributePanel){
        if(!(attribute instanceof Attribute)){
            throw new Error("L'argument attribute doit être une instance de Attribute");
        }
        if(!(attributePanel instanceof AttributePanel)){
            throw new Error("L'argument attributePanel doit être une de AttributePanel");
        }
        /**
         * Référence vers l'instance du panel des attributs
         * @member{AttributePanel}
         */
        this.attributePanel = attributePanel;

        /**
         * L'élément HTML du bouton
         * @member{Element}
         */
        this.element = document.createElement("button");
        this.element.setAttribute("id","attributeButton"+nextButtonId);
        this.element.setAttribute("class", "attributeButton");
        //si on ne donne pas un consommateur de event, on perd la référence à this dans le listener
        this.element.addEventListener("click", event => this.onClick(event));
        this.attributePanel.getElement().appendChild(this.element);
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
        this.attributePanel.onButtonClick(this);
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
        if(typeof text === "string") {
            this.element.innerText = text;
        }
    }

    /**
     * Retourne l'attribut représenté par le bouton
     * @returns {Attribute} l'attribut
     */
    getAttribute(){
        return this.attribute;
    }
}

export default AttributeButton;