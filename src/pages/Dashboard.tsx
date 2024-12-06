'use client';
import React, { useEffect, useRef, useState } from 'react';
import NextImage from 'next/image';
import FreezerImg from '@/app/assets/img/freezer.jpg';
import styled from '@emotion/styled';
import MainMenu from '@/app/components/menu/MainMenu';
import { useCameraScan } from '@/app/components/Camera/CameraScan';

const DashboardWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const HolderWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: #5289ba;
  margin-bottom: 1rem;
  border-radius: 1rem;
  text-align: center;
  img {
    grid-column: 1/3;
    border-radius: 50%;
    justify-self: flex-start;
    grid-row: 1;
    margin-bottom: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
    grid-column: 1/5;
    grid-row: 1;
  }
`;

export default function Dashboard() {
  const asyncFunction = async () => {
    // const test = await fetch('/api/init');
  };
  useEffect(() => {
    asyncFunction();
  }, []);

  return (
    <DashboardWrapper>
      <MainMenu
        pageName="dashboard"
        textFromImageCallback={(t) => alert(t)}
      />
      <HolderWrapper>
        <NextImage
          src={FreezerImg}
          alt="freezer"
          width={48}
          height={48}
        />

        <h2>Freezer</h2>
        <p>Test 24</p>
        <p>Test 245</p>
        <p>Test 243242</p>
        <p>Test 243</p>
      </HolderWrapper>
    </DashboardWrapper>
  );
}
