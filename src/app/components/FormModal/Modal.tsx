import React, { useState } from 'react';
import FormInput from './FormInput';
import ConfirmButtons from '../ConfirmButtons/ConfirmButtons';
import {
  ModalWrapper,
  ModalForm,
  StyledImage,
  StyledSelect,
} from './Modal.style';
import { InputTypes } from './enums';
import { ModalProps, FORM_INFO } from './interfaces';
import { ExistingIconListURL } from '@/app/assets/consts/existingIcons';

export default function Modal({
  modalProperties,
  onFormAction,
  setModalOn,
  chooseIcon,
  headline,
}: ModalProps) {
  const [allFormInfo, setAllFormInfo] = useState<FORM_INFO[]>([]);
  const [selectedImage, setSelectedImage] = useState<{
    url: string;
    name: string;
  }>();

  const handleConfirm = () => {
    //TODO: validation
    const newList = allFormInfo.map((i) => ({
      text: i.label,
      inputIndex: i.indexKey,
      property: i.placeholder,
    }));
    onFormAction({ infoList: newList, icon: selectedImage });
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
    type: InputTypes,
    placeholder: string
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
          placeholder,
        },
      ]);
    }
  };

  return (
    <ModalWrapper>
      <ModalForm>
        <h1 style={{ textAlign: 'center', marginBottom: 24 }}>
          {headline}
        </h1>
        {modalProperties.map((inputProperty, key) => (
          <FormInput
            key={key}
            inputProperty={inputProperty}
            onChange={(str) =>
              handleAllFormInfoUpdate(
                str,
                key,
                inputProperty.type,
                inputProperty.placeholder.toLowerCase()
              )
            }
          />
        ))}
        <StyledSelect
          onChange={(e) => {
            if (e.target.value.length) {
              setSelectedImage({
                name: e.target.value,
                url: `/svg/${e.target.value}.svg`,
              });
            } else {
              setSelectedImage(undefined);
            }
          }}
        >
          <option value="">Select icon</option>
          {chooseIcon &&
            ExistingIconListURL.map((icon, i) => (
              <option key={i} value={icon.name}>
                {icon.name}
              </option>
            ))}
        </StyledSelect>
        {selectedImage && selectedImage.url && (
          <StyledImage
            src={selectedImage.url}
            width={50}
            height={50}
            alt="icon"
          />
        )}
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
