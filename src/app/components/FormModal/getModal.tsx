import { Dispatch, SetStateAction } from 'react';
import { InputTypes } from './enums';
import Modal from './Modal';
import { OnFormActionProps } from './interfaces';
import { PAGE_NAMES } from '../FoodLayout/consts';

export const getModal = (
  pageName: string,
  setModalOn: Dispatch<SetStateAction<boolean>>,
  onFormAction: (data: OnFormActionProps) => void
) => {
  switch (pageName) {
    case PAGE_NAMES.Freezer:
    case PAGE_NAMES.Fridge:
    case PAGE_NAMES.Pantry:
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
          pageName={pageName}
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
          pageName={pageName}
        />
      );
  }
};
