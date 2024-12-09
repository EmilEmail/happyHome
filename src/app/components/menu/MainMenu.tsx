'use client';

import React, { useEffect, useState } from 'react';
import FoodIcon from '@/app/assets/svg/shelfs.svg';
import HomeIcon from '@/app/assets/svg/home.svg';
import Image from 'next/image';
import { OnFormActionProps } from '../FormModal/interfaces';
import { useCameraScan } from '../Camera/CameraScan';
import {
  MainMenuWrapper,
  BackButton,
  Video,
  Canvas,
  PhotoButton,
  AddButton,
  MenuButton,
} from './MainMenu.style';
import { getModal } from '../FormModal/getModal';

interface Props {
  pageName: string;
  textFromImageCallback?: (arg: string) => void;
  camera: boolean;
  onFormAction: (arg: OnFormActionProps) => void;
  borderColor: string;
}

export default function MainMenu({
  pageName,
  textFromImageCallback,
  camera,
  onFormAction,
  borderColor,
}: Props) {
  const [modalOn, setModalOn] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);

  const {
    startCamera,
    videoRef,
    canvasRef,
    takePhoto,
    text,
    shutDownCamera,
    setText,
  } = useCameraScan();

  useEffect(() => {
    if (cameraOn) {
      startCamera();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraOn]);

  useEffect(() => {
    if (text.length && textFromImageCallback) {
      alert(text);
      textFromImageCallback(text);
      setText('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const handleCancel = async () => {
    shutDownCamera();
    setCameraOn(false);
  };

  return (
    <MainMenuWrapper
      style={{ borderTop: `4px solid ${borderColor}` }}
    >
      {cameraOn && !text && (
        <>
          <BackButton onClick={handleCancel}>Stäng</BackButton>
          <Video ref={videoRef} autoPlay></Video>
          <Canvas ref={canvasRef}></Canvas>
          <PhotoButton
            onClick={() => {
              takePhoto();
              handleCancel();
            }}
          >
            test
          </PhotoButton>
        </>
      )}
      <MenuButton
        href="/"
        style={{ borderRight: `2px solid ${borderColor}` }}
      >
        <Image
          src={HomeIcon}
          priority
          width={40}
          height={40}
          alt={'food icon'}
        />
      </MenuButton>
      <AddButton
        style={{ border: `4px solid ${borderColor}` }}
        onClick={() => {
          if (camera) {
            setCameraOn(true);
          } else {
            setModalOn(true);
          }
        }}
      >
        +
      </AddButton>
      <MenuButton
        href="/fridge"
        style={{ borderLeft: `2px solid ${borderColor}` }}
      >
        <Image
          src={FoodIcon}
          priority
          width={40}
          height={40}
          alt={'home icon'}
        />
      </MenuButton>
      {modalOn && getModal(pageName, setModalOn, onFormAction)}
    </MainMenuWrapper>
  );
}
