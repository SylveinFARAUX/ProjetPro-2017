import StrategyPanel from "./StrategyPanel";
import InformationsPanel from "./InformationsPanel";
import AttributesPanel from "./AttributesPanel";
import PopulationPanel from "./PopulationPanel";

/**
 * Classe instanciant l'application, panel par panel.
 */
class Application {
    /**
     * Instancie tout les panels
     */
    constructor(){
        this.attributesPanel = new AttributesPanel(document.getElementById('attributs'), this);
        this.strategyPanel = new StrategyPanel(document.getElementById('strategie-network'), this.attributesPanel, this);
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
