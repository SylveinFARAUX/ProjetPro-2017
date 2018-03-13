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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__StrategyPanel__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__InformationsPanel__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AttributesPanel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PopulationPanel__ = __webpack_require__(4);





/**
 * Classe instanciant l'application, panel par panel.
 */
class Application {
    /**
     * Instancie tout les panels
     */
    constructor(){
        this.attributesPanel = new __WEBPACK_IMPORTED_MODULE_2__AttributesPanel__["a" /* default */](this);
        this.strategyPanel = new __WEBPACK_IMPORTED_MODULE_0__StrategyPanel__["a" /* default */](this);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STRATEGY_OPTIONS; });
/* harmony export (immutable) */ __webpack_exports__["b"] = isNetworkEvent;
/* unused harmony export createChildDiv */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AttributesCollection__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Attribute__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AttributeButton__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Application__ = __webpack_require__(0);






/**
 * Panel contenant les boutons des attributs
 */
class AttributesPanel {
    /**
     * Constructeur.
     * Instancie directement tout les boutons sans les cacher.
     * @param {!Application} appInstance L'instance d'application commune aux panels
     * @trhows {Error} Lance un erreur si element n'est pas une instance de HTMLElement
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
    constructor(appInstance){
        if(!(appInstance instanceof __WEBPACK_IMPORTED_MODULE_4__Application__["a" /* default */])){
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        /**
         * Singleton de la collection des attributs.
         * @member {AttributesCollection}
         */
        this.attributesCollection = __WEBPACK_IMPORTED_MODULE_0__AttributesCollection__["a" /* singleton */];
        /**
         * Element HTML du panel
         * @member {HTMLElement}
         */
        this.element = document.getElementById('attributs');
        if(!(this.element instanceof HTMLElement)) {
            throw new Error("@AttributesPanel() -> Erreur : element doit être une instance de HTMLElement d'id 'strategie-network'");
        }

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

        this.removeAttributeButton = document.getElementById("boutonAnnulerSupposition");
        this.removeAttributeButton.addEventListener("click", this.annulerSupposition);
    }

    /**
     * Met à jour l'états des boutons des attributs en fonction de la sélection de l'arbre de stratégie
     */
    updateButtonsStatus(){
        if(this.appInstance.getStrategyPanel() === undefined){
            return;
        }
        let selection = this.appInstance.getStrategyPanel().getSelection();
        if(Array.isArray(selection)){
            if(selection.length === 1){
                let node = selection[0];
                if(node.attribute !== undefined && node.attribute !== null && node.attribute instanceof __WEBPACK_IMPORTED_MODULE_2__Attribute__["a" /* default */]){
                    this.removeAttributeButton.setAttribute("class", "btnActif");
                }
                let nodes = this.appInstance.getStrategyPanel().getNodes(selection);
                if(Array.isArray(nodes) && nodes.length > 0){
                    this.updateAttributesButtons(nodes);
                }
            }else{
                this.removeAttributeButton.setAttribute("class", "btnInactif");
            }
        }
    }

    /**
     * Met à jour la liste des boutons attributs à afficher en fonction de la slection donnée
     * @param {!Object} nodes Liste des noeuds vis.js sélectionnés
     */
    updateAttributesButtons(nodes){
        //TODO
    }

    annulerSupposition(event){
        console.log("Annulation supposition");
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
            let button = new __WEBPACK_IMPORTED_MODULE_3__AttributeButton__["a" /* default */](attribute,this);
            this.buttons[attribute.getAttributeKey()][attribute.getValue()] = button;
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

    /**
     * Ajoute l'argument au noeuds sélectionné dans le panel de la stratégie,<br>
     * et met à jour le statut des boutons.
     * @param {!AttributeButton} button le bouton cliqué.
     */
    onButtonClick(button){
        if(!(button instanceof __WEBPACK_IMPORTED_MODULE_3__AttributeButton__["a" /* default */])){
            throw new Error("@AttributesPanel.onButtonClick() : L'attribut button doit être une instance de AttributeButton");
        }
        button.getAttribute().prettyPrint();
        if(this.appInstance.getStrategyPanel() !== undefined){
            this.appInstance.getStrategyPanel().setAttributeToSelection(button.getAttribute());
        }
    }

    /**
     * Retourne l'élément HTML du panel
     * @returns {HTMLElement} l'élément HTML
     */
    getElement(){
        return this.element;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (AttributesPanel);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Character__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Application__ = __webpack_require__(0);



const popSize = 24;
const charWidth = 150;
const charHeight = 150;
const borderSize = 3;

let popJson =
    {
        "characters": [
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
            },
            {
                "nom" : "Magalie",
                "img" : "./assets/charimg/magalie.png",
                "attributs" : [
                    {"key" : "cheveux", "value" : "rouquine"},
                    {"key" : "yeux", "value" : "marrons"},
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
        this.majPopInfo(popSize, 0);
    }

    load(){
        let chars = popJson;
        for(let i = 0; i < chars.characters.length; i++){
            this.population[i] = new __WEBPACK_IMPORTED_MODULE_0__Character__["a" /* default */](chars.characters[i], i);
        }
    }

    /**
     *
     * @param {!Number} i l'index du personnage
     * @returns {Character} l'instance du personnage
     */
    getChar(i){
        return this.population[i];
    }

    refresh(tabAttribute){
        let actif = 0, elim = 0;
        for(let i = 0; i < this.population.length; i++){
            let bool = this.population[i].check(tabAttribute);
            if(bool)
                actif++;
            else
                elim++;
        }
        this.majPopInfo(actif, elim);
    }

    loadTable(){
        let nbCol = Math.floor(this.element.offsetWidth/(charWidth + borderSize*2));
        nbCol = (nbCol === 0) ? 1 : nbCol;
        let nbRow = Math.ceil(popSize/nbCol);

        //vide le tableau -> utile dans le cas d'un rechargement
        this.table.innerHTML = "";

        let row;
        for(let i = 0; i < popSize; i++){
            if(i % nbCol === 0){
                row = this.addRow();
            }
            row.appendChild(this.addChar(this.getChar(i)));
        }
        this.centerCharInfos();
        this.sizeTable()
    }

    addRow(){
        let row = document.createElement("tr");
        this.table.appendChild(row);
        return row;
    }

    /**
     *
     * @param {!Character} char l'instance de Character
     * @returns {HTMLTableDataCellElement} l'élément 'td' de la colonne
     */
    addChar(char){
        let col = document.createElement("td");
        col.id = "char" + char.id;
        col.className = "charElem";
        col.innerHTML = `
								<figure id = 'charfigure` + char.id + `'>
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

    resize(){
        this.loadTable();
        var tab = new Array();//#TODO récupèré la liste d'attributs du noeud actif
        this.refresh(tab);
    }

    sizeTable(){
        let conteneurH = document.getElementById("PopulationConteneur").clientHeight;
        let titreH = document.getElementById("PopTitle").offsetHeight;
        document.getElementById("population").style.height = conteneurH - titreH + "px";
    }

    /**
     *
     * @param node ??
     */
    centerInParent(node){
        //node.style.marginTop = node.parentNode.offsetHeight/2-node.offsetHeight/2 + "px";
        node.style.marginTop = "40px";
    }

    majPopInfo(actif, elim){
        document.getElementById("nbActif").innerHTML = actif;
        document.getElementById("nbElim").innerHTML = elim;
    }

    /**
     * Créer un bouton qui désactive le personnage d'index char.
     * @param {!Number} char Index du personnage à éliminer
     * @param {!String} text Text du bouton
     * @param {!String} reason Raison de l'élimination
     * @returns {HTMLButtonElement} Le bouton HTML
     */
    createUnactiveButton(char, text, reason){
        let buttonElm = document.createElement("button");
        buttonElm.addEventListener("click", ()=>{
            this.getChar(char).unactive(reason);
        });
        buttonElm.innerText = text;
        return buttonElm;
    }

    /**
     * Créer un bouton qui active le personnage d'index char.
     * @param {!Number} char Index du personnage à éliminer
     * @param {!String} text Text du bouton
     * @returns {HTMLButtonElement} Le bouton HTLM
     */
    createActiveButton(char, text){
        let buttonElm = document.createElement("button");
        buttonElm.addEventListener("click", ()=>{
            this.getChar(char).active();
        });
        buttonElm.innerText = text;
        return buttonElm;
    }

    /**
     * Instancie les boutons d'activation/désactivation des personnages
     */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__objects_Application__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objects_PopulationPanel__ = __webpack_require__(4);



var app = new __WEBPACK_IMPORTED_MODULE_0__objects_Application__["a" /* default */]();

//listener sur le redimensionnement de la fenêtred
window.onresize = function(){app.populationPanel.resize();}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AttributesPanel__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Application__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Attribute__ = __webpack_require__(1);





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
     * @param {!Application} appInstance L'instance d'application commune aux panels
     * @throws {Error} Lance une erreur si element n'est pas une instance de HTMLElement
     * @throws {Error} Lance une erreur si appInstance n'est pas une instance de Application
     */
    constructor(appInstance){
        if(!(appInstance instanceof __WEBPACK_IMPORTED_MODULE_2__Application__["a" /* default */])){
            throw new Error("appInstance doit être l'instance de l'application commune aux panels");
        }
        this.appInstance = appInstance;
        /**
         * L'élément conteneur du panel
         * @member {HTMLElement}
         */
        this.element = document.getElementById('strategie-network');
        if(!(this.element instanceof HTMLElement)) {
            throw new Error("@StrategyPanel() -> Erreur : element doit être une instance de HTMLElement d'id 'attributs'");
        }

        /**
         * Liste des noeuds de la stratégie
         * @type {DataSet}
         */
        this.nodes = new vis.DataSet([]);

        /**
         * Liste des liens de la stratégie
         * @type {DataSet}
         */
        this.edges = new vis.DataSet([]);


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
        this.network = new vis.Network(this.element, this.data, __WEBPACK_IMPORTED_MODULE_0__Common__["a" /* STRATEGY_OPTIONS */]);
        this.setNetworkHandler("click", this.onClick);
        this.setNetworkHandler("doubleClick", this.onDoubleClick);
        instance = this;
        this.addNode(1,'',0);
    }

    /**
     * Retourne le Network de l'arbre de stratégie
     * @returns {StrategyPanel.network}
     */
    network(){
        return this.network;
    }

    /**
     * Retourne le lien avec l'id donné
     * @param id l'id du lien
     * @returns {Object|undefined} le lien ou undefined
     */
    getEdge(id){
        return this.data.edges.get(id);
    }

    /**
     * Retourne le noeud avec l'id donné
     * @param id l'id du noeud
     * @returns {Object|undefined} le noeud ou undefined
     */
    getNode(id){
        return this.data.nodes.get(id);
    }

    /**
     * Définis un handler pour l'événement donnée, s'il est utilisable avec le Network
     * @param {string} event La chaîne correspondant à l'événement
     * @param {eventCallback} handler Callback de l'événement
     * @see {@link module-Common.isNetworkEvent}
     */
    setNetworkHandler(event, handler){
        if(typeof event === 'string' && typeof handler === 'function'){
            if(__WEBPACK_IMPORTED_MODULE_0__Common__["b" /* isNetworkEvent */](event)){
                this.network.on(event, handler);
            }
        }
    }

    /**
     * Supprime le noeud donné en paramètre
     * @param {object} node le noeud à supprimer
     */
    deleteNode(node){
        //TODO éviter de supprimer la racine
        this.data.nodes.remove(node);
    }

    /**
     * Retourne le noeud père du noeud avec l'id donné
     * @param {!Number} id l'id du noeud fils
     * @returns {Number|undefined} L'id du noeud père ou undefined
     */
    getParentId(id){
        this.data.edges.forEach((edge) => {
            if (edge.to === id) {
                return edge.from;
            }
        });
        return undefined;
    }

    /**
     *  /**
     * Retourne les ids des noeuds fils du noeud avec l'id donné
     * @param {!Number} id l'id du noeud père
     * @returns {Array} Les ids des noeuds fils
     */
    getChildsIds(id){
        let sons = [];
        this.data.edges.forEach((edge) => {
            if (edge.from === id) {
                sons.push(edge.to);
            }
        });
        return sons;
    }

    /**
     * Active le noeud donné
     * @param {!Number} id le noeud à activer
     */
    enableNode(id){
        if(id === undefined){
            return;
        }
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

    /**
     * Désactive le noeud donné
     * @param {!Number} id le noeud à désactiver
     */
    disableNode(id){
        if(id === undefined){
            return;
        }
        // Remet la couleur du noeud par défaut
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
        let allDisabled = true;
        let sons = [];

        this.data.edges.forEach((edge) => {
            if (edge.from === id) {
                let son = this.getNode(edge.to);

                sons.push(son);

                if(son.enabled) {
                    allDisabled = false;
                }
            }
        });

        if (allDisabled && sons.length !== 0) {
            sons.forEach((son) => {
                this.deleteNode(son);
            });
        }
    }

    /**
     * Désactive ou active le noeud donné en paramètre et supprime les fils si désactivés
     * @param {!Number} id le noeud à désactiver ou activer
     */
    updateNode(id){
      if(this.getNode(id).enabled) {
        this.disableNode(id);
      } else {
          this.enableNode(id);
      }
    }

    /**
     * Ajout un nouveau noeud au Network. La valeur attribute de ce noeud est initialisée à null.
     * @param id l'id du noeud
     * @param label le label du noeud
     * @param level le niveau hiérarchique du noeud (le plus élevé est en bas de l'écran)
     */
    addNode(id, label, level){
        this.data.nodes.add({id, label, level});
        this.getNode(id).attribute = null;
        this.disableNode(id);
    }

    /**
     * Handler appelé lors des événement click sur le network
     * @param {object} params Objet contenant les infos de l'événement
     */
    onClick(params){
        params.event = "[original event]";
        document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
        console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
        instance.appInstance.getAttributesPanel().updateButtonsStatus();
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

    /**
     * Retourne la liste des Ids des noeuds sélectionnés
     * @returns {Array}
     */
    getSelection(){
        return this.network.getSelectedNodes();
    }

    /**
     * Retourne la liste des noeuds avec les ids données, ou la liste complète des noeuds<br>
     * si ids n'est pas un tableau ou n'est pas renseigné
     * @param {string[]} [ids] la liste des identifiants des noeuds souhaités
     * @returns {Array|DataSet} la liste des noeuds souhaités ou de tous les noeuds
     */
    getNodes(ids){
        if(Array.isArray(ids)){
            let nodes =  [];
            ids.forEach(id => {
               let node = this.getNode(id);
               if(node !== undefined){
                   nodes.push(node);
               }
            });
            return nodes;
        }else{
            return this.nodes;
        }
    }

    /**
     * Définis la valeur d'un noeuds à l'attributs donné
     * @param {!Attribute|null} attribute l'attribut à affecter au noeud sélectionné ou null
     * @throws {Error} Lance une erreur si attribute n'est pas une instance de Attribute
     */
    setAttributeToSelection(attribute){
        if(attribute !== null && !(attribute instanceof __WEBPACK_IMPORTED_MODULE_3__Attribute__["a" /* default */])){
            throw new Error("@StrategyPanel() -> Erreur : attribute doit être une instance de Attribute");
        }
        let selection = this.getSelection();
        if(Array.isArray(selection) && selection.length === 1){
            let selectedNode = selection[0];
            selectedNode.attribute = attribute;
            if(attribute === null){
                console.log("assertion removed");
            }else{
                selectedNode.setText(attribute.getShortText());
            }
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (StrategyPanel);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Attribute__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attributs__ = __webpack_require__(8);
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
/* 8 */
/***/ (function(module, exports) {

module.exports = {"attributs":{"cheveux":{"chauve":{"long":"Le personnage est chauve ?","court":"Chauve ?"},"blond":{"long":"Le personnage est blond ?","court":"Cheveux blond ?"},"brun":{"long":"Le personnage est brun ?","court":"Cheveux brun ?"}},"yeux":{"marron":{"long":"Le personnage a les yeux marron ?","court":"Yeux marron ?"},"bleu":{"long":"Le personnage a les yeux bleu ?","court":"Yeux bleu ?"},"vert":{"long":"Le personnage a les yeux vert ?","court":"Yeux vert ?"}}}}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Attribute__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AttributesPanel__ = __webpack_require__(3);




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
     * @param {!AttributePanel} attributePanel L'instance du panel des attributs
     * @throws {Error} Lance une erreur si attribute n'est une instance d'Attribute
     * @throws {Error} Lance une si l'élément d'id 'attributs' n'à pas pu être trouvé dans le cas il l'argument parent serais mal renseigné
     */
    constructor(attribute, attributePanel){
        if(!(attribute instanceof __WEBPACK_IMPORTED_MODULE_1__Attribute__["a" /* default */])){
            throw new Error("L'argument attribute doit être une instance de Attribute");
        }
        if(!(attributePanel instanceof __WEBPACK_IMPORTED_MODULE_2__AttributesPanel__["a" /* default */])){
            throw new Error("L'argument attributePanel doit être une de AttributePanel");
        }
        /**
         * Référence vers l'instance du panel des attributs
         * @member{AttributePanel}
         */
        this.attributePanel = attributePanel;

        /**
         * L'élément HTML du bouton
         * @member{Element}
         */
        this.element = document.createElement("button");
        this.element.setAttribute("id","attributeButton"+nextButtonId);
        this.element.setAttribute("class", "attributeButton");
        //si on ne donne pas un consommateur de event, on perd la référence à this dans le listener
        this.element.addEventListener("click", event => this.onClick(event));
        this.attributePanel.getElement().appendChild(this.element);
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
        this.attributePanel.onButtonClick(this);
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
        if(typeof text === "string") {
            this.element.innerText = text;
        }
    }

    /**
     * Retourne l'attribut représenté par le bouton
     * @returns {Attribute} l'attribut
     */
    getAttribute(){
        return this.attribute;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (AttributeButton);

/***/ }),
/* 10 */
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
        document.getElementById("charfigure" + this.id).style.borderColor = "grey";
        document.getElementById("charstatus" + this.id).innerHTML = "Suspect";
        this.actived = true;
    }

    unactive(reason){
        if(!this.actived)return;
        document.getElementById("charimg" + this.id).style.filter = "grayscale(100%)";
        document.getElementById("charfigure" + this.id).style.borderColor = "#A61011";
        document.getElementById("charstatus" + this.id).innerHTML = "Eliminé : " + reason;
        this.actived = false;
    }

    listeAttribute(){
        let res = "";
        for(let i = 0; i < this.attributs.length; i++){
            res += this.attributs[i].attributeKey + ":" + this.attributs[i].attributeValue + "</br>";
        }
    }

    check(tabAttributs){
        for(let i = 0; i < tabAttributs.length; i++) {
            if (this.attributs.find(tabAttributs[i]) == undefined) {
                this.unactive(tabAttributs[i].court);
                return false;
            }
        }
        return true;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Character);

/***/ })
/******/ ]);
//# sourceMappingURL=wwae.js.map