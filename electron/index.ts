import { BrowserWindow, app, ipcMain, IpcMainEvent, globalShortcut } from 'electron';
import isDev from 'electron-is-dev';
import { RTSP_STREAMS } from './CONSTANTS';
import { startRecording, stopRecording } from './handleCameraStream';
import os from 'os';
import path from 'path';

const videoFolderPath = path.join(`${os.homedir()}`, 'vms-videos');

function createWindow() {
  const window = new BrowserWindow({
    autoHideMenuBar: true,
    title: 'Fliprkart Grocery',
    icon: path.join(__dirname, '../', 'src', 'assets', 'SupermartLogo.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      webSecurity: false,
      preload: path.join(__dirname, './preload.js')
    }
  });

  const port = process.env.PORT ?? 3000;
  const url = isDev ? `http://localhost:${port}` : path.join(__dirname, '../src/out/index.html');

  if (isDev) {
    window?.loadURL(url);
  } else {
    window?.loadFile(url);
  }

  globalShortcut.registerAll(
    ['CommandOrControl+R', 'CommandOrControl+Shift+R', 'F5', 'CommandOrControl+F5', 'CommandOrControl+Shift+I'],
    () => {
      console.log('Shortcut Disabled');
    }
  );

  ipcMain.on('close', () => {
    window.close();
  });

  ipcMain.on('start-recording', async (_, _args: unknown) => {
    const filePath1 = path.join(videoFolderPath, `${Date.now().toString()}-camera-${'0'}.mp4`);
    const filePath2 = path.join(videoFolderPath, `${Date.now().toString()}-camera-${'1'}.mp4`);
    startRecording('0', filePath1);
    startRecording('1', filePath2);
  });

  ipcMain.on('stop-recording', async (_, _args: unknown) => {
    stopRecording('0');
    stopRecording('1');
  });

  ipcMain.on('set-stream', (_, streams: { rtsp1: string; rtsp2: string }) => {
    RTSP_STREAMS['0'] = streams.rtsp1;
    RTSP_STREAMS['1'] = streams.rtsp2;
  });
}

app.whenReady().then(async () => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('message', (event: IpcMainEvent, message: any) => {
  setTimeout(() => event.sender.send(message, 'hi from electron'), 500);
});
