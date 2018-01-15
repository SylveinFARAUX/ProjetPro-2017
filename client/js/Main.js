import Personnage from './objects/Personnage';
import AttributCollection from './objects/AttributsCollection';
import AttributsPanel from './objects/AttributsPanel.js';
import PopulationPanel from './objects/PopulationPanel.js';
import StrategiePanel from './objects/StrategiePanel.js';
import InformationsPanel from './objects/InformationsPanel.js';
import Application from './objects/Application.js';


console.log("WWAE running...");

let p = new Personnage("test", [], "../assets/test.jpg");
let attrCol = new AttributCollection();

console.log(p);
console.log(attrCol);

// console.log("valeurs de cheveux : "+attrCol.getValeurs("cheveux"));
// console.log("cheveux blond existe : "+attrCol.existsValeur("couleur_cheveux","blond"));
// console.log("cheveux violet existe : "+attrCol.existsValeur("couleur_cheveux","violet"));
// console.log("attribut pied existe : "+attrCol.existsAttribut("pied"));
// console.log("attribut cheveux court : '"+attrCol.createAttribut("cheveux","court").toString()+"'");

let informationsDOM = document.getElementById('informations');
let strategieDOM = document.getElementById('strategie');
let attributsDOM = document.getElementById('attributs');
let populationDOM = document.getElementById('population');

let informationsPanel = new InformationsPanel(informationsDOM);
let strategiePanel = new StrategiePanel(strategieDOM);
let attributsPanel = new AttributsPanel(attributsDOM);
let populationPanel = new PopulationPanel(populationDOM);

let app = new Application(informationsPanel, strategiePanel, attributsPanel, populationPanel);

// create an array with nodes
var nodes = new vis.DataSet([
  {id: 1, label: 'Node 1'},
  {id: 2, label: 'Node 2'},
  {id: 3, label: 'Node 3'},
  {id: 4, label: 'Node 4'},
  {id: 5, label: 'Node 5'}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 1, to: 3},
  {from: 1, to: 2},
  {from: 2, to: 4},
  {from: 2, to: 5},
  {from: 3, to: 3}
]);

// create a network
var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};
var options = {};
var network = new vis.Network(container, data, options);
