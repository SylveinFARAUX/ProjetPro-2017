import * as Common from './Common';

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

        this.network = new vis.Network(element, this.data, Common.STRATEGY_OPTIONS);
        this.data.nodes.add({id: 6, label: 'Node 6', level: 2});
        this.setNetworkHandlers();
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

    onClick(params){
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
        console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
    }

    onDoubleClick(params){
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>DoubleClick event:</h2>' + JSON.stringify(params, null, 4);
        console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
    }
}
