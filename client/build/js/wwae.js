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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StrategyPanel__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InformationsPanel__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AttributesPanel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PopulationPanel__ = __webpack_require__(10);





/**
 * Classe instanciant l'application, panel par panel.
 */
class Application {
    /**
     * Instancie tout les panels
     */
    constructor(){
        this.attributesPanel = new __WEBPACK_IMPORTED_MODULE_2__AttributesPanel__["a" /* default */](document.getElementById('attributs'), this);
        this.strategyPanel = new __WEBPACK_IMPORTED_MODULE_0__StrategyPanel__["a" /* default */](document.getElementById('strategie-network'), this.attributesPanel, this);
        this.populationPanel = new __WEBPACK_IMPORTED_MODULE_3__PopulationPanel__["a" /* default */](this);
        this.informationsPanel = new __WEBPACK_IMPORTED_MODULE_1__InformationsPanel__["a" /* default */](this);
    }

    /**
     * Retourne le panel stratégie
     * @returns {StrategyPanel}
     */
    getStrategyPanel(){
        return this.strategyPanel;
    }

    /**
     * Retourne le panel Population
     * @returns {PopulationPanel}
     */
    getPopulationPanel(){
        return this.populationPanel;
    }

    /**
     * Retourne le panel Attributs
     * @returns {AttributesPanel}
     */
    getAttributesPanel(){
        return this.attributesPanel;
    }

    /**
     * Retourne le panel Informations
     * @returns {InformationsPanel}
     */
    getInformationsPanel(){
        return this.informationsPanel;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Application);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STRATEGY_OPTIONS; });
/* harmony export (immutable) */ __webpack_exports__["c"] = isNetworkEvent;
/* harmony export (immutable) */ __webpack_exports__["b"] = createChildDiv;
/** @module Common */

/**
 * L'objet décrivant l'arbre de stratégie pour Vis.js
 * @type {object}
 */
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

Object.freeze(NETWORK_EVENTS);

/**
 * Indique si le nom de l'événement donné est un événement supporté par Vis.js
 * @param {string} event le nom de l'événement
 * @returns {boolean} true si event est supporté, false sinon
 */
function isNetworkEvent(event){
    if(typeof event !== 'string')
        return false;
    else
        return NETWORK_EVENTS.includes(event);
}

/**
 * Créer un HTMLElement div et le concatène à l'element parent.
 * @param {HTMLElement} parent le parent
 * @param {!string} childId l'id de l'élément à créer
 * @returns {HTMLElement|undefined} l'élément créé ou undefined si parent n'est pas un HTMLElement ou si childID n'est pas une chaîne
 */
function createChildDiv(parent, childId){
    if(!(parent instanceof HTMLElement) || typeof childId !== "string"){
        return undefined;
    }else{
        let child = document.createElement('div');
        child.setAttribute('id', childId);
        parent.appendChild(child);
        return child;
    }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Représente un attribut d'un personnage avec une valeur.
 * Chaque instance d'Attribute ne contient qu'une seule valeur.
 */
class Attribute{
    /**
     * Constructeur
     * @param {!AttributeJSON} jsonDesc Un objet JSON décrivant l'attribut
     * @param {!string} attribute Le nom de l'attribut (ex : 'cheveux')
     * @param {!string} value La valeur de l'attribut (ex : 'chauve')
     * @throws {Error} Lance une erreur si jsonDesc n'est pas un objet ou si attribute ou value ne sont pas une chaîne
     */
    constructor(jsonDesc, attribute, value){
        if(typeof jsonDesc !== "object"){
            throw new Error("@Attribute.constructor() : L'argument jsonDesc doit être un objet JSON");
        }
        if(typeof attribute !== "string"){
            throw new Error("@Attribute.constructor() : L'argument attribute doit être une chaîne de caractère");
        }
        if(typeof value !== "string"){
            throw new Error("@Attribute.constructor() : L'argument value doit être une chaîne de caractère");
        }
        /**
         * Le nom de l'attribut
         * @member {string}
         */
        this.attributeKey = attribute;
        /**
         * La valeur de l'attribut
         * @member {string}
         */
        this.value = value;
        /**
         * Le test de la proposition au format court
         * @member {string}
         */
        this.short = jsonDesc["court"];
        /**
         * Le test de la proposition au format long
         * @member {string}
         */
        this.long = jsonDesc["long"];
    }

    /**
     * Retourne la valeur de l'attribut (ex : 'chauve')
     * @returns {string}
     */
    getValue(){
        return this.value;
    }

    /**
     * Retourne la proposition de l'attribut au format court
     * @returns {string}
     */
    getShortText(){
        return this.short;
    }

    /**
     * Retourne la proposition de l'attribut au format long
     * @returns {string}
     */
    getLongText(){
        return this.long;
    }

    /**
     * Retourne le nom de l'attribut
     * @returns {string}
     */
    getAttributeKey(){
        return this.attributeKey;
    }

    /**
     * Affiche l'attribut dans la console
     */
    prettyPrint(){
        console.log(`Attribut ${this.getAttributeKey()} -> ${this.getValue()} :`);
        console.log(`\ttexte long  : "${this.getLongText()}"\n\ttexte court : "${this.getShortText()}"`);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Attribute);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AttributesCollection__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Attribute__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AttributeButton__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Application__ = __webpack_require__(0);






/**
 * Panel contenant les boutons des attributs
 */
class AttributesPanel {
    /**
     * Constructeur.
     * Instancie directement tout les boutons sans les cacher.
     * @param {!HTMLElement} element La div servant de conteneurs pour les boutons (censé être la div avec l'id 'attributs')
     * @param {!Application} appInstance L'instance d'application commune aux panels
     * @trhows {Error} Lance un erreur si element n'est pas une instance de HTMLElement
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
    constructor(element, appInstance){
        if(!(appInstance instanceof __WEBPACK_IMPORTED_MODULE_4__Application__["a" /* default */])){
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        /**
         * Singleton de la collection des attributs.
         * @member {AttributesCollection}
         */
        this.attributesCollection = __WEBPACK_IMPORTED_MODULE_0__AttributesCollection__["a" /* singleton */];
        if(!(element instanceof HTMLElement)) {
            throw new Error("@AttributesPanel() -> Erreur : element doit être une instance de HTMLElement");
        }
        /**
         * Element HTML du panel
         * @member {HTMLElement}
         */
        this.element = element;

        //création des boutons
        /**
         * Liste des boutons du panel
         * @member {Array<AttributeButton>}
         */
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

    /**
     * Ajoute un bouton avec l'attribut donné s'il n'existe pas déja
     * @param {!Attribute} attribute l'instance de l'attribut
     * @throws {Error} Lance un erreur si attribute n'est pas une instance de Attribute
     */
    addButton(attribute){
        if(!(attribute instanceof __WEBPACK_IMPORTED_MODULE_2__Attribute__["a" /* default */])){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        if(!(this.buttons[attribute.getAttributeKey()][attribute.getValue()] instanceof __WEBPACK_IMPORTED_MODULE_3__AttributeButton__["a" /* default */])){
            this.buttons[attribute.getAttributeKey()][attribute.getValue()] = new __WEBPACK_IMPORTED_MODULE_3__AttributeButton__["a" /* default */](attribute,this.element);
        }
    }

    /**
     * Chache le bouton correspondant à l'attribut s'il existe
     * @param {!Attribute} attribute l'instance de l'attribut
     * @throws {Error} Lance un erreur si attribute n'est pas une instance de Attribute
     */
    hideButton(attribute){
        if(!(attribute instanceof __WEBPACK_IMPORTED_MODULE_2__Attribute__["a" /* default */])){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        if(this.buttons[attribute.getAttributeKey()][attribute.getValue()] instanceof __WEBPACK_IMPORTED_MODULE_2__Attribute__["a" /* default */]){
            this.buttons[attribute.getAttributeKey()][attribute.getValue()].hide();
        }
    }

    /**
     * Rend visible le bouton correspondant à l'attribut s'il existe
     * @param {!Attribute} attribute l'instance de l'attribut
     * @throws {Error} Lance un erreur si attribute n'est pas une instance de Attribute
     */
    showButton(attribute){
        if(!(attribute instanceof __WEBPACK_IMPORTED_MODULE_2__Attribute__["a" /* default */])){
            throw new Error("@AttributesPanel.addButton() : L'attribut attribute doit être une instance de Attribute");
        }
        if(this.buttons[attribute.getAttributeKey()][attribute.getValue()] instanceof __WEBPACK_IMPORTED_MODULE_2__Attribute__["a" /* default */]) {
            this.buttons[attribute.getAttributeKey()][attribute.getValue()].show();
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (AttributesPanel);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_Application__ = __webpack_require__(0);


new __WEBPACK_IMPORTED_MODULE_0__objects_Application__["a" /* default */]();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AttributesPanel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Application__ = __webpack_require__(0);




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
     * @param {!HTMLElement} element L'élement HTML conteneur de l'arbre de stratégie
     * @param {!AttributesPanel} attributesPanel Une instance du panel des attributs
     * @param {!Application} appInstance L'instance d'application commune aux panels
     * @throws {Error} Lance une erreur si element n'est pas une instance de HTMLElement
     * @throws {Error} Lance une erreur si attributesPanel n'est pas une instance de AttributesPanel
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
    constructor(element, attributesPanel, appInstance){
        if(!(appInstance instanceof __WEBPACK_IMPORTED_MODULE_2__Application__["a" /* default */])){
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        if(!(element instanceof HTMLElement)) {
            throw new Error("@StrategyPanel() -> Erreur : element doit être une instance de HTMLElement");
        }
        if(!(attributesPanel instanceof __WEBPACK_IMPORTED_MODULE_1__AttributesPanel__["a" /* default */])){
            throw new Error("@StrategyPanel() -> Erreur : attributsPanel doit être une instance de AttributesPanel");
        }
        /**
         * L'élément conteneur du panel
         * @member {HTMLElement}
         */
        this.element = element;

        /**
         * Liste des noeuds de la stratégie
         * @type {DataSet}
         */
        this.nodes = new vis.DataSet([
            {id: 1, label: 'Node 1', level: 0, title: 'Je s\'appelle root', enabled:true},
            {id: 2, label: 'Node 2', level: 1, enabled:true},
            {id: 3, label: 'Node 3', level: 1, enabled:true},
            {id: 4, label: 'Node 4', level: 2, enabled:true},
            {id: 5, label: 'Node 5', level: 2, enabled:true}
        ]);

        /**
         * Liste des liens de la stratégie
         * @type {DataSet}
         */
        this.edges = new vis.DataSet([
            {from: 1, to: 2},
            {from: 1, to: 3},
            {from: 2, to: 4},
            {from: 2, to: 5},
            {from: 3}
        ]);


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
        this.network = new vis.Network(element, this.data, __WEBPACK_IMPORTED_MODULE_0__Common__["a" /* STRATEGY_OPTIONS */]);
        this.addNode(6, 'Node 6', 2);
        this.setNetworkHandler("click", this.onClick);
        this.setNetworkHandler("doubleClick", this.onDoubleClick);
        instance = this;
    }

    /**
     * Retourne le Network de l'arbre de stratégie
     * @returns {StrategyPanel.network}
     */
    network(){
        return this.network;
    }

    /**
     * Définis un handler pour l'événement donnée, s'il est utilisable avec le Network
     * @param {string} event La chaîne correspondant à l'événement
     * @param {eventCallback} handler Callback de l'événement
     * @see {@link module-Common.isNetworkEvent}
     */
    setNetworkHandler(event, handler){
        if(typeof event === 'string' && typeof handler === 'function'){
            if(__WEBPACK_IMPORTED_MODULE_0__Common__["c" /* isNetworkEvent */](event)){
                this.network.on(event, handler);
            }
        }
    }

    /**
     * Supprime le noeud donné en paramètre
     * @param {object} node le noeud à supprimer
     */
    deleteNode(node){
        this.data.nodes.remove(node);
    }

    /**
     * Désactive ou active le noeud donné en paramètre et supprime les fils si désactivés
     * @param {object} node le noeud à désactiver ou activer
     */
    updateNode(id){
      var node = this.data.nodes.get(id);

      if(node.enabled) {
        // Change le couleur du noeud en gris
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
        var allDisabled = true;
        var sons = [];

        this.data.edges.forEach((edge) => {
          if (edge.from == node.id) {
            let son = this.data.nodes.get(edge.to);

            sons.push(son);

            if(son.enabled) {
              allDisabled = false;
            }
          }
        });

        if (allDisabled && sons.length != 0) {
          sons.forEach((son) => {
            this.deleteNode(son);
          });
        }

      } else {
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
    }

    /**
     * Ajout un nouveau noeud au Network
     * @param id l'id du noeud
     * @param label le label du noeud
     * @param level le niveau hiérarchique du noeud (le plus élevé est en bas de l'écran)
     */
    addNode(id, label, level){
        this.data.nodes.add({id, label, level});
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
        if(clickedNode !== undefined){
            instance.updateNode(clickedNode);
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (StrategyPanel);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Attribute__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__attributs__);



/**
 * @typedef {Object} AttributeJSON
 * @property {string} long Une question décrivant la valeur l'attribut concerné (utilisée avec les boutons)
 * @property {string} court La même question au format plus court (utilisée pour l'arbre de stratégie)
 */

/**
 * Gère une collection d'Attribute.
 * Cette classe est implémentée en tant que singleton accessible
 * avec AttributesCollection.singleton, en supposant avoir importé
 * la classe sous ce même nom
 */
class AttributesCollection{

    /**
     * Stocke le JSON dans 'attributs', construits un tableau 2D
     * destiné à stocker chaque instance d'Attribute de sorte à
     * ne pas dupliquer les instances inutilement.
     */
    constructor(){
        /**
         * Le JSON contenant les attributs et leurs valeurs
         * @member {Object}
         */
        this.attributs = __WEBPACK_IMPORTED_MODULE_1__attributs___default.a["attributs"];
        /**
         * Un tableau 2D servant à contenir chaque instances d'Attribute.
         * Chaque Attribute n'est effectivement instancié qu'après l'appel de la
         * méthode getAttributeInstance().
         * @member {Attribute[][]}
         */
        this.attributesMap = this.getAttributesValuesKeysMap();
        this.attributesMap.forEach(attribute => {
            this.attributesMap[attribute].forEach(value => {
                this.attributesMap[attribute][value] = undefined;
            });
        });
        this.prettyPrint();
    }

    /**
     * Retourne la liste des attributs contenu dans la collection.
     * @returns {string[]}
     */
    getAttributesKeys(){
        return _.allKeys(this.attributs);
    }

    /**
     * Retourne la liste des valeurs pour un attribut, ou undefined s'il n'existe pas.
     * @param attribute l'attribut
     * @returns {string[]}
     */
    getValuesKeys(attribute){
        if(this.checkAttributeExists(attribute)){
            return _.allKeys(this.attributs[attribute]);
        }else{
            return undefined;
        }
    }

    /**
     * Retourne l'objet JSON représentant un Attribute correspondant à l'attribut
     * de valeurs donnés, ou undefined si l'un ou l'autre n'existe pas.
     * @param attribute l'attribut
     * @param value la valeur
     * @returns {AttributeJSON|undefined}
     */
    getAttributeJSON(attribute, value){
        if(this.checkValueExists(attribute, value)){
            return this.attributs[attribute][value];
        }else{
            return undefined;
        }
    }

    /**
     * Retourne l'instance d'Attribute pour un attribut et une valeur données.
     * @param attribute l'attribut
     * @param value la valeur
     * @returns {Attribute|undefined}
     */
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

    /**
     * Vérifie que l'attribut existe dans la collection.
     * @param attribute l'attribut
     * @returns {boolean} true si l'attribut existe, false sinon.
     */
    checkAttributeExists(attribute){
        return typeof attribute === "string" && this.getAttributesKeys().includes(attribute);
    }

    /**
     * Vérifie que la valeur existe pour l'attribut donné
     * @param attribute l'attribut
     * @param value la valeur
     * @returns {boolean} true si la valeur existe pour l'attribut donné, false sinon.
     */
    checkValueExists(attribute, value){
        if(this.checkAttributeExists(attribute)){
            return this.getValuesKeys(attribute).includes(value);
        }else{
            return false;
        }
    }

    /**
     * Retourne un tableau 2D contenant les listes des valeurs pour chaque attributs.
     * @example
     * //Supposons que le JSON contient un attribut 'yeux' ayant deux valeurs, 'bleu' et 'vert'
     * let map = singleton.getAttributesValuesKeysMap();
     * console.log(map['yeux']); //{'bleu','vert'}
     * @returns {string[][]}
     */
    getAttributesValuesKeysMap(){
        let map = this.getAttributesKeys();
        if(map !== undefined){
            map.forEach(key => {
                map[key] = this.getValuesKeys(key);
            });
        }
        return map;
    }

    /**
     * Affiche le contenu de la collection dans la console
     */
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

/**
 * Singleton de la collection instancier au démarrage de l'application.
 * @type {AttributesCollection}
 */
const singleton = new AttributesCollection();
/* harmony export (immutable) */ __webpack_exports__["a"] = singleton;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"attributs":{"cheveux":{"chauve":{"long":"Le personnage est chauve ?","court":"Chauve ?"},"blond":{"long":"Le personnage est blond ?","court":"Cheveux blond ?"},"brun":{"long":"Le personnage est brun ?","court":"Cheveux brun ?"}},"yeux":{"marron":{"long":"Le personnage a les yeux marron ?","court":"Yeux marron ?"},"bleu":{"long":"Le personnage a les yeux bleu ?","court":"Yeux bleu ?"},"vert":{"long":"Le personnage a les yeux vert ?","court":"Yeux vert ?"}}}}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Attribute__ = __webpack_require__(2);



let nextButtonId = 0;

/**
 * Représente un bouton lié à un attribut.
 * Utilisé dans le panel 'Attributs'
 * @see Attribute
 */
class AttributeButton {
    /**
     * Constructeur.
     * Dans le cas ou l'argument parent n'est pas un objet ou n'est pas renseigné,
     * on tente de trouver la div avec l'id 'attributs' à la place.
     * @param {!Attribute} attribute Une instance d'Attribute
     * @param {?HTMLElement} parent L'élément parent (censé être la div du panel 'Attributs')
     * @throws {Error} Lance une erreur si attribute n'est une instance d'Attribute
     * @throws {Error} Lance une si l'élément d'id 'attributs' n'à pas pu être trouvé dans le cas il l'argument parent serais mal renseigné
     */
    constructor(attribute, parent){
        if(!(attribute instanceof __WEBPACK_IMPORTED_MODULE_1__Attribute__["a" /* default */])){
            throw new Error("L'argument attribute doit être une instance de Attribute");
        }
        if(!(parent instanceof HTMLElement)){
            this.parent = document.getElementById('attributs');
            if(!(parent instanceof HTMLElement)){
                throw new Error("L'argument parent doit être un Element HTML");
            }
        }else{
            this.parent = parent;
        }

        /**
         * L'élément HTML du bouton
         * @member{Element}
         */
        this.element = __WEBPACK_IMPORTED_MODULE_0__Common__["b" /* createChildDiv */](this.parent, "attributeButton"+nextButtonId);
        this.element.setAttribute("class", "attributeButton");
        nextButtonId++;
        /**
         * Indique si le bouton est caché ou visible
         * @member{boolean}
         */
        this.hidden = false;
        /**
         * L'instance d'Attribute liée à ce bouton
         * @member{Attribute}
         */
        this.attribute = attribute;
        this.setText(this.attribute.getLongText());
        this.element.addEventListener("click", event => this.onClick(event));
        //si on ne donne pas un consommateur de event, on perd la référence à this dans le listener
    }

    /**
     * Cache le bouton s'il est visible
     */
    hide(){
        if(!this.hidden){
            this.element.setAttribute('style', 'display: none;');
        }
    }

    /**
     * Rend visible le bouton s'il est caché
     */
    show(){
        if(this.hidden){
            this.element.removeAttribute('style');
        }
    }

    /**
     * Handler de l'événement 'onClick' sur l'élément HTML du bouton
     * @param {Event} event l'événement onClick
     */
    onClick(event){
        this.attribute.prettyPrint();
    }

    /**
     * Indique si le bouton est caché ou visible
     * @returns {boolean} true si le bouton est caché, false s'il est visible
     */
    isHidden(){
        return this.hidden;
    }

    /**
     * Définis le texte du bouton
     * @param {?string} text le nouveau texte
     */
    setText(text){
        let textNode;
        if(text === undefined) {
            textNode = document.createTextNode("");
        }else{
            textNode = document.createTextNode(text);
        }
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
        this.element.appendChild(textNode);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (AttributeButton);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Application__ = __webpack_require__(0);


/**
 * Classe repésentant le panel Informations
 */
class InformationsPanel {
    /**
     *
     * @param {!Application} appInstance L'instance d'application commune aux panels
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
  constructor(appInstance){
        if(!(appInstance instanceof __WEBPACK_IMPORTED_MODULE_0__Application__["a" /* default */])){
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
  }
}
/* harmony default export */ __webpack_exports__["a"] = (InformationsPanel);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Character__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Application__ = __webpack_require__(0);



const popSize = 24;
const charWidth = 150;
const charHeight = 150;
let popJson =
    {
        "characters": [
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "vert"},
                    {"key" : "personalité", "value" : "salope"}
                ]
            },
            {
                "nom" : "Joseph",
                "img" : "./assets/charimg/joseph.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "blond"},
                    {"key" : "yeux", "value" : "bleu"},
                    {"key" : "personalité", "value" : "nazi"}
                ]
            }
        ]
    };

/**
 * Classe représentant le panel de la population
 */
class PopulationPanel {

    /**
     *
     * @param {!Application} appInstance L'instance d'application commune aux panels
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
    constructor(appInstance) {
        if(!(appInstance instanceof __WEBPACK_IMPORTED_MODULE_1__Application__["a" /* default */])){
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        this.population = new Array(popSize);
        this.table = document.getElementById("tableChar");
        this.element = document.getElementById("population");
        this.load();
        this.createButtons();
        this.loadTable();
    }

    load(){
        let chars = popJson;
        for(let i = 0; i < chars.characters.length; i++){
            this.population[i] = new __WEBPACK_IMPORTED_MODULE_0__Character__["a" /* default */](chars.characters[i], i);
        }
    }

    getChar(i){
        return this.population[i];
    }

    refresh(tabAttribute){
        for(let i = 0; i < this.population.length; i++){
            let bool = this.population[i].check(tabAttribute);
        }
    }

    loadTable(){
        let nbCol = Math.floor(this.element.offsetWidth/charWidth);
        nbCol = (nbCol === 0) ? 1 : nbCol;
        let nbRow = Math.ceil(popSize/nbCol);

        let row;
        for(let i = 0; i < popSize; i++){
            if(i % nbCol === 0){
                row = this.addRow();
            }
            row.appendChild(this.addChar(this.getChar(i%2)));
        }

        this.centerCharInfos();
    }

    addRow(){
        let row = document.createElement("tr");
        this.table.appendChild(row);
        return row;
    }

    addChar(char){
        let col = document.createElement("td");
        col.id = "char" + char.id;
        col.className = "charElem";
        col.innerHTML = `
								<figure>
									<img src ='` + char.img + `' alt='Perso` + char.id + `' id = 'charimg` + char.id + `'/>
									<figcaption>
										<div class = 'charInfo'>
											<h3 id = 'charName'>` + char.nom +`</h3>
											<p id = 'charstatus` + char.id + `'>Suspect</p>
											<div class = "CharTooltip">
												<span class="arrow"></span>
												<span class='CharTooltip-text'>`+ char.listeAttribute() + `</span>
											</div>
										</div>
									</figcaption>
								</figure>
							`;
        return  col;
    }

    centerCharInfos(){
        let charinfo = document.getElementsByClassName("charInfo");
        for(let i = 0; i < charinfo.length; i++){
            this.centerInParent(charinfo[i]);
        }
    }

    centerInParent(node){
        //node.style.marginTop = node.parentNode.offsetHeight/2-node.offsetHeight/2 + "px";
        node.style.marginTop = "50px";
    }

    createUnactiveButton(char, text, reason){
        let buttonElm = document.createElement("button");
        buttonElm.addEventListener("click", ()=>{
            this.getChar(char).unactive(reason);
        });
        buttonElm.innerText = text;
        return buttonElm;
    }

    createActiveButton(char, text){
        let buttonElm = document.createElement("button");
        buttonElm.addEventListener("click", ()=>{
            this.getChar(char).active();
        });
        buttonElm.innerText = text;
        return buttonElm;
    }

    createButtons(){
        let buttonsElm = document.getElementById("populationButtons");
        buttonsElm.appendChild(this.createUnactiveButton(0, "Désactive perso 0","Trop moche"));
        buttonsElm.appendChild(this.createActiveButton(0, "Active perso 0"));
        buttonsElm.appendChild(this.createUnactiveButton(1, "Désactive perso 1","Cheveux blond"));
        buttonsElm.appendChild(this.createActiveButton(1, "Active perso 1"));
    }
}

/* harmony default export */ __webpack_exports__["a"] = (PopulationPanel);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Character{
    constructor(json, id){
        this.id = id;
        this.nom = json.nom;
        this.img = json.img;
        this.actived = true;
        this.attributs = [];
        for(let i = 0; i < json.attributs.length; i++){
            //this.attributs.push(getAttributeInstance(json.attributs[i].key, json.attributs[i].value));
        }
    }


    getImg(){
        return this.img;
    }

    getNom(){
        return this.nom;
    }

    getAttributs(){
        return this.attributs;
    }

    active(){
        if(this.actived)return;
        document.getElementById("charimg" + this.id).style.filter = "";
        document.getElementById("charstatus" + this.id).innerHTML = "Suspect";
        this.actived = true;
    }

    unactive(reason){
        if(!this.actived)return;
        document.getElementById("charimg" + this.id).style.filter = "grayscale(100%)";
        document.getElementById("charstatus" + this.id).innerHTML = "Eliminé : " + reason;
        this.actived = false;
    }

    listeAttribute(){
        let res = "";
        for(let i = 0; i < this.attributs.length; i++){
            res += this.attributs[i].attributeKey + ":" + this.attributs[i].attributeValue + "</br>";
        }
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ })
/******/ ]);
//# sourceMappingURL=wwae.js.map