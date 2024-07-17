//Standard Graph Information
var introGraph = {
  x: ['Blue (470)',
     'Cyan (525)',
     'Green (560)',
     'Yellow (585)',
     'Orange (600)',
     'Red (645)',
     'DRed (700)',
     'IR 1 (735)',
     'IR 2 (810)',
     'IR 3 (880)',
     'IR 4 (940)'],
   y: [88.252149,
      89.64646465,
      89.75,
      89.5006402,
      89.30899609,
      89.0227577,
      88.90392422,
      87.44257274,
      88.54748603,
      88.31908832,
      86.21848739],
   name: 'Standard Data',
   marker: {color: 'rgb(0, 0, 192)'},
   type: 'bar'
};

//First Graph Information and code (Red Folder)
var graph1 = {
  x: ['Blue (470)',
     'Cyan (525)',
     'Green (560)',
     'Yellow (585)',
     'Orange (600)',
     'Red (645)',
     'DRed (700)',
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
      'DRed (700)',
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
var graphLayout1 = {
   title: 'Spectrometer Standard Results',
   xaxis: {
      title: 'Wavelength (nm)',
      tickangle: -45
   },
   yaxis: {
      title: 'Reflectance (%)'
   }
};

var graphLayout2 = {
   title: 'Spectrometer Sample Results',
   xaxis: {
      title: 'Wavelength (nm)',
      tickangle: -45
   },
   yaxis: {
      title: 'Reflectance (%)'
   }
};
