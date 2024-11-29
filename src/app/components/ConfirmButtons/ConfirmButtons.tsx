import { COLORS } from '@/app/utils/Colors';
import styled from '@emotion/styled';
import React from 'react';

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  button {
    width: 100%;
    margin: 1rem;
    padding: 1rem;
    border-radius: 8px;
    outline: none;
    border: none;
    font-weight: 900;
    font-size: 1rem;

    &:nth-of-type(1) {
      background-color: ${COLORS.success};
    }
    &:nth-of-type(2) {
      background-color: ${COLORS.black};
      color: ${COLORS.white};
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

interface Props {
  okText: string;
  cancelText: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ConfirmButtons({
  okText,
  onCancel,
  onConfirm,
  cancelText,
}: Props) {
  return (
    <ButtonWrapper>
      <button onClick={onConfirm}>{okText}</button>
      <button onClick={onCancel}>{cancelText}</button>
    </ButtonWrapper>
  );
}
