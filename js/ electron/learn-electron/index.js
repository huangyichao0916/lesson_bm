const { app, BrowserWindow } = require('electron');

let win;

app.on('ready',() => {
    win = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true,
        }
    })
    win.loadURL('http://localhost:3000');
})