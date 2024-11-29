import React, { useState } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '@/app/utils/Colors';
import { MODAL_PROPERTIES } from './interfaces';
import { InputTypes } from './enums';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  color: ${COLORS.black};
  min-width: 300px;
  input {
    border-radius: 8px;
    padding: 1rem;
    border: none;
    box-shadow: 0px 0px 4px ${COLORS.black};
    margin-top: 0.25rem;
  }
`;

interface Props {
  inputProperty: MODAL_PROPERTIES;
  onChange: (arg: string) => void;
}

export default function FormInput({
  inputProperty,
  onChange,
}: Props) {
  const [value, setValue] = useState('');
  if (inputProperty.type === InputTypes.text) {
    const oneLine = inputProperty.label.replaceAll(' ', '-');
    return (
      <Label>
        {inputProperty.label}
        <input
          type="text"
          name={oneLine}
          value={value}
          onBlur={(e) => onChange(e.target.value)}
          onChange={(e) => setValue(e.target.value)}
        />
      </Label>
    );
  }
  return <></>;
}
