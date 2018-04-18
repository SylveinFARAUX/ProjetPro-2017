class Character{
    constructor(json, id, attributSingleton){
        this.id = id;
        this.nom = json.nom;
        this.img = json.img;
        this.actived = true;
        this.attributs = [];
        for(let i = 0; i < json.attributs.length; i++){
            this.attributs.push(attributSingleton.getAttributeInstance(json.attributs[i].key, json.attributs[i].value));
        }
    }


    getImg(){
        return this.img;
    }

    getNom(){
        return this.nom;
    }

    getAttributs(){
        return this.attributs;
    }

    active(){
        if(this.actived)return;
        document.getElementById("charimg" + this.id).style.filter = "";
        document.getElementById("charfigure" + this.id).style.borderColor = "grey";
        document.getElementById("charstatus" + this.id).innerHTML = "Suspect";
        this.actived = true;
    }

    unactive(reason){
        document.getElementById("charimg" + this.id).style.filter = "grayscale(100%)";
        document.getElementById("charfigure" + this.id).style.borderColor = "#A61011";
        document.getElementById("charstatus" + this.id).innerHTML = "Eliminé : " + reason;
        this.actived = false;
    }

    listeAttribute(){
        let res = "";
        for(let i = 0; i < this.attributs.length; i++){
            if(this.attributs[i] === undefined)
                res += "<span class = 'attr_id'></span>Attribut Inconnu<span class = 'attr_value'></span></br>";
            else
                res += "<span class = 'attr_id'>" + this.attributs[i].attributeKey + "</span> : <span class = 'attr_value'>" + this.attributs[i].value + "</span></br>";
        }
        return res;
    }

    /**
     *
     * @param {Array.<Assertion>} tabAttributs
     * @param {boolean} [updateGUI=false] mettre à jour l'IHM ?
     * @returns {boolean}
     */
    check(tabAttributs, updateGUI=false){
        let found;
        if(tabAttributs === undefined || tabAttributs.length === 0){
            if(updateGUI)this.active();
            return true;
        }
        for(let i = 0; i < tabAttributs.length; i++) {
            found = this.attributs.find(
                function (element) {
                    return element.attributeKey === tabAttributs[i].attributeName;
                }
            );
            if (found !== undefined) {
                if(!tabAttributs[i].value && found.value === tabAttributs[i].valueName) {
                    if (updateGUI) this.unactive(tabAttributs[i].attributeName + " = " + tabAttributs[i].valueName);
                    return false;
                }else if (tabAttributs[i].value && found.value !== tabAttributs[i].valueName) {
                    if (updateGUI) this.unactive(tabAttributs[i].attributeName + " PAS " + tabAttributs[i].valueName);
                    return false;
                }
            }else {//cas où le personnage n'as pas de valeure définit pour cet attribut => par défaut : faux
                if(tabAttributs[i].value){
                    if (updateGUI) this.unactive(" PAS DE " + tabAttributs[i].attributeName);
                    return false;
                }
            }
        }
        this.active();
        return true;
    }

}

export default Character;