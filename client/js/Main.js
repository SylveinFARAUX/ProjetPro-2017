import Application from "./objects/Application";
import PopulationPanel from "./objects/PopulationPanel";

export let appInstance = new Application();

//listener sur le redimensionnement de la fenêtred
window.onresize = function(){appInstance.populationPanel.resize();};
