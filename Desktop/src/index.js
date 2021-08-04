const { app, BrowserWindow } = require('electron');
const path = require('path');


const mainwindow = () => {
  const window = new BrowserWindow({show:
    false,
    webPreferences:{nodeIntegration:true,}
  });
  window.maximize();
  window.show;
  window.loadFile(path.join(__dirname, 'index.html'));

};

app.on('ready', mainwindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

