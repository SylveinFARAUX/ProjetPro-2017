/* global strategyPanelInstance */
import * as Common from './Common';

//on a besoin de garder un pointeur vers une instance pour y accèder dans
//les handlers des événements de vis.js car ces dèrnier sont
//appelé avec un contexte différents définies par vis.js
let instance;

export default class StrategyPanel {
    constructor(element, nodes, edges, attributesPanel){
        if(element === undefined) {
            throw new Error("@StrategyPanel() -> Erreur : element doit être définis");
        }
        if(attributesPanel === undefined){
            throw new Error("@StrategyPanel() -> Erreur : attributsPanel doit être définis");
        }
        this.element = element;
        this.attributesPanel = attributesPanel;
        if(typeof nodes !== "object"){
            console.log("@StrategyPanel() -> Debug : noeuds par défaut");
            this.nodes = new vis.DataSet([

            ]);
        }else{
            this.nodes = nodes;
        }

        if(typeof edges !== "object"){
            console.log("@StrategyPanel() -> Debug : liens par défaut");
            this.edges = new vis.DataSet([

            ]);
        }else{
            this.edges = edges;
        }

        this.data = {
            nodes: this.nodes,
            edges: this.edges
        };

        this.level = 0;
        this.nextId = 0;

        this.network = new vis.Network(element, this.data, Common.STRATEGY_OPTIONS);
        this.addNode(6, 'Node 6', 2);
        this.setNetworkHandlers();
        instance = this;
    }

    setNetworkHandlers(){
        this.setNetworkHandler("click", this.onClick);
        this.setNetworkHandler("doubleClick", this.onDoubleClick);
    }

    network(){
        return this.network;
    }

    setNetworkHandler(event, handler){
        if(typeof event === 'string' && typeof handler === 'function'){
            if(Common.isNetworkEvent(event)){
                this.network.on(event, handler);
            }
        }
    }

    addQuestion(attribute){

    }

    deleteNode(node){
        this.data.nodes.remove(node);
    }

    addNode(id, label, level){
        this.data.nodes.add({id, label, level});
    }

    onClick(params){
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
        console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
    }

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
