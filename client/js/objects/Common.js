export let ATTRIBUTES_OPTIONS = {
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

export function isNetworkEvent(event){
    if(typeof event !== 'string')
        return false;
    else
        return NETWORK_EVENTS.includes(event);
}

export function createChildDiv(parent, childId){
    if(typeof parent !== "object" || typeof childId !== "string"){
        return undefined;
    }else{
        let child = document.createElement('div');
        child.setAttribute('id', childId);
        parent.appendChild(child);
        return child;
    }
}