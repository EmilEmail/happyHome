import styled from '@emotion/styled';
import React from 'react';

const LoadbarWrapper = styled.div`
  display: flex;
  height: 32px;
  width: 200px;
  background-color: white;
  border-radius: 8px;
  padding: 2px;
  position: relative;
  h2 {
    position: absolute;
    top: -32px;
    color: white;
  }
  div {
    background-color: green;
    border-radius: 8px;
  }
`;

interface Props {
  status: string;
  progress: number;
}

export default function LoadBar({ status, progress }: Props) {
  const progressInPercent = progress * 100 * 2;

  return (
    <LoadbarWrapper>
      <h2>{status}</h2>
      <div style={{ width: progressInPercent }}></div>
    </LoadbarWrapper>
  );
}
