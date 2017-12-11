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
