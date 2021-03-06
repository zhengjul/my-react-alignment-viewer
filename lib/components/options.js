"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLORSCALE_OPTIONS = exports.OVERVIEW_OPTIONS = exports.VISUALIZATION_OPTIONS = void 0;
// TODO
// + Correct gap
// + Group bars
// + Conservation method
var VISUALIZATION_OPTIONS = [{
  value: 'showconservation',
  label: 'Show conservation'
}, {
  value: 'showgap',
  label: 'Show gap weights'
}, {
  value: 'showlabel',
  label: 'Show labels'
}, {
  value: 'showid',
  label: 'Show ID'
}, {
  value: 'showconsensus',
  label: 'Show consensus weights'
}];
exports.VISUALIZATION_OPTIONS = VISUALIZATION_OPTIONS;
var OVERVIEW_OPTIONS = [{
  value: 'heatmap',
  label: 'Heatmap overview'
}, {
  value: 'slider',
  label: 'Slider overview'
}, {
  value: 'none',
  label: 'No overview'
}];
exports.OVERVIEW_OPTIONS = OVERVIEW_OPTIONS;
var COLORSCALE_OPTIONS = [{
  value: 'buried',
  label: 'Buried'
}, {
  value: 'cinema',
  label: 'Cinema'
}, {
  value: 'clustal2',
  label: 'Clustal2'
}, {
  value: 'clustal',
  label: 'Clustal'
}, {
  value: 'helix',
  label: 'Helix'
}, {
  value: 'hydro',
  label: 'Hydrophobicity'
}, {
  value: 'lesk',
  label: 'Lesk'
}, {
  value: 'mae',
  label: 'Mae'
}, {
  value: 'nucleotide',
  label: 'Nucleotide'
}, {
  value: 'purine',
  label: 'Purine'
}, {
  value: 'strand',
  label: 'Strand'
}, {
  value: 'taylor',
  label: 'Taylor'
}, {
  value: 'turn',
  label: 'Turn'
}, {
  value: 'zappo',
  label: 'Zappo'
}];
exports.COLORSCALE_OPTIONS = COLORSCALE_OPTIONS;