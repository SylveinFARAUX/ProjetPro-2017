/* global vis */

import AttributesPanel from "./objects/AttributesPanel";
import StrategyPanel from "./objects/StrategyPanel";
import * as Common from "./objects/Common";
import Character from "./objects/Character";
import PopulationPanel from "./objects/PopulationPanel";

// create an array with nodes
let nodes = new vis.DataSet([
    {id: 1, label: 'Node 1', level: 0, title: 'Je s\'appelle root', enabled:true},
    {id: 2, label: 'Node 2', level: 1, enabled:true},
    {id: 3, label: 'Node 3', level: 1, enabled:true},
    {id: 4, label: 'Node 4', level: 2, enabled:true},
    {id: 5, label: 'Node 5', level: 2, enabled:true}
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

let pop = new PopulationPanel();
pop.load();
pop.loadTable(pop);