import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { RTSP_STREAMS } from './CONSTANTS';

let videoProcessRecord: { [key: string]: ChildProcessWithoutNullStreams } = {};

export const startRecording = (scannerId: string, outputPath: string) => {
  const rtspUrl = RTSP_STREAMS[scannerId as keyof typeof RTSP_STREAMS];

  console.log('Status of Streams', RTSP_STREAMS);

  const ffmpegProcess = spawn('ffmpeg', [
    '-rtsp_transport',
    'tcp', // Force TCP
    '-i',
    rtspUrl,
    '-analyzeduration',
    '500000', // Increase analyzeduration
    '-probesize',
    '500000', // Increase probesize
    '-c:v',
    'h264', // Copy video codec
    '-c:a',
    'copy', // Copy audio codec
    outputPath
  ]);

  ffmpegProcess.stderr.on('data', (data) => {
    console.log('Start Process Data', data);
  });
  videoProcessRecord[scannerId] = ffmpegProcess;
};

export const stopRecording = async (scannerId: string) => {
  const currentProcess = videoProcessRecord[scannerId];
  if (currentProcess) {
    currentProcess.stdin.write('q');
    currentProcess.stdin.end();
    currentProcess.on('close', async (code) => {
      if (code !== 0) {
        console.error('Recording failed');
      } else {
        delete videoProcessRecord[scannerId];
        console.log('Recording completed successfully');
      }
    });
  } else {
    console.log('There is No Process To Stop ');
  }
};
