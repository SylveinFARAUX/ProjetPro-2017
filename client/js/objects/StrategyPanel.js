import * as Common from './Common';
import AttributesPanel from "./AttributesPanel";
import Application from "./Application";
import Attribute from "./Attribute";
import * as Main from"../Main";

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
     * @throws {Error} Lance une erreur si element n'est pas une instance de HTMLElement
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
    constructor(){
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
        this.nodes = new vis.DataSet([]);

        /**
         * Liste des liens de la stratégie
         * @type {DataSet}
         */
        this.edges = new vis.DataSet([]);


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
        this.setNetworkHandler("click", this.onClick);
        this.setNetworkHandler("doubleClick", this.onDoubleClick);
        this.setNetworkHandler("selectNode", this.onSelectNode);
        this.setNetworkHandler("deselectNode", this.onDeselectNode);
        instance = this;
        this.addNode(1,'',0);
    }

    /**
     * Retourne le Network de l'arbre de stratégie
     * @returns {StrategyPanel.network}
     */
    network(){
        return this.network;
    }

    /**
     * Retourne le lien avec l'id donné
     * @param id l'id du lien
     * @returns {Object|undefined} le lien ou undefined
     */
    getEdge(id){
        return this.data.edges.get(id);
    }

    /**
     * Retourne le noeud avec l'id donné
     * @param id l'id du noeud
     * @returns {Object|undefined} le noeud ou undefined
     */
    getNode(id){
        return this.data.nodes.get(id);
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
        //TODO éviter de supprimer la racine
        this.data.nodes.remove(node);
    }

    /**
     * Retourne le noeud père du noeud avec l'id donné
     * @param {!Number} id l'id du noeud fils
     * @returns {Number|undefined} L'id du noeud père ou undefined
     */
    getParentId(id){
        this.data.edges.forEach((edge) => {
            if (edge.to === id) {
                return edge.from;
            }
        });
        return undefined;
    }

    /**
     *  /**
     * Retourne les ids des noeuds fils du noeud avec l'id donné
     * @param {!Number} id l'id du noeud père
     * @returns {Array} Les ids des noeuds fils
     */
    getChildsIds(id){
        let sons = [];
        this.data.edges.forEach((edge) => {
            if (edge.from === id) {
                sons.push(edge.to);
            }
        });
        return sons;
    }

    /**
     * Active le noeud donné
     * @param {!Number} id le noeud à activer
     */
    enableNode(id){
        if(id === undefined){
            return;
        }
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
        if(id === undefined){
            return;
        }
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
            if (edge.from === id) {
                let son = this.getNode(edge.to);

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
      if(this.getNode(id).enabled) {
        this.disableNode(id);
      } else {
          this.enableNode(id);
      }
    }

    /**
     * Ajout un nouveau noeud au Network. La valeur attribute de ce noeud est initialisée à null.
     * @param id l'id du noeud
     * @param label le label du noeud
     * @param level le niveau hiérarchique du noeud (le plus élevé est en bas de l'écran)
     */
    addNode(id, label, level){
        this.data.nodes.add({id, label, level});
        this.getNode(id).attribute = null;
        this.disableNode(id);
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
    }

    onSelectNode(params){
        if(Main.appInstance === undefined){
            return;
        }
        Main.appInstance.getAttributesPanel().updateButtonsStatus();
    }

    onDeselectNode(params){
        if(Main.appInstance === undefined){
            return;
        }
        Main.appInstance.getAttributesPanel().updateButtonsStatus();
    }

    /**
     * Retourne la liste des Noeuds selectionnés
     * @returns {Array} les noeuds
     */
    getSelection(){
        let selection = this.network.getSelectedNodes();
        let nodes=[];
        selection.forEach(id =>{
            nodes.push(this.getNode(id));
        });
        return nodes;
    }

    /**
     * Retourne la liste des noeuds avec les ids données, ou la liste complète des noeuds<br>
     * si ids n'est pas un tableau ou n'est pas renseigné
     * @param {string[]} [ids] la liste des identifiants des noeuds souhaités
     * @returns {Array|DataSet} la liste des noeuds souhaités ou de tous les noeuds
     */
    getNodes(ids){
        if(Array.isArray(ids)){
            let nodes =  [];
            ids.forEach(id => {
               let node = this.getNode(id);
               if(node !== undefined){
                   nodes.push(node);
               }
            });
            return nodes;
        }else{
            return this.nodes;
        }
    }

    /**
     * Définis la valeur d'un noeuds à l'attributs donné
     * @param {!Attribute|null} attribute l'attribut à affecter au noeud sélectionné ou null
     * @throws {Error} Lance une erreur si attribute n'est pas une instance de Attribute
     */
    setAttributeToSelection(attribute){
        if(attribute !== null && !(attribute instanceof Attribute)){
            throw new Error("@StrategyPanel() -> Erreur : attribute doit être une instance de Attribute");
        }
        let selection = this.getSelection();
        if(Array.isArray(selection) && selection.length === 1){
            let selectedNode = selection[0];
            selectedNode.attribute = attribute;
            if(attribute === null){
                this.nodes.update({id:selectedNode.id,label:""});
            }else{
                this.nodes.update({id:selectedNode.id,label:attribute.getShortText()});
                this.updateNode(selectedNode.id);
            }
        }
    }
}

export default StrategyPanel;
