var electron = require('electron');

var isRenderer = (process && process.type === 'renderer')
console.log('isRenderer', isRenderer);

console.log('Gonna do stuff in the browser!!!');
