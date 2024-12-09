import { COLORS } from '@/app/utils/Colors';
import styled from '@emotion/styled';
import Image from 'next/image';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 4px solid ${COLORS.black};
  width: calc(100vw);
  min-height: 100vh;
  padding: 4rem 1rem;
  margin-top: 2rem;
`;

export const Platform = styled.section<{
  backgroundColor?: string;
  shelfColor?: string;
}>`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  text-align: center;
  margin: 1rem 0rem;

  .stand {
    grid-column: 1/5;
    height: 40px;
    width: 100%;
    margin-bottom: 16px;
  }
  .item-name {
    font-size: 0.7rem;
    font-weight: 900;
    text-align: center;
    color: black;
  }
`;

export const ShelfImage = styled(Image)`
  grid-column: 1/5;
  &:nth-child(1) {
    display: none;
  }
`;
