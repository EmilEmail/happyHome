import { COLORS } from '@/app/utils/Colors';
import styled from '@emotion/styled';
import Link from 'next/link';

export const MainMenuWrapper = styled.nav`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${COLORS.menuColor};

  position: fixed;
  bottom: 0;
  left: 0;
`;

export const MenuButton = styled(Link)`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

export const AddButton = styled.button`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background: linear-gradient(#fb8585, #954f4f);
  position: absolute;
  top: -36px;
  font-size: 2rem;
  font-weight: 100;
  font-family: 'Courier New', Courier, monospace;
  outline: none;
  color: ${COLORS.PantryBg};
  text-shadow: 0 4px 4px inset ${COLORS.black};
`;

export const Video = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 98;
  background-color: black;
`;
export const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`;
export const PhotoButton = styled.button`
  position: fixed;
  bottom: 40px;
  left: calc(50vw - 24);
  width: 48px;
  height: 48px;
  z-index: 99;
  border-radius: 50%;
  background-color: red;
`;
export const BackButton = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  width: 48px;
  height: 48px;
  z-index: 100;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  color: white;
`;
