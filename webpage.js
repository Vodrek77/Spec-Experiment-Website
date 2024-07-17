//First Graph Information and code (Red Folder)
var graph1 = {
  x: ['Blue (470)',
     'Cyan (525)',
     'Green (560)',
     'Yellow (585)',
     'Orange (600)',
     'Red (645)',
     'Deep Red (700)',
     'IR 1 (735)',
     'IR 2 (810)',
     'IR 3 (880)',
     'IR 4 (940)'],
   y: [9.577922078,
     8.873239437,
     12.67409471,
     31.18741059,
     47.73722628,
     74.13533835,
     87.82343988,
     88.0910683,
     97.6340694,
     103.2258065,
     105.8479532],
   name: 'Folder 1 (Red)',
   marker: {color: 'rgb(224, 0, 0)'},
   type: 'bar'
};

//Second Graph Information and code (Green Folder)
var graph2 = {
   x: ['Blue (470)',
      'Cyan (525)',
      'Green (560)',
      'Yellow (585)',
      'Orange (600)',
      'Red (645)',
      'Deep Red (700)',
      'IR 1 (735)',
      'IR 2 (810)',
      'IR 3 (880)',
      'IR 4 (940)'],
   y: [22.88961039,
      27.18309859,
      21.7270195,
      12.1602289,
      10.80291971,
      16.9924812,
      27.09284627,
      22.41681261,
      57.0977918,
      85.64516129,
      94.73684211],
   name: 'Folder 2 (Green)',
   marker: {color: 'rgb(0, 192, 0)'},
   type: 'bar'
};

//Array of Graphs to be plugged into the Plotly function
var graphData = [graph1, graph2];

//The Layout of the graph, labeling axes, naming the graph, etc.
var graphLayout = {
   title: 'Spectrometer Experiment Results',
   xaxis: {
      title: 'Wavelength (nm)',
      tickangle: -45
   },
   yaxis: {
      title: 'Reflectance (%)'
   }
};
