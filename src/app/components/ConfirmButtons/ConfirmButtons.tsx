import React from 'react';
import { ButtonWrapper } from './ConfirmButtons.style';
import { ConfirmButtonsProps } from './ConfirmButtons.props';

export default function ConfirmButtons({
  okText,
  onCancel,
  onConfirm,
  cancelText,
}: ConfirmButtonsProps) {
  return (
    <ButtonWrapper>
      <button onClick={onConfirm}>{okText}</button>
      <button onClick={onCancel}>{cancelText}</button>
    </ButtonWrapper>
  );
}
