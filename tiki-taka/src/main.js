const { app, BrowserWindow } = require('electron') 
const path = require('path') 
function createWindow () { 
  const win = new BrowserWindow({ 
    width: 980, 
    height: 800, 
    webPreferences: { 
      nodeIntegration: true,
      contextIsolation : false
    } 
  }) 
  win.loadURL("http://localhost:3000")
} 
app.whenReady().then(() => { 
  createWindow() 
}) 
app.on('window-all-closed', function () { 
  if (process.platform !== 'darwin') app.quit() 
})