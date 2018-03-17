import StrategyPanel from "./StrategyPanel";
import InformationsPanel from "./InformationsPanel";
import AttributesPanel from "./AttributesPanel";
import PopulationPanel from "./PopulationPanel";
import ToolType from "./ToolType";

/**
 * Classe instanciant l'application, panel par panel.
 */
class Application {
    /**
     * Instancie tout les panels
     */
    constructor(){
        this.infobulle =  new ToolType();
        this.attributesPanel = new AttributesPanel(this);
        this.strategyPanel = new StrategyPanel(this);
        this.populationPanel = new PopulationPanel(this);
        this.informationsPanel = new InformationsPanel(this);
    }

    /**
     * Retourne le panel stratégie
     * @returns {StrategyPanel}
     */
    getStrategyPanel(){
        return this.strategyPanel;
    }

    getInfoBulle(){
        return this.infobulle;
    }

    /**
     * Retourne le panel Population
     * @returns {PopulationPanel}
     */
    getPopulationPanel(){
        return this.populationPanel;
    }

    /**
     * Retourne le panel Attributs
     * @returns {AttributesPanel}
     */
    getAttributesPanel(){
        return this.attributesPanel;
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
