import Application from "./objects/Application";
import * as AttributesCollection from "./objects/AttributesCollection";

//dimenssionnement de la div app et de la banière
let mainH = document.getElementById("maindiv").clientHeight;
let banH = document.getElementById("banniere").offsetHeight;
document.getElementById("app").style.height = mainH - banH + "px";

let appt = new Application();

//listener sur le redimensionnement de la fenêtre
window.onresize = function(){appt.populationPanel.resize();};

let rightClickX = 0;
let rightClickY = 0;

document.addEventListener("contextmenu", (evt)=>{
    rightClickX = evt.x;
    rightClickY = evt.y - $('#strategie-title').height() - $('#banniere').height(); //le js <3
});

document.addEventListener("click", (evt)=>{
    $(document).contextmenu("close");
});

$(function(){
    $(document).contextmenu({
        delegate: "#strategie-network",
        autoFocus: true,
        preventContextMenuForPopup: true,
        preventSelect: true,
        taphold: true,
        menu: [
                {
                    title: "Supprimer la supposition",
                    cmd:"delete",
                    disabled: (event, ui) => {
                        if(appt instanceof Application){
                            return appt.getStrategyPanel().getNodeAt(rightClickX, rightClickY) === undefined;
                        }else{
                            return true;
                        }
                    },
                    action: (event, ui) => {
                        if(appt instanceof Application){
                            appt.getStrategyPanel().setAttributeToSelection(null);
                        }
                    }},
                {
                    title: "Supposition", cmd:"assert", children: []
                }
        ],
        // Implement the beforeOpen callback to dynamically change the entries
        beforeOpen: function(event, ui) {
            if(appt instanceof Application){
                let attributes = appt.getStrategyPanel().getAssertionsForNode(rightClickX, rightClickY);
                appt.getStrategyPanel().selectNode(rightClickX, rightClickY);
                let childs = [];
                attributes.forEach(attribute =>{
                   childs.push({
                       title: attribute.getLongText(),
                       action: (event, ui) => {
                           appt.getStrategyPanel().setAttributeToSelection(attribute);
                           console.log("assertion made : "+attribute.getShortText());
                       }
                   });
                });
                $(document).contextmenu("setEntry", "assert", {title: "Supposition", children:childs});
            }
        }
    });

});