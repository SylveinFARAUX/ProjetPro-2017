import AttributesCollection from "./AttributesCollection";
import * as Common from './Common';

export default class AttributesPanel {
    constructor(element, nodes){
        this.attributsCollection = new AttributesCollection();
        if(element === undefined) {
            throw new Error("@AttributesPanel() -> Erreur : element doit être définis");
        }
        this.element = element;

        if(typeof nodes !== "object"){
            console.log("@AttributesPanel() -> Debug : noeuds par défaut");
            this.nodes = new vis.DataSet([
                {id: 42, label: 'Node 42', title: 'Test panel attributs'},
            ]);
        }else{
            this.nodes = nodes;
        }
        this.data = {nodes: this.nodes, edges: new vis.DataSet()};
        this.network = new vis.Network(this.element, this.data, Common.ATTRIBUTES_OPTIONS);
    }
}
