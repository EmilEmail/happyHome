import React, { useRef, useState } from 'react';
import Tesseract from 'tesseract.js';
import LoadBar from '../LoadBar/LoadBar';

export default function useCameraScan() {
  const [progress, setProgress] = useState(0);

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const TakePicture = () => {
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

  const capturePhoto = () => {
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
            console.log({ text: text });
          });
        }
      });
    }
  };
  return (
    <>
      <LoadBar progress={progress} status="Loading" />

      <video ref={videoRef} autoPlay></video>
      <button onClick={capturePhoto}>Capture Photo</button>

      <canvas
        onChange={capturePhoto}
        ref={canvasRef}
        id="photo"
      ></canvas>
      <button onClick={TakePicture}>Testar</button>
    </>
  );
}
