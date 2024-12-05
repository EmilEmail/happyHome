import { COLORS } from '@/app/utils/Colors';
import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-top-right-radius: 4rem;
  border-top-left-radius: 4rem;
  border: 4px solid ${COLORS.black};
  width: calc(100vw);
  min-height: 100vh;
  padding: 4rem 1rem;
  background-color: blue;
  margin-top: 2rem;
`;

export const Platform = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  text-align: center;
  .stand {
    grid-column: 1/5;
    background: linear-gradient(
      to left,
      transparent,
      ${COLORS.white},
      transparent
    );
    height: 4px;
    width: 100%;
  }
  .item-name {
    font-size: 0.7rem;
    font-weight: 900;
    text-align: center;
    color: black;
  }
`;
