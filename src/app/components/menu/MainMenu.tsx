'use client';

import React, { useState } from 'react';
import { COLORS } from '@/app/utils/Colors';
import styled from '@emotion/styled';
import Link from 'next/link';

import FoodIcon from '@/app/assets/svg/food-icon.svg';
import HomeIcon from '@/app/assets/svg/home-icon.svg';
import Image from 'next/image';
import Modal, { InputTypes } from '../FormModal/Modal';

const MainMenuWrapper = styled.nav`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${COLORS.alert};
  border-top: 4px solid black;

  position: fixed;
  bottom: 0;
  left: 0;
`;

const MenuButton = styled(Link)`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
  &:nth-of-type(1) {
    border-right: 2px solid ${COLORS.black};
  }
  &:nth-of-type(2) {
    border-left: 2px solid ${COLORS.black};
  }
`;

const AddButton = styled.button`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background-color: ${COLORS.success};
  position: absolute;
  top: -36px;
  font-size: 2rem;
  font-weight: 100;
  font-family: 'Courier New', Courier, monospace;
  border: 4px solid ${COLORS.black};
  outline: none;
`;

// enum MODAL_TYPES {
//   AddFood = 'AddFood',
// }

export default function MainMenu() {
  const [modalOn, setModalOn] = useState(false);
  //   const [modalType, setModalType] = useState(MODAL_TYPES.AddFood);

  return (
    <MainMenuWrapper>
      <MenuButton href="/">
        <Image
          src={HomeIcon}
          priority
          width={40}
          height={40}
          alt={'food icon'}
        />
      </MenuButton>
      <AddButton onClick={() => setModalOn(true)}>+</AddButton>
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
          setModalOn={setModalOn}
          modalProperties={[
            { type: InputTypes.text, label: 'Testar...' },
            { type: InputTypes.text, label: 'Testar igen...' },
            { type: InputTypes.text, label: 'Testar igen...' },
            { type: InputTypes.text, label: 'Testar igen...' },
            { type: InputTypes.text, label: 'Testar igen...' },
            { type: InputTypes.text, label: 'Testar igen...' },
            { type: InputTypes.text, label: 'Testar igen...' },
            { type: InputTypes.text, label: 'Testar igen...' },
          ]}
          onFormAction={(e) => console.log(e)}
        />
      )}
    </MainMenuWrapper>
  );
}
