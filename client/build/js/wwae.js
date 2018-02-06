/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ATTRIBUTES_OPTIONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STRATEGY_OPTIONS; });
/* harmony export (immutable) */ __webpack_exports__["b"] = isNetworkEvent;
/* unused harmony export createChildDiv */
let ATTRIBUTES_OPTIONS = {
    locale: 'en', //si on met fr ça casse
    height: '100%',
    width: '100%',
    autoResize: true,
    edges:{
        arrows: {
            to: true //affiche la flêche côté arrivé
        }
    },
    interaction: {
        hover: true //active la gestion des événements de survol des noeuds
    },
    manipulation: {
        enabled: false //true -> affiche le petit menu edit
    },
    physics: {
        enabled: false
    }
};

let STRATEGY_OPTIONS = {
    locale: 'en', //si on met fr ça casse
    height: '100%',
    width: '100%',
    autoResize: true,
    edges:{
        arrows: {
            to: true //affiche la flêche côté arrivé
        }
    },
    layout: {
        hierarchical: {
            direction: 'UD' //diréction de la hiérachisation de l'arbre du haut vers le bas (Up Down)
        }
    },
    interaction: {
        hover: true //active la gestion des événements de survol des noeuds
    },
    manipulation: {
        enabled: false //true -> affiche le petit menu edit
    }
};


/**
 * Evenements disponible pour les ojets Vis.Network
 * @type {string[]}
 */
const NETWORK_EVENTS =   [
                                    "click", "doubleClick", "dragStart", "dragging", "dragEnd", "zoom", "showPopup", "hidePopup",
                                    "select", "selectNode", "selectEdge", "deselectNode", "deselectEdge",
                                    "hoverNode", "hoverEdge", "blurNode", "blurEdge"
                                ];

function isNetworkEvent(event){
    if(typeof event !== 'string')
        return false;
    else
        return NETWORK_EVENTS.includes(event);
}

function createChildDiv(parent, childId){
    if(typeof parent !== "object" || typeof childId !== "string"){
        return undefined;
    }else{
        let child = document.createElement('div');
        child.setAttribute('id', childId);
        parent.appendChild(child);
        return child;
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_AttributesPanel__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_StrategyPanel__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_Common__ = __webpack_require__(0);
/* global vis */





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

new __WEBPACK_IMPORTED_MODULE_1__objects_StrategyPanel__["a" /* default */](document.getElementById('strategie-network'), nodes, edges, new __WEBPACK_IMPORTED_MODULE_0__objects_AttributesPanel__["a" /* default */](document.getElementById('attributs')));

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AttributesCollection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Common__ = __webpack_require__(0);



class AttributesPanel {
    constructor(element){
        this.attributsCollection = __WEBPACK_IMPORTED_MODULE_0__AttributesCollection__["a" /* singleton */];
        if(element === undefined) {
            throw new Error("@AttributesPanel() -> Erreur : element doit être définis");
        }
        this.element = element;
        this.buttons = [];
        this.attributsCollection.getAttributeValue();
    }

    addButton(attribute){

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AttributesPanel;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Attribute__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__attributs__);



class AttributesCollection{
    constructor(){
        this.attributs = __WEBPACK_IMPORTED_MODULE_1__attributs___default.a["attributs"];
        this.toString();
        console.log("hey !");
    }
    
    getAttributesKeys(){
        return _.allKeys(this.attributs);
    }

    getValuesKeys(attribute){
        if(this.checkAttributeExists(attribute)){
            return _.allKeys(this.attributs[attribute]);
        }else{
            return undefined;
        }
    }

    getAttributeValue(attribute, value){
        if(this.checkValueExists()){
            return this.attributs[attribute][value];
        }else{
            return undefined;
        }
    }

    createAttributeInstance(attribute, value){
        let jsonAttribute = this.getAttributeValue(attribute, value);
        if(jsonAttribute === undefined){
            return new __WEBPACK_IMPORTED_MODULE_0__Attribute__["a" /* default */](jsonAttribute);
        }
        return undefined;
    }

    checkAttributeExists(attribute){
        return typeof attribute === "string" && this.getAttributesKeys().includes(attribute);
    }

    checkValueExists(attribute, value){
        if(this.checkAttributeExists(attribute)){
            return this.getValuesKeys().includes(value);
        }else{
            return false;
        }
    }

    getAttributesValuesKeysMap(){
        //FIXME retourne une map vide
        let map = [];
        let attributeKeys = this.getAttributesKeys();
        if(attributeKeys !== undefined){
            attributeKeys.forEach( key => {
                map[key] = this.getValuesKeys(key);
            });
        }
        return map;
    }

    toString(){
        let map = this.getAttributesValuesKeysMap();
        if(map.length < 1){
            console.log("Map des attributs vide");
        }else{
            map.forEach(attribute => {
                console.log(`Valeurs pour l'attribut '${attribute}' :`);
                map[attribute].forEach(value => {
                    console.log(`\t${value}`) ;
                });
            });
        }
    }
}

const singleton = new AttributesCollection();
/* harmony export (immutable) */ __webpack_exports__["a"] = singleton;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Attribute{
    constructor(jsonDesc){
        //TODO
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Attribute;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"attributs":{"cheveux":{"chauve":{"long":"Le personnage est chauve ?","court":"Chauve ?"},"blond":{"long":"Le personnage est blond ?","court":"Cheveux blond ?"},"brun":{"long":"Le personnage est brun ?","court":"Cheveux brun ?"}},"yeux":{"marron":{"long":"Le personnage a les yeux marron ?","court":"Yeux marron ?"},"bleu":{"long":"Le personnage a les yeux bleu ?","court":"Yeux bleu ?"},"vert":{"long":"Le personnage a les yeux vert ?","court":"Yeux vert ?"}}}}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(0);
/* global strategyPanelInstance */


//on a besoin de garder un pointeur vers une instance pour y accèder dans
//les handlers des événements de vis.js car ces dèrnier sont
//appelé avec un contexte différents définies par vis.js
let instance;

class StrategyPanel {
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

        this.network = new vis.Network(element, this.data, __WEBPACK_IMPORTED_MODULE_0__Common__["a" /* STRATEGY_OPTIONS */]);
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
            if(__WEBPACK_IMPORTED_MODULE_0__Common__["b" /* isNetworkEvent */](event)){
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
/* harmony export (immutable) */ __webpack_exports__["a"] = StrategyPanel;



/***/ })
/******/ ]);
//# sourceMappingURL=wwae.js.map