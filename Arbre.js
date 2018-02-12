import './Noeud.js'

export default class Arbre{
    constructor(){
        this._tete = null;
    }
    
    insert(n){
        if(! typeof n === 'Noeud')
            return;
        if(this._tete == null){
            this._tete = n;
        }else{
            this._tete.lastChild().insertRight(n);
        }
    }

}

