import React, { Dispatch, SetStateAction, useState } from 'react';
import FormInput from './FormInput';
import styled from '@emotion/styled';
import ConfirmButtons from '../ConfirmButtons/ConfirmButtons';

export enum InputTypes {
  text = 'text',
  number = 'number',
  submit = 'submit',
  checkbox = 'checkbox',
}

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);

  position: fixed;
  top: 0;
  left: 0;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

export interface MODAL_PROPERTIES {
  type: InputTypes;
  label: string;
  placeholder?: string;
  callback?: (arg: string) => void;
}

interface FORM_INFO {
  label: string;
  indexKey: number;
  type: InputTypes;
}

interface Props {
  modalProperties: MODAL_PROPERTIES[];
  onFormAction: (data: MODAL_PROPERTIES[]) => void;
  setModalOn: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({
  modalProperties,
  onFormAction,
  setModalOn,
}: Props) {
  const [allFormInfo, setAllFormInfo] = useState<FORM_INFO[]>([]);

  const handleConfirm = () => {
    //TODO: validation
    onFormAction(allFormInfo);
    setModalOn(false);
    setAllFormInfo([]);
  };
  const handleCancel = () => {
    setAllFormInfo([]);
    setModalOn(false);
  };

  const handleAllFormInfoUpdate = (
    label: string,
    indexKey: number,
    type: InputTypes
  ) => {
    const exists = allFormInfo.find(
      (data) => data.indexKey === indexKey
    );

    if (exists) {
      const newFormInfo = [...allFormInfo];
      newFormInfo[indexKey].label = label;
      setAllFormInfo(newFormInfo);
    } else {
      setAllFormInfo([
        ...allFormInfo,
        {
          label,
          indexKey,
          type,
        },
      ]);
    }
  };

  return (
    <ModalWrapper>
      <ModalForm>
        {modalProperties.map((inputProperty, key) => (
          <FormInput
            key={key}
            inputProperty={inputProperty}
            onChange={(str) =>
              handleAllFormInfoUpdate(str, key, inputProperty.type)
            }
          />
        ))}
        <ConfirmButtons
          okText="Lägg till"
          cancelText="Avbryt"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      </ModalForm>
    </ModalWrapper>
  );
}
