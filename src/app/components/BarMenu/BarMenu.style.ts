import styled from '@emotion/styled';
import Link from 'next/link';

export const BarMenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: aqua;

  position: fixed;
  top: 0;
  left: 0;
`;

export const MenuItem = styled(Link)`
  width: 100%;
  padding: 1rem;
  background-color: black;
  text-align: center;
  text-decoration: none;
  color: white;
  box-shadow: -4px 0px 4px inset black;
  &::first-letter {
    text-transform: uppercase;
  }
  border-bottom: 4px solid black;
`;
export const ActiveMenuItem = styled(MenuItem)`
  &::first-letter {
    text-transform: uppercase;
  }
  border-bottom: none !important;
  box-shadow: none !important;
`;
