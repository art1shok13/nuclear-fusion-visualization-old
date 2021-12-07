const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

const mainMenuTemplate = [
  {
    label: 'Довідка',
    submenu:[
      {
        label:'Довідка',
        click(){
          createF1Window()
        }
      }
    ]
  },
  {
    label: 'Вікно',
    submenu:[
      {
        label:'Перезавантажити',
        role: 'reload'
      }
    ]
  },
  {
    label: 'Developer Tools',
    submenu:[
      {
        role: 'reload'
      },
      {
        label: 'Toggle DevTools',
        accelerator:process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        }
      }
    ]
  }
]

app.on('ready', function(){
    var mainWindow = new BrowserWindow({
    width: 1270,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile(__dirname +'\\main\\index.html')

  mainWindow.on('closed', function(){
    app.quit()
  })
  Menu.setApplicationMenu(Menu.buildFromTemplate(mainMenuTemplate))
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

function createF1Window(){
  let F1Window = new BrowserWindow({
    width: 500,
    height: 300,
    title:'Довідка'
  });

  F1Window.loadFile(__dirname + '\\main\\F1.html')

  F1Window.on('close', function(){
    addWindow = null;
  })
}