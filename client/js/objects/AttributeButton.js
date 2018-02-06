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
        this.element.setText(this.element.id);
        nextButtonId++;
    }

    hide(){
        this.element.setAttribute('style', 'display: none;');
    }

    show(){
        this.element.removeAttribute('style');
    }
}
