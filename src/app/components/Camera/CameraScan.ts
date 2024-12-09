import React, {
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import Tesseract from 'tesseract.js';

export interface CAMERA_SCAN_INTERFACE {
  takePhoto: () => void;
  startCamera: () => void;
  progress: number;
  videoRef: React.MutableRefObject<null>;
  canvasRef: React.MutableRefObject<null>;
  shutDownCamera: () => void;
  setText: Dispatch<SetStateAction<string>>;
}

export function useCameraScan() {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const shutDownCamera = () => {
    //! Always shutdown camera first before you remove the video element
    if (videoRef.current) {
      const camera = videoRef.current as HTMLVideoElement;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      for (const track of camera.srcObject.getTracks()) {
        track.stop();
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      videoRef.current.srcObj = null;
    }
  };

  const startCamera = async () => {
    if (videoRef.current) {
      const camera = videoRef.current as HTMLVideoElement;
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (camera) {
            camera.srcObject = stream;
          }
        })
        .catch((error) => {
          console.error('Error accessing the camera: ', error);
        });
    }
  };

  const takePhoto = async () => {
    if (canvasRef.current && videoRef.current) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      const context = canvas.getContext(
        '2d'
      ) as CanvasRenderingContext2D;
      canvas.width = 600;
      canvas.height = 400;
      context.drawImage(
        videoRef.current,
        0,
        0,
        canvas.width,
        canvas.height
      );
      canvas.toBlob((file) => {
        if (file) {
          Tesseract.recognize(file, 'swe', {
            logger: (m) => setProgress(m.progress),
          }).then(({ data: { text } }) => {
            setText(text);
            shutDownCamera();
          });
        }
      });
    }
  };
  return {
    takePhoto,
    startCamera,
    progress,
    videoRef,
    canvasRef,
    text,
    shutDownCamera,
    setText,
  };
}
