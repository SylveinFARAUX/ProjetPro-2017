import './Attribute.js'

export default class Noeud{
    
    //#region constructor
       
    constructor(attr){
        if(! typeof attr === 'Attribut')
            this._attribut = null;
        else
            this._attribut = attr;
        this._right = null;
        this._left = null;
    }
    
    //#endregion
    
    //#region getter
    
    get_attribut(){
        return this._attribut;
    }
    
    get_left(){
        return this.left;
    }
    
    get_right(){
        return this.right;
    }
    
    //#endregion
    
    //#region setter
    
    set_attribut(attr){
        if(! typeof attr === 'Attribut')
            return;
        this._attribut = attr;
    }
    
    set_right(n){
        if(! typeof n === 'Noeud')
            return;
        this._right = n;
    }
    
    set_left(n){
        if(! typeof n === 'Noeud')
            return;
        this._left = n;
    }
    
    //#endregion
    
    //#region accessor
    
    /*Insert the node's right son
     */
    insertRight(n){
        if(! typeof n === 'Noeud')
            return;
        this._right = n;
    }
    
    /*Insert le fils gauche du noeud
     */
    insertLeft(n){
        if(! typeof n === 'Noeud')
            return;
        this._left = n;
    }
    
    /*Return le dernier noeud droit non  null
     */
    lastChild(){
        if (this._right == null)
            return this;
        else
            return this._right.lastChild();
    }
    
    //#endregion
}