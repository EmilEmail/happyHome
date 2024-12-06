'use client';

import React, { useEffect, useState } from 'react';
import FoodIcon from '@/app/assets/svg/food-icon.svg';
import HomeIcon from '@/app/assets/svg/home-icon.svg';
import Image from 'next/image';
import { InputTypes } from '../FormModal/enums';
import Modal from '../FormModal/Modal';
import { OnFormActionProps } from '../FormModal/interfaces';
import { useCameraScan } from '../Camera/CameraScan';
import {
  MainMenuWrapper,
  BackButton,
  Video,
  Canvas,
  PhotoButton,
  MenuButton,
  AddButton,
} from './MainMenu.style';

interface Props {
  pageName: string;
  textFromImageCallback: (arg: string) => void;
}

export default function MainMenu({
  pageName,
  textFromImageCallback,
}: Props) {
  const [modalOn, setModalOn] = useState(false);
  const [cameraOn, setCameraOn] = useState(false);
  console.log(pageName);

  const {
    startCamera,
    videoRef,
    canvasRef,
    takePhoto,
    text,
    shutDownCamera,
    setText,
  } = useCameraScan();

  const handleFormAction = async (data: OnFormActionProps) => {
    const response = await fetch('/api/create/category', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (responseData) {
      alert('yeeey');
    }
  };

  useEffect(() => {
    if (cameraOn) {
      startCamera();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraOn]);

  useEffect(() => {
    if (text.length) {
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
    <MainMenuWrapper>
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
      <MenuButton href="/">
        <Image
          src={HomeIcon}
          priority
          width={40}
          height={40}
          alt={'food icon'}
        />
      </MenuButton>
      <AddButton
        onClick={() => {
          setCameraOn(true);
        }}
      >
        +
      </AddButton>
      <MenuButton href="/fridge">
        <Image
          src={FoodIcon}
          priority
          width={40}
          height={40}
          alt={'home icon'}
        />
      </MenuButton>
      {modalOn && (
        <Modal
          chooseIcon
          setModalOn={setModalOn}
          modalProperties={[
            {
              type: InputTypes.text,
              label: 'Namn',
              placeholder: 'name',
            },
          ]}
          onFormAction={handleFormAction}
          headline={'Lägg till ny kategori'}
        />
      )}
    </MainMenuWrapper>
  );
}
