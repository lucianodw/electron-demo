'use strict';

var electron = require('electron')
var {app, BrowserWindow} = electron

var mainWindow = null;

var isRenderer = (process && process.type === 'renderer')
console.log('isRenderer main.js', isRenderer);

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    mainWindow.on('closed', function() {
      mainWindow = null;
    });
});

app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
        app.quit();
    }
});
