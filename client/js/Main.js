/* global vis */

// create an array with nodes
var nodes = new vis.DataSet([
  {id: 1, label: 'Node 1', level: 0},
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
    locale: 'en',
    height: '100%',
    width: '100%',
    autoResize: true,
    edges:{
        arrows: {
            to: true
        }
    },
    layout: {
        hierarchical: {
            direction: 'UD'
        }
    }
};
var network = new vis.Network(container, data, options);
