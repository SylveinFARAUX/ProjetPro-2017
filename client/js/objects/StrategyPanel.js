import * as Common from './Common';
import AttributesPanel from "./AttributesPanel";

//on a besoin de garder un pointeur vers une instance pour y accèder dans
//les handlers des événements de vis.js car ces dèrnier sont
//appelé avec un contexte différents définies par vis.js
let instance;

/**
 * Callback pour un événement
 * @callback eventCallback
 * @param {Event} event Un événement
 */

/**
 * @typedef {object} StrategyData
 * @property {vis.DataSet} nodes les noeuds
 * @property {vis.DataSet} edges les liens
 */

/**
 * Représente la panel contenant l'arbre de stratégie.
 */
class StrategyPanel {
    /**
     *
     * @param {!HTMLElement} element L'élement HTML conteneur de l'arbre de stratégie
     * @param {?vis.DataSet} nodes L'ensemble des noeuds de départ
     * @param {?vis.DataSet} edges L'ensemble des liens de départ
     * @param {!AttributesPanel} attributesPanel Une instance du panel des attributs
     * @throws {Error} Lance une erreur si element n'est pas une instance de HTMLElement
     * @throws {Error} Lance une erreur si attributesPanel n'est pas une instance de AttributesPanel
     */
    constructor(element, nodes, edges, attributesPanel){
        if(!(element instanceof HTMLElement)) {
            throw new Error("@StrategyPanel() -> Erreur : element doit être une instance de HTMLElement");
        }
        if(!(attributesPanel instanceof AttributesPanel)){
            throw new Error("@StrategyPanel() -> Erreur : attributsPanel doit être une instance de AttributesPanel");
        }
        /**
         * L'élément conteneur du panel
         * @member {HTMLElement}
         */
        this.element = element;
        if(!(nodes instanceof vis.DataSet)){
            console.log("@StrategyPanel() -> Debug : noeuds par défaut");
            this.nodes = new vis.DataSet([

            ]);
        }else{
            this.nodes = nodes;
        }

        if(!(edges instanceof vis.DataSet)){
            console.log("@StrategyPanel() -> Debug : liens par défaut");
            this.edges = new vis.DataSet([

            ]);
        }else{
            this.edges = edges;
        }

        /**
         * Données contenant les noeuds et les liens de l'arbre de stratégie
         * @member {StrategyData}
         */
        this.data = {
            nodes: this.nodes,
            edges: this.edges
        };

        /**
         * Instance de vis.Network permettant de visualiser l'arbre
         * @member {vis.Network}
         */
        this.network = new vis.Network(element, this.data, Common.STRATEGY_OPTIONS);
        this.addNode(6, 'Node 6', 2);
        this.setNetworkHandler("click", this.onClick);
        this.setNetworkHandler("doubleClick", this.onDoubleClick);
        instance = this;
    }

    /**
     * Retourne le Network de l'arbre de stratégie
     * @returns {StrategyPanel.network}
     */
    network(){
        return this.network;
    }

    /**
     * Définis un handler pour l'événement donnée, s'il est utilisable avec le Network
     * @param {string} event La chaîne correspondant à l'événement
     * @param {eventCallback} handler Callback de l'événement
     * @see {@link module-Common.isNetworkEvent}
     */
    setNetworkHandler(event, handler){
        if(typeof event === 'string' && typeof handler === 'function'){
            if(Common.isNetworkEvent(event)){
                this.network.on(event, handler);
            }
        }
    }

    /**
     * Supprime le noeud donné en paramètre
     * @param {object} node le noeud à supprimer
     */
    deleteNode(node){
        this.data.nodes.remove(node);
    }

    /**
     * Ajout un nouveau noeud au Network
     * @param id l'id du noeud
     * @param label le label du noeud
     * @param level le niveau hiérarchique du noeud (le plus élevé est en bas de l'écran)
     */
    addNode(id, label, level){
        this.data.nodes.add({id, label, level});
    }

    /**
     * Handler appelé lors des événement click sur le network
     * @param {object} params Objet contenant les infos de l'événement
     */
    onClick(params){
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
        console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
    }

    /**
     * Handler appelé lors des événement doubleClick sur le network
     * @param {object} params Objet contenant les infos de l'événement
     */
    onDoubleClick(params){
        let clickedNode = this.getNodeAt(params.pointer.DOM);
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>DoubleClick event:</h2>' + JSON.stringify(params, null, 4);
        console.log('click event, getNodeAt returns: ' + clickedNode);
        if(clickedNode !== undefined){
            instance.deleteNode(clickedNode);
        }
    }
}

export default StrategyPanel;