import React, { useState } from 'react';
import FormInput from './FormInput';
import ConfirmButtons from '../ConfirmButtons/ConfirmButtons';
import { ModalWrapper, ModalForm } from './Modal.style';
import { InputTypes } from './enums';
import { ModalProps, FORM_INFO } from './interfaces';

export default function Modal({
  modalProperties,
  onFormAction,
  setModalOn,
}: ModalProps) {
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
