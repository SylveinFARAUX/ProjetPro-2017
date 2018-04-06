import Application from "./objects/Application";
import * as AttributesCollection from "./objects/AttributesCollection";

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