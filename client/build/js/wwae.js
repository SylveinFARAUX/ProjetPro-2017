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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ATTRIBUTES_OPTIONS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STRATEGY_OPTIONS; });
/* harmony export (immutable) */ __webpack_exports__["c"] = isNetworkEvent;
/* harmony export (immutable) */ __webpack_exports__["b"] = createChildDiv;
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
class Attribute{
    constructor(jsonDesc, attribute, value){
        if(typeof jsonDesc !== "object"){
            throw new Error("@Attribute.constructor() : L'attribut jsonDesc doit être un objet JSON");
        }
        if(typeof name !== "string"){
            throw new Error("@Attribute.constructor() : L'attribut name doit être une chaîne de caractère");
        }
        this.attributeKey = attribute;
        this.name = value;
        this.short = jsonDesc["court"];
        this.long = jsonDesc["long"];
    }

    getValue(){
        return this.name;
    }

    getShortText(){
        return this.short;
    }

    getLongText(){
        return this.long;
    }

    getAttributeKey(){
        return this.attributeKey;
    }

    prettyPrint(){
        console.log(`Attribut ${this.getAttributeKey()} -> ${this.getValue()} :`);
        console.log(`\ttexte long  : "${this.getLongText()}"\n\ttexte court : "${this.getShortText()}"`);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Attribute;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_AttributesPanel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_StrategyPanel__ = __webpack_require__(7);
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AttributesCollection__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Attribute__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AttributeButton__ = __webpack_require__(6);





class AttributesPanel {
    constructor(element){
        this.attributesCollection = __WEBPACK_IMPORTED_MODULE_0__AttributesCollection__["a" /* singleton */];
        if(element === undefined) {
            throw new Error("@AttributesPanel() -> Erreur : element doit être définis");
        }
        this.element = element;

        //création des boutons
        this.buttons = [];
        let map = this.attributesCollection.getAttributesValuesKeysMap();
        map.forEach(attribute => {
           this.buttons[attribute] = [];
           map[attribute].forEach(value => {
               this.buttons[attribute][value] = undefined;
               try{
                   this.addButton(this.attributesCollection.getAttributeInstance(attribute, value));
               }catch(e){
                   console.error("@AttributesPanel.constructor() : erreur lors de l'ajout du boutons ("+attribute+","+value+") : ");
                   console.error(e);
               }
           }) ;
        });
    }

    addButton(attribute){
        if(!(attribute instanceof __WEBPACK_IMPORTED_MODULE_2__Attribute__["a" /* default */])){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        this.buttons[attribute.getAttributeKey()][attribute.getValue()] = new __WEBPACK_IMPORTED_MODULE_3__AttributeButton__["a" /* default */](attribute);
    }

    hideButton(attribute){
        if(!(attribute instanceof __WEBPACK_IMPORTED_MODULE_2__Attribute__["a" /* default */])){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        this.buttons[attribute.getAttributeKey()][attribute.getValue()].hide();
    }

    showButton(attribute){
        if(!(attribute instanceof __WEBPACK_IMPORTED_MODULE_2__Attribute__["a" /* default */])){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        this.buttons[attribute.getAttributeKey()][attribute.getValue()].show();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AttributesPanel;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Attribute__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributs__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__attributs__);



class AttributesCollection{
    constructor(){
        this.attributs = __WEBPACK_IMPORTED_MODULE_1__attributs___default.a["attributs"];
        this.attributesMap = this.getAttributesValuesKeysMap();
        this.attributesMap.forEach(attribute => {
            this.attributesMap[attribute].forEach(value => {
                this.attributesMap[attribute][value] = undefined;
            });
        });
        this.prettyPrint();
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

    getAttributeJSON(attribute, value){
        if(this.checkValueExists(attribute, value)){
            return this.attributs[attribute][value];
        }else{
            return undefined;
        }
    }

    getAttributeInstance(attribute, value){
        let jsonAttribute = this.getAttributeJSON(attribute, value);
        if(jsonAttribute !== undefined){
            if(this.attributesMap[attribute][value] === undefined) {
                let attr = new __WEBPACK_IMPORTED_MODULE_0__Attribute__["a" /* default */](jsonAttribute, attribute, value);
                this.attributesMap[attribute][value] = attr;
                return attr;
            }else{
                return this.attributesMap[attribute][value];
            }
        }
        return undefined;
    }

    checkAttributeExists(attribute){
        return typeof attribute === "string" && this.getAttributesKeys().includes(attribute);
    }

    checkValueExists(attribute, value){
        if(this.checkAttributeExists(attribute)){
            return this.getValuesKeys(attribute).includes(value);
        }else{
            return false;
        }
    }

    getAttributesValuesKeysMap(){
        let map = this.getAttributesKeys();
        if(map !== undefined){
            map.forEach(key => {
                map[key] = this.getValuesKeys(key);
            });
        }
        return map;
    }

    prettyPrint(){
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {"attributs":{"cheveux":{"chauve":{"long":"Le personnage est chauve ?","court":"Chauve ?"},"blond":{"long":"Le personnage est blond ?","court":"Cheveux blond ?"},"brun":{"long":"Le personnage est brun ?","court":"Cheveux brun ?"}},"yeux":{"marron":{"long":"Le personnage a les yeux marron ?","court":"Yeux marron ?"},"bleu":{"long":"Le personnage a les yeux bleu ?","court":"Yeux bleu ?"},"vert":{"long":"Le personnage a les yeux vert ?","court":"Yeux vert ?"}}}}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Attribute__ = __webpack_require__(1);



let nextButtonId = 0;

class AttributeButton {
    constructor(attribute, parent){
        if(!(attribute instanceof __WEBPACK_IMPORTED_MODULE_1__Attribute__["a" /* default */])){
            throw new Error("L'argument attribute doit être une instance de attribute");
        }
        if(typeof parent !== "object"){
            this.parent = document.getElementById('attributs');
        }else{
            this.parent = parent;
        }
        if(typeof this.parent !== "object"){
            throw new Error("L'argument parent doit être un Element HTML");
        }
        this.element = __WEBPACK_IMPORTED_MODULE_0__Common__["b" /* createChildDiv */](this.parent, "attributeButton"+nextButtonId);
        this.element.setAttribute("class", "attributeButton");
        nextButtonId++;
        this.hidden = false;
        this.attribute = attribute;
        this.setText(this.attribute.getLongText());
        this.element.addEventListener("click", event => this.onClick(event));
        //si on ne donne pas un consommateur de event, on perd la référence à this dans le listener
    }

    hide(){
        if(!this.hidden){
            this.element.setAttribute('style', 'display: none;');
        }
    }

    show(){
        if(this.hidden){
            this.element.removeAttribute('style');
        }
    }

    onClick(event){
        this.attribute.prettyPrint();
    }

    isHidden(){
        return this.hidden;
    }

    setText(text){
        let textNode;
        if(text === undefined) {
            textNode = document.createTextNode("");
        }else{
            textNode = document.createTextNode(text);
        }
        this.element.appendChild(textNode);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AttributeButton;



/***/ }),
/* 7 */
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
            if(__WEBPACK_IMPORTED_MODULE_0__Common__["c" /* isNetworkEvent */](event)){
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