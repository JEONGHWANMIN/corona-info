import React from 'react';
import Button from '../../components/Button';

import Nav from '../../components/Nav';
import { MainPage } from '../../components/styles/MainPage.styled';
import Title from '../../components/Title';
import { HomeStyled, TitleStyled, NoticeStyeld } from './Home.styled';
function Home() {
  return (
    <div>
      <Nav />
      <MainPage>
        <HomeStyled>
          <Title>NOTICE</Title>
          <NoticeStyeld></NoticeStyeld>
          <Button color={'skyblue'}>공지등록</Button>
        </HomeStyled>
      </MainPage>
    </div>
  );
}

export default Home;
