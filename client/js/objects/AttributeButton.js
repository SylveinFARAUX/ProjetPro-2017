import * as Common from './Common';
import Attribute from './Attribute';

let nextButtonId = 0;

export default class AttributeButton {
    constructor(attribute, parent){
        if(!(attribute instanceof Attribute)){
            throw new Error("L'argument attribute doit être une instance de attribute");
        }
        if(typeof parent !== "object"){
            this.parent = document.getElementById('attributs');
        }else{
            this.parent = parent;
        }
        if(typeof this.parent !== "object"){
            throw new Error("L'argument parent doit être un Element HTML");
        }
        this.element = Common.createChildDiv(this.parent, "attributeButton"+nextButtonId);
        this.element.setAttribute("class", "attributeButton");
        nextButtonId++;
        this.hidden = false;
        this.attribute = attribute;
        this.setText(this.attribute.getLongText());
        this.element.addEventListener("click", event => this.onClick(event));
        //si on ne donne pas un consommateur de event, on perd la référence à this dans le listener
    }

    hide(){
        if(!this.hidden){
            this.element.setAttribute('style', 'display: none;');
        }
    }

    show(){
        if(this.hidden){
            this.element.removeAttribute('style');
        }
    }

    onClick(event){
        this.attribute.prettyPrint();
    }

    isHidden(){
        return this.hidden;
    }

    setText(text){
        let textNode;
        if(text === undefined) {
            textNode = document.createTextNode("");
        }else{
            textNode = document.createTextNode(text);
        }
        this.element.appendChild(textNode);
    }
}
