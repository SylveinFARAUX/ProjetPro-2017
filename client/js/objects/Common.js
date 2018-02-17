/** @module Common */

/**
 * L'objet décrivant l'arbre de stratégie pour Vis.js
 * @type {object}
 */
export let STRATEGY_OPTIONS = {
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
export function isNetworkEvent(event){
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
export function createChildDiv(parent, childId){
    if(!(parent instanceof HTMLElement) || typeof childId !== "string"){
        return undefined;
    }else{
        let child = document.createElement('div');
        child.setAttribute('id', childId);
        parent.appendChild(child);
        return child;
    }
}