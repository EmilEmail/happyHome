import styled from '@emotion/styled';
import Image from 'next/image';

export const ModalWrapper = styled.div`
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

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 1rem;
  border: 1px solid gray;
  background-color: beige;
`;

export const StyledSelect = styled.select`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 4px gray;
`;
export const StyledImage = styled(Image)`
  margin-top: 1rem;
  padding: 4px;
  border-radius: 8px;
  box-shadow: 0 0 4px gray;
  align-self: center;
`;
