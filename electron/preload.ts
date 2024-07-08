import { ipcRenderer, contextBridge } from 'electron';

declare global {
  interface Window {
    Main: typeof api;
    ipcRenderer: typeof ipcRenderer;
  }
}

const api = {
  sendMessage: (message: string) => {
    ipcRenderer.send('message', message);
  },
  startRecording: (data: { scannerId: string }) => {
    ipcRenderer.send('start-recording', data);
  },
  stopRecording: (data: { scannerId: string }) => {
    ipcRenderer.send('stop-recording', data);
  },
  setRTSPStream: (streams: { rtsp1: string; rtsp2: string }) => {
    ipcRenderer.send('set-stream', streams);
  },
  Buffer: Buffer,
  on: (channel: string, callback: (data: any) => void) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  }
};
contextBridge.exposeInMainWorld('Main', api);

contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);
