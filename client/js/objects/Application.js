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
        /**
         * Infobulle
         * @member {Tooltip}
         */
        this.infobulle =  new Tooltip();
        /**
         * Gestionnaire de page
         * @member {GestionnairePage}
         */
        this.gestionnairePages = new GestionnairePage(this);
        /**
         * Bannière de l'application
         * @member {Banniere}
         */
        this.banniere = new Banniere(this);
        /**
         * Gestionnaire de population
         * @member {GestionnairePopulation}
         */
        this.gestionnairePopulation = new GestionnairePopulation(this);
        /**
         * Instance du panel de stratégie
         * @member {StrategyPanel}
         */
        this.strategyPanel = new StrategyPanel(this);
        /**
         * Instance du panel de population
         * @member {PopulationPanel}
         */
        this.populationPanel = new PopulationPanel(this);
        /**
         * Instance du panel d'informations
         * @member {InformationsPanel}
         */
        this.informationsPanel = new InformationsPanel(this);
        /**
         * Créateur de personnage
         * @member {CharCreator}
         */
        this.charcreator = new CharCreator(this);
    }

    /**
     * Retourne le panel stratégie
     * @returns {StrategyPanel}
     */
    getStrategyPanel(){
        return this.strategyPanel;
    }

    /**
     *
     * @returns {GestionnairePopulation}
     */
    getGestionnairePopulation(){
        return this.gestionnairePopulation;
    }

    /**
     *
     * @returns {Banniere}
     */
    getBanniere(){
        return this.banniere;
    }

    /**
     *
     * @returns {GestionnairePage}
     */
    getGestionnairePage(){
        return this.gestionnairePages;
    }

    /**
     *
     * @returns {Tooltip}
     */
    getInfoBulle(){
        return this.infobulle;
    }

    /**
     *
     * @returns {CharCreator}
     */
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
