'use client';

import React, { useState } from 'react';
import { COLORS } from '@/app/utils/Colors';
import styled from '@emotion/styled';
import Link from 'next/link';

import FoodIcon from '@/app/assets/svg/food-icon.svg';
import HomeIcon from '@/app/assets/svg/home-icon.svg';
import Image from 'next/image';
import { InputTypes } from '../FormModal/enums';
import Modal from '../FormModal/Modal';
import { PAGE_NAMES } from '../FoodLayout/enums';
import {
  FORM_INFO_OUTPUT,
  OnFormActionProps,
} from '../FormModal/interfaces';

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

interface Props {
  pageName: string;
}

export default function MainMenu({ pageName }: Props) {
  const [modalOn, setModalOn] = useState(false);

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
