import * as Common from './Common';
import AttributesPanel from "./AttributesPanel";
import Application from "./Application";

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
 * Représente le panel contenant l'arbre de stratégie.
 */
class StrategyPanel {
    /**
     *
     * @param {!Application} appInstance L'instance d'application commune aux panels
     * @throws {Error} Lance une erreur si element n'est pas une instance de HTMLElement
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
    constructor(appInstance){
        if(!(appInstance instanceof Application)){
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        /**
         * L'élément conteneur du panel
         * @member {HTMLElement}
         */
        this.element = document.getElementById('strategie-network');
        if(!(this.element instanceof HTMLElement)) {
            throw new Error("@StrategyPanel() -> Erreur : element doit être une instance de HTMLElement d'id 'attributs'");
        }

        /**
         * Liste des noeuds de la stratégie
         * @type {DataSet}
         */
        this.nodes = new vis.DataSet([
            {id: 1, label: 'Node 1', level: 0, title: 'Je s\'appelle root', enabled:true},
            {id: 2, label: 'Node 2', level: 1, enabled:true},
            {id: 3, label: 'Node 3', level: 1, enabled:true},
            {id: 4, label: 'Node 4', level: 2, enabled:true},
            {id: 5, label: 'Node 5', level: 2, enabled:true}
        ]);

        /**
         * Liste des liens de la stratégie
         * @type {DataSet}
         */
        this.edges = new vis.DataSet([
            {from: 1, to: 2},
            {from: 1, to: 3},
            {from: 2, to: 4},
            {from: 2, to: 5},
            {from: 3}
        ]);


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
        this.network = new vis.Network(this.element, this.data, Common.STRATEGY_OPTIONS);
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
     * Active le noeud donné
     * @param {!Number} id le noeud à activer
     */
    enableNode(id){
        // Remet la couleur du noeud par défaut
        this.data.nodes.update([{
            id:id,
            enabled: true,
            color:{
                background:'#D2E5FF',
                border:'#2B7CE9',
                highlight:{
                    background:'#D2E5FF',
                    border:'#2B7CE9'
                },
                hover:{
                    background:'#D2E5FF',
                    border:'#2B7CE9'
                }
            }
        }]);
    }

    /**
     * Désactive le noeud donné
     * @param {!Number} id le noeud à désactiver
     */
    disableNode(id){
        // Remet la couleur du noeud par défaut
        this.data.nodes.update([{
            id:id,
            enabled: false,
            color:{
                background:'#848484',
                border:'#2E2E2E',
                highlight:{
                    background:'#A4A4A4',
                    border:'#2E2E2E'
                },
                hover:{
                    background:'#A4A4A4',
                    border:'#2E2E2E'
                }
            }
        }]);

        // Si tous les fils sont désactivés, on les supprime
        let allDisabled = true;
        let sons = [];

        this.data.edges.forEach((edge) => {
            if (edge.from === node.id) {
                let son = this.data.nodes.get(edge.to);

                sons.push(son);

                if(son.enabled) {
                    allDisabled = false;
                }
            }
        });

        if (allDisabled && sons.length !== 0) {
            sons.forEach((son) => {
                this.deleteNode(son);
            });
        }
    }

    /**
     * Désactive ou active le noeud donné en paramètre et supprime les fils si désactivés
     * @param {!Number} id le noeud à désactiver ou activer
     */
    updateNode(id){
      let node = this.data.nodes.get(id);

      if(node.enabled) {
        this.disableNode(id);

      } else {
          this.enableNode(id);
      }
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
            instance.updateNode(clickedNode);
        }
    }
}

export default StrategyPanel;
