import Application from "./objects/Application";
import PopulationPanel from "./objects/PopulationPanel";

//dimenssionnement de la div app et de la banière
let mainH = document.getElementById("maindiv").clientHeight;
let banH = document.getElementById("banniere").offsetHeight;
document.getElementById("app").style.height = mainH - banH + "px";

let appt = new Application();

//listener sur le redimensionnement de la fenêtre
window.onresize = function(){appt.populationPanel.resize();}
