// bring up node server

const { app, BrowserWindow } = require('electron');

let win;
let settings = require('./settings');

function createWindow(){
    win = new BrowserWindow(settings.window);
    win.loadURL('file://' + __dirname + '/dist/index.html');

    win.on('closed', function(){
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', function(){
    if(process.platform !== 'darwin'){
        app.quit();
    }
});
