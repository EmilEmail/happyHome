import { Dispatch, SetStateAction } from 'react';
import { InputTypes } from './enums';

export interface MODAL_PROPERTIES {
  type: InputTypes;
  label: string;
  placeholder: string;
  callback?: (arg: string) => void;
}

export interface FORM_INFO {
  label: string;
  indexKey: number;
  type: InputTypes;
  placeholder: string;
}
export interface FORM_INFO_OUTPUT {
  property: string;
  text: string;
  inputIndex: number;
}

export interface OnFormActionProps {
  infoList: FORM_INFO_OUTPUT[];
  icon?: { name: string; url: string };
  pageName: string;
}

export interface ModalProps {
  modalProperties: MODAL_PROPERTIES[];
  onFormAction: (arg: OnFormActionProps) => void;
  setModalOn: Dispatch<SetStateAction<boolean>>;
  chooseIcon?: boolean;
  headline: string;
}
