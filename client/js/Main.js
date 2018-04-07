import Application from "./objects/Application";
import * as AttributesCollection from "./objects/AttributesCollection";

// Array Remove - By John Resig (MIT Licensed)
/**
 * Supprime le ou les éléments en fonction des valeur de from et to.
 * <ul>
 *     <li>Si to n'est pas renseigné :
 *      <ul>
 *         <li>from >= 0 : supprime l'item à l'index from</li>
 *         <li>from < 0 : soit n la taille, supprime l'item à l'index  n + from</li>
 *      </ul>
 *     </li>
 *     <li>Si to est renseigné :
 *      <ul>
 *         <li>from et to >= 0 : supprime les items de l'index from à l'index to inclus</li>
 *         <li>from et to < 0 : soit n la taille, supprime les items de l'index n + from à l'index n + to inclus</li>
 *      </ul>
 *     </li>
 * </ul>
 * @param {!Number} from Index de l'élément à supprimer, ou du premier élément à supprimer
 * @param {Number} [to] Index du dernier élément à supprimer
 * @returns {Number} La nouvelle longueur du tableau
 * @example
 * // Supprime le deuxième item du tableau
 * array.remove(1);
 * // Supprime l'avant-avant dernier item du tableau
 * array.remove(-2);
 * // Supprime les deuxième et troisième items du tableau
 * array.remove(1,2);
 * // Supprime l'avant-avant dernier et l'avant dernier items du tableau
 * array.remove(-2,-1);
 */
Array.prototype.remove = function(from, to) {
    let rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

Array.prototype.removeValue = function(value) {
    let index = this.indexOf(value);
    if(index >= 0){
        this.remove(index);
    }
};

let appt = new Application();

//listener sur le redimensionnement de la fenêtre
window.onresize = function(){
    appt.getGestionnairePage().resizePages();
    appt.getGestionnairePage().resizeContenu();
};

let rightClickX = 0;
let rightClickY = 0;

document.addEventListener("contextmenu", (evt)=>{
    rightClickX = evt.x;
    rightClickY = evt.y - document.getElementById('strategie-network').getBoundingClientRect().top; //le js <3
});

document.addEventListener("click", (evt)=>{
    $(document).contextmenu("close");
});

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
                            return appt.getStrategyPanel().getNodeAt(rightClickX, rightClickY) === undefined;
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
                                return attr === undefined || attr === null;
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