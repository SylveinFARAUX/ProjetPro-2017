/* global vis */

import AttributesPanel from "./objects/AttributesPanel";
import StrategyPanel from "./objects/StrategyPanel";
import * as Common from "./objects/Common";
// create an array with nodes
let nodes = new vis.DataSet([
    {id: 1, label: 'Node 1', level: 0, title: 'Je s\'appel root'},
    {id: 2, label: 'Node 2', level: 1},
    {id: 3, label: 'Node 3', level: 1},
    {id: 4, label: 'Node 4', level: 2},
    {id: 5, label: 'Node 5', level: 2}
]);

// create an array with edges
let edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 1, to: 3},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 3}
]);

new StrategyPanel(document.getElementById('strategie-network'), nodes, edges, new AttributesPanel(document.getElementById('attributs')));