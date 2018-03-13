import Application from "./objects/Application";
import PopulationPanel from "./objects/PopulationPanel";

let app = new Application();

//listener sur le redimensionnement de la fenêtred
window.onresize = function(){app.populationPanel.resize();}
