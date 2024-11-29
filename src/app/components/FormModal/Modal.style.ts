import styled from '@emotion/styled';

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
`;
