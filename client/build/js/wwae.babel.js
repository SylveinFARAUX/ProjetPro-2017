'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 1);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* unused harmony export ATTRIBUTES_OPTIONS */
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function () {
        return STRATEGY_OPTIONS;
    });
    /* harmony export (immutable) */__webpack_exports__["b"] = isNetworkEvent;
    /* unused harmony export createChildDiv */
    var ATTRIBUTES_OPTIONS = {
        locale: 'en', //si on met fr ça casse
        height: '100%',
        width: '100%',
        autoResize: true,
        edges: {
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

    var STRATEGY_OPTIONS = {
        locale: 'en', //si on met fr ça casse
        height: '100%',
        width: '100%',
        autoResize: true,
        edges: {
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
    var NETWORK_EVENTS = ["click", "doubleClick", "dragStart", "dragging", "dragEnd", "zoom", "showPopup", "hidePopup", "select", "selectNode", "selectEdge", "deselectNode", "deselectEdge", "hoverNode", "hoverEdge", "blurNode", "blurEdge"];

    function isNetworkEvent(event) {
        if (typeof event !== 'string') return false;else return NETWORK_EVENTS.includes(event);
    }

    function createChildDiv(parent, childId) {
        if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) !== "object" || typeof childId !== "string") {
            return undefined;
        } else {
            var child = document.createElement('div');
            child.setAttribute('id', childId);
            parent.appendChild(child);
            return child;
        }
    }

    /***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__objects_AttributesPanel__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__objects_StrategyPanel__ = __webpack_require__(6);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__objects_Common__ = __webpack_require__(0);
    /* global vis */

    // create an array with nodes
    var nodes = new vis.DataSet([{ id: 1, label: 'Node 1', level: 0, title: 'Je s\'appel root' }, { id: 2, label: 'Node 2', level: 1 }, { id: 3, label: 'Node 3', level: 1 }, { id: 4, label: 'Node 4', level: 2 }, { id: 5, label: 'Node 5', level: 2 }]);

    // create an array with edges
    var edges = new vis.DataSet([{ from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }, { from: 3 }]);

    new __WEBPACK_IMPORTED_MODULE_1__objects_StrategyPanel__["a" /* default */](document.getElementById('strategie-network'), nodes, edges, new __WEBPACK_IMPORTED_MODULE_0__objects_AttributesPanel__["a" /* default */](document.getElementById('attributs')));

    /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__AttributesCollection__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__Common__ = __webpack_require__(0);

    var AttributesPanel = function () {
        function AttributesPanel(element) {
            _classCallCheck(this, AttributesPanel);

            this.attributsCollection = __WEBPACK_IMPORTED_MODULE_0__AttributesCollection__["a" /* singleton */];
            if (element === undefined) {
                throw new Error("@AttributesPanel() -> Erreur : element doit être définis");
            }
            this.element = element;
            this.buttons = [];
            this.attributsCollection.getAttributeValue();
        }

        _createClass(AttributesPanel, [{
            key: 'addButton',
            value: function addButton(attribute) {}
        }]);

        return AttributesPanel;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = AttributesPanel;

    /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__Attribute__ = __webpack_require__(4);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__attributs__ = __webpack_require__(5);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__attributs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__attributs__);

    var AttributesCollection = function () {
        function AttributesCollection() {
            _classCallCheck(this, AttributesCollection);

            this.attributs = __WEBPACK_IMPORTED_MODULE_1__attributs___default.a["attributs"];
            this.toString();
            console.log("hey !");
        }

        _createClass(AttributesCollection, [{
            key: 'getAttributesKeys',
            value: function getAttributesKeys() {
                return _.allKeys(this.attributs);
            }
        }, {
            key: 'getValuesKeys',
            value: function getValuesKeys(attribute) {
                if (this.checkAttributeExists(attribute)) {
                    return _.allKeys(this.attributs[attribute]);
                } else {
                    return undefined;
                }
            }
        }, {
            key: 'getAttributeValue',
            value: function getAttributeValue(attribute, value) {
                if (this.checkValueExists()) {
                    return this.attributs[attribute][value];
                } else {
                    return undefined;
                }
            }
        }, {
            key: 'createAttributeInstance',
            value: function createAttributeInstance(attribute, value) {
                var jsonAttribute = this.getAttributeValue(attribute, value);
                if (jsonAttribute === undefined) {
                    return new __WEBPACK_IMPORTED_MODULE_0__Attribute__["a" /* default */](jsonAttribute);
                }
                return undefined;
            }
        }, {
            key: 'checkAttributeExists',
            value: function checkAttributeExists(attribute) {
                return typeof attribute === "string" && this.getAttributesKeys().includes(attribute);
            }
        }, {
            key: 'checkValueExists',
            value: function checkValueExists(attribute, value) {
                if (this.checkAttributeExists(attribute)) {
                    return this.getValuesKeys().includes(value);
                } else {
                    return false;
                }
            }
        }, {
            key: 'getAttributesValuesKeysMap',
            value: function getAttributesValuesKeysMap() {
                var _this = this;

                var map = this.getAttributesKeys();
                if (map !== undefined) {
                    map.forEach(function (key) {
                        map[key] = _this.getValuesKeys(key);
                    });
                }
                return map;
            }
        }, {
            key: 'toString',
            value: function toString() {
                var map = this.getAttributesValuesKeysMap();
                if (map.length < 1) {
                    console.log("Map des attributs vide");
                } else {
                    map.forEach(function (attribute) {
                        console.log('Valeurs pour l\'attribut \'' + attribute + '\' :');
                        map[attribute].forEach(function (value) {
                            console.log('\t' + value);
                        });
                    });
                }
            }
        }]);

        return AttributesCollection;
    }();

    var singleton = new AttributesCollection();
    /* harmony export (immutable) */__webpack_exports__["a"] = singleton;

    /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var Attribute = function Attribute(jsonDesc) {
        //TODO

        _classCallCheck(this, Attribute);
    };
    /* harmony export (immutable) */

    __webpack_exports__["a"] = Attribute;

    /***/
},
/* 5 */
/***/function (module, exports) {

    module.exports = { "attributs": { "cheveux": { "chauve": { "long": "Le personnage est chauve ?", "court": "Chauve ?" }, "blond": { "long": "Le personnage est blond ?", "court": "Cheveux blond ?" }, "brun": { "long": "Le personnage est brun ?", "court": "Cheveux brun ?" } }, "yeux": { "marron": { "long": "Le personnage a les yeux marron ?", "court": "Yeux marron ?" }, "bleu": { "long": "Le personnage a les yeux bleu ?", "court": "Yeux bleu ?" }, "vert": { "long": "Le personnage a les yeux vert ?", "court": "Yeux vert ?" } } }

        /***/ };
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__Common__ = __webpack_require__(0);
    /* global strategyPanelInstance */

    //on a besoin de garder un pointeur vers une instance pour y accèder dans
    //les handlers des événements de vis.js car ces dèrnier sont
    //appelé avec un contexte différents définies par vis.js
    var instance = void 0;

    var StrategyPanel = function () {
        function StrategyPanel(element, nodes, edges, attributesPanel) {
            _classCallCheck(this, StrategyPanel);

            if (element === undefined) {
                throw new Error("@StrategyPanel() -> Erreur : element doit être définis");
            }
            if (attributesPanel === undefined) {
                throw new Error("@StrategyPanel() -> Erreur : attributsPanel doit être définis");
            }
            this.element = element;
            this.attributesPanel = attributesPanel;
            if ((typeof nodes === 'undefined' ? 'undefined' : _typeof(nodes)) !== "object") {
                console.log("@StrategyPanel() -> Debug : noeuds par défaut");
                this.nodes = new vis.DataSet([]);
            } else {
                this.nodes = nodes;
            }

            if ((typeof edges === 'undefined' ? 'undefined' : _typeof(edges)) !== "object") {
                console.log("@StrategyPanel() -> Debug : liens par défaut");
                this.edges = new vis.DataSet([]);
            } else {
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

        _createClass(StrategyPanel, [{
            key: 'setNetworkHandlers',
            value: function setNetworkHandlers() {
                this.setNetworkHandler("click", this.onClick);
                this.setNetworkHandler("doubleClick", this.onDoubleClick);
            }
        }, {
            key: 'network',
            value: function network() {
                return this.network;
            }
        }, {
            key: 'setNetworkHandler',
            value: function setNetworkHandler(event, handler) {
                if (typeof event === 'string' && typeof handler === 'function') {
                    if (__WEBPACK_IMPORTED_MODULE_0__Common__["b" /* isNetworkEvent */](event)) {
                        this.network.on(event, handler);
                    }
                }
            }
        }, {
            key: 'addQuestion',
            value: function addQuestion(attribute) {}
        }, {
            key: 'deleteNode',
            value: function deleteNode(node) {
                this.data.nodes.remove(node);
            }
        }, {
            key: 'addNode',
            value: function addNode(id, label, level) {
                this.data.nodes.add({ id: id, label: label, level: level });
            }
        }, {
            key: 'onClick',
            value: function onClick(params) {
                params.event = "[original event]";
                document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
                console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
            }
        }, {
            key: 'onDoubleClick',
            value: function onDoubleClick(params) {
                var clickedNode = this.getNodeAt(params.pointer.DOM);
                params.event = "[original event]";
                document.getElementById('eventSpan').innerHTML = '<h2>DoubleClick event:</h2>' + JSON.stringify(params, null, 4);
                console.log('click event, getNodeAt returns: ' + clickedNode);
                if (clickedNode !== undefined) {
                    instance.deleteNode(clickedNode);
                }
            }
        }]);

        return StrategyPanel;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = StrategyPanel;

    /***/
}]
/******/);
//# sourceMappingURL=wwae.js.map
