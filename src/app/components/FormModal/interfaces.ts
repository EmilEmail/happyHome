import { Dispatch, SetStateAction } from 'react';
import { InputTypes } from './enums';

export interface MODAL_PROPERTIES {
  type: InputTypes;
  label: string;
  placeholder?: string;
  callback?: (arg: string) => void;
}

export interface FORM_INFO {
  label: string;
  indexKey: number;
  type: InputTypes;
}

export interface ModalProps {
  modalProperties: MODAL_PROPERTIES[];
  onFormAction: (data: MODAL_PROPERTIES[]) => void;
  setModalOn: Dispatch<SetStateAction<boolean>>;
}
