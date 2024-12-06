import { Dispatch, SetStateAction } from 'react';
import { InputTypes } from './enums';
import Modal from './Modal';
import { OnFormActionProps } from './interfaces';

export const getModal = (
  pageName: string,
  setModalOn: Dispatch<SetStateAction<boolean>>,
  onFormAction: (data: OnFormActionProps) => void
) => {
  switch (pageName) {
    case 'fridge':
      return (
        <Modal
          chooseIcon
          setModalOn={setModalOn}
          modalProperties={[
            {
              type: InputTypes.text,
              label: 'Namn',
              placeholder: 'label',
            },
          ]}
          onFormAction={onFormAction}
          headline={'Lägg till ny kategori'}
        />
      );

    case 'item':
      return (
        <Modal
          chooseIcon
          setModalOn={setModalOn}
          modalProperties={[
            {
              type: InputTypes.text,
              label: 'Namn',
              placeholder: 'name',
            },
            {
              type: InputTypes.text,
              label: 'Utgångsdatum',
              placeholder: 'expired',
            },
            {
              type: InputTypes.text,
              label: 'Antal',
              placeholder: 'amount',
            },
          ]}
          onFormAction={onFormAction}
          headline={'Lägg till i kylen'}
        />
      );
  }
};
