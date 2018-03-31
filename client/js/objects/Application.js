import StrategyPanel from "./StrategyPanel";
import InformationsPanel from "./InformationsPanel";
import PopulationPanel from "./PopulationPanel";
import Tooltip from "./Tooltip";
import GestionnairePage from "./GestionnairePage";
import Banniere from "./Banniere";
import CharCreator from "./CharCreator";
import GestionnairePopulation from "./GestionnairePopulation";

/**
 * Classe instanciant l'application, panel par panel.
 */
class Application {
    /**
     * Instancie tout les panels
     */
    constructor(){
        this.infobulle =  new Tooltip();
        this.gestionnairePages = new GestionnairePage(this);
        this.banniere = new Banniere(this);
        this.gestionnairePopulation = new GestionnairePopulation(this);
        this.strategyPanel = new StrategyPanel(this);
        this.populationPanel = new PopulationPanel(this);
        this.informationsPanel = new InformationsPanel(this);
        this.charcreator = new CharCreator(this);
    }

    /**
     * Retourne le panel stratégie
     * @returns {StrategyPanel}
     */
    getStrategyPanel(){
        return this.strategyPanel;
    }

    getGestionnairePopulation(){
        return this.gestionnairePopulation;
    }

    getBanniere(){
        return this.banniere;
    }

    getGestionnairePage(){
        return this.gestionnairePages;
    }

    getInfoBulle(){
        return this.infobulle;
    }

    getCharCreator(){
        return this.charcreator;
    }

    /**
     * Retourne le panel Population
     * @returns {PopulationPanel}
     */
    getPopulationPanel(){
        return this.populationPanel;
    }

    /**
     * Retourne le panel Informations
     * @returns {InformationsPanel}
     */
    getInformationsPanel(){
        return this.informationsPanel;
    }
}

export default Application;
