/* global vis */

// create an array with nodes
var nodes = new vis.DataSet([
  {id: 1, label: 'Node 1', level: 0, title: 'Je s\'appel root'},
  {id: 2, label: 'Node 2', level: 1},
  {id: 3, label: 'Node 3', level: 1},
  {id: 4, label: 'Node 4', level: 2},
  {id: 5, label: 'Node 5', level: 2}
]);

// create an array with edges
var edges = new vis.DataSet([
  {from: 1, to: 2},
  {from: 1, to: 3},
  {from: 2, to: 4},
  {from: 2, to: 5},
  {from: 3}
]);

// create a network
var container = document.getElementById('mynetwork');
var data = {
  nodes: nodes,
  edges: edges
};
var options = {
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
        hover:true //active la gestion des événements de survol des noeuds
    },
    manipulation: {
            enabled: true //affiche le petit menu edit
    }
};
var network = new vis.Network(container, data, options);

//Les évenements dispos sur l'arbre

network.on("click", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
    console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
    console.log('plop');
});
network.on("doubleClick", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("oncontext", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>oncontext (right click) event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("dragStart", function (params) {
    // There's no point in displaying this event on screen, it gets immediately overwritten
    params.event = "[original event]";
    console.log('dragStart Event:', params);
    console.log('dragStart event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
});
network.on("dragging", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>dragging event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("dragEnd", function (params) {
    params.event = "[original event]";
    document.getElementById('eventSpan').innerHTML = '<h2>dragEnd event:</h2>' + JSON.stringify(params, null, 4);
    console.log('dragEnd Event:', params);
    console.log('dragEnd event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
});
network.on("zoom", function (params) {
    document.getElementById('eventSpan').innerHTML = '<h2>zoom event:</h2>' + JSON.stringify(params, null, 4);
});
network.on("showPopup", function (params) {
    document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4);
});
network.on("hidePopup", function () {
    console.log('hidePopup Event');
});
network.on("select", function (params) {
    console.log('select Event:', params);
});
network.on("selectNode", function (params) {
    console.log('selectNode Event:', params);
});
network.on("selectEdge", function (params) {
    console.log('selectEdge Event:', params);
});
network.on("deselectNode", function (params) {
    console.log('deselectNode Event:', params);
});
network.on("deselectEdge", function (params) {
    console.log('deselectEdge Event:', params);
});
network.on("hoverNode", function (params) {
    console.log('hoverNode Event:', params);
});
network.on("hoverEdge", function (params) {
    console.log('hoverEdge Event:', params);
});
network.on("blurNode", function (params) {
    console.log('blurNode Event:', params);
});
network.on("blurEdge", function (params) {
    console.log('blurEdge Event:', params);
});