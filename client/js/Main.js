import Application from "./objects/Application";

/**
 * Classe des tableaux JavaScript
 * @external Array
 */

/**
 * Créé une copie du tableau non-profonde du tableau.
 * @returns {Array} La copie du tableau
 * @function external:Array#clone
 * @example
 * let a = [1,2,3], b=a.clone();
 * a[0] = 0;
 * console.log(b); // [1,2,3] (copie des valeurs)
 * @example
 * let obj1 = {a:1}, obj2 = {b:2};
 * let a = [obj1, obj2];
 * let b = a.clone();
 * console.log(b); //[ { a: 1 }, { b: 2 } ]
 * obj2.b = 0;
 * console.log(b); //[ { a: 1 }, { b: 0 } ] (copie des références)
 */
Array.prototype.clone = function(){
    return this.map(e => Array.isArray(e) ? e.clone() : e);
};

// Array Remove - By John Resig (MIT Licensed)
/**
 * Supprime le ou les éléments en fonction des valeur de from et to.
 * <ul>
 *     <li>Si to n'est pas renseigné :
 *      <ul>
 *         <li>from >= 0 : supprime l'item à l'index from, s'il existe</li>
 *         <li>from < 0 : soit n la taille, supprime l'item à l'index  n + from, s'il existe</li>
 *      </ul>
 *     </li>
 *     <li>Si to est renseigné :
 *      <ul>
 *         <li>from et to >= 0 : supprime les items de l'index from à l'index to inclus, s'ils existent</li>
 *         <li>from et to < 0 : soit n la taille, supprime les items de l'index n + from à l'index n + to inclus, s'ils existent</li>
 *      </ul>
 *     </li>
 * </ul>
 * @param {!Number} from Index de l'élément à supprimer, ou du premier élément à supprimer
 * @param {Number} [to] Index du dernier élément à supprimer
 * @returns {Number} La nouvelle longueur du tableau
 * @function external:Array#remove
 * @example
 * let a = ['a', "b", 2, 3], b = a.clone(), c = a.clone(), d = a.clone();
 * // Supprime le deuxième item du tableau
 * a.remove(1); //['a', 2, 3]
 * // Supprime l'avant-avant dernier item du tableau
 * b.remove(-2); //['a', 'b', 3]
 * // Supprime les deuxième et troisième items du tableau
 * c.remove(1,2); //['a', 3]
 * // Supprime l'avant-avant dernier et l'avant dernier items du tableau
 * d.remove(-2,-1); //['a', 'b']
 */
Array.prototype.remove = function(from, to) {
    if(typeof from === 'number'){
        if(Math.abs(from) >= this.length){
            console.error("from out of bounds : "+from);
            return this.length;
        }else{
            if(typeof to === 'number' && Math.abs(to) >= this.length){
                console.error("from out of bounds : "+from);
                return this.length;
            }else{
                let rest = this.slice((to || from) + 1 || this.length);
                this.length = from < 0 ? this.length + from : from;
                return this.push.apply(this, rest);
            }
        }
    }
};

/**
 * Supprime la valeur value du tableau si elle existe
 * @param {!Object} value La valeur à supprimer
 * @returns {Number} La nouvelle longueur du tableau
 * @function external:Array#removeValue
 * @example
 * let array a = ['a','b',1,2]
 * // Supprime le deuxième item du tableau
 * array.remove(1);
 */
Array.prototype.removeValue = function(value) {
    let index = this.indexOf(value);
    if(index >= 0){
        return this.remove(index);
    }else{
        return this.length;
    }
};

/**
 * Item clicable du menu contextuelle de l'arbre de stratégie
 * @typedef {Object} ContextMenuItem
 * @property {string} title le texte de l'item
 * @property {function} action la fonction éxécutée à la sélection de l'item
 * @global
 */

/** @module Main */

let appt = new Application();

//listener sur le redimensionnement de la fenêtre
window.onresize = function(){
    appt.getGestionnairePage().resizePages();
    appt.getGestionnairePage().resizeContenu();
};

/** Coordonnée X du dernier clic droit */
let rightClickX = 0;
/** Coordonnée Y du dernier clic droit */
let rightClickY = 0;

document.addEventListener("contextmenu", (evt)=>{
    rightClickX = evt.x;
    rightClickY = evt.y - document.getElementById('strategie-network').getBoundingClientRect().top; //le js <3
});

document.addEventListener("click", (evt)=>{
    $(document).contextmenu("close");
});

/**
 * Créer une liste d'item pour le menu contextuel correspondant à la liste d'Attribute donnée
 * @param {Array.<Attribute>} attributesInstances la liste d'Attribute
 * @returns {Array.<ContextMenuItem>} tableau d'items du menu contextuel
 */
function createAttributesMenuItemList(attributesInstances){
    let menuItemsList = [];
    attributesInstances.forEach(instance => {
        menuItemsList.push({
            title: instance.getLongText(),
            action: (event, ui) => {
                appt.getStrategyPanel().setAttributeToSelection(instance);
            }
        })
    });
    return menuItemsList;
}

/**
 * Créer un liste de fils contenant chacun une liste d'items correspondant aux instances d'Attribute contenues dans attributes
 * @param {!Object} attributes dont chaque proprétés porte le nom d'un attribut et chaque valeur est un tableau d'instance d'Attribute
 * @returns {Array} Liste des fils correspondant aux assertions données en paramètres
 * @see StrategyPanel#getAvailableAssertionsForNode
 */
function createAssertsGroups(attributes){
    let assertsGroups = [];
    Object.keys(attributes).forEach(attribute =>{
        assertsGroups.push({
            title: attribute,
            children: createAttributesMenuItemList(attributes[attribute])
        });
    });
    return assertsGroups;
}

$(function(){
    $(document).contextmenu({
        delegate: "#strategie-network",
        autoFocus: true,
        preventContextMenuForPopup: true,
        preventSelect: true,
        taphold: true,
        menu: [
                {
                    title: "Supposition", cmd:"assert", children: [],
                    disabled : (event, ui) =>{
                        if(appt instanceof Application){
                            let id = appt.getStrategyPanel().getNodeAt(rightClickX, rightClickY);
                            if(id  === undefined){
                                return true;
                            }else{
                                let node = appt.getStrategyPanel().getNode(id);
                                return node === undefined || node.isLeaf;
                            }
                        }else{
                            return true;
                        }
                    }
                },
                {
                    title: "Supprimer la supposition",
                    cmd:"delete",
                    disabled: (event, ui) => {
                        if(appt instanceof Application){
                            let id = appt.getStrategyPanel().getNodeAt(rightClickX, rightClickY);
                            if(id === undefined){
                                return true;
                            }else{
                                let node = appt.getStrategyPanel().getNode(id);
                                let attr = node.attribute;
                                return attr === undefined || attr === null || node.isLeaf;
                            }
                        }else{
                            return true;
                        }
                    },
                    action: (event, ui) => {
                        if(appt instanceof Application){
                            appt.getStrategyPanel().setAttributeToSelection(null);
                        }
                    }
                },
        ],
        // Implement the beforeOpen callback to dynamically change the entries
        beforeOpen: function(event, ui) {
            if(appt instanceof Application){
                let attributes = appt.getStrategyPanel().getAvailableAssertionsForNode(rightClickX, rightClickY);
                appt.getStrategyPanel().selectNode(rightClickX, rightClickY);
                let childs = createAssertsGroups(attributes);
                $(document).contextmenu("setEntry", "assert", {title: "Supposition", children:childs});
            }
        }
    });

});