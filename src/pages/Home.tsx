import React from 'react';
import Nav from '../components/Nav/Nav';
import { HomeContainer } from '../components/page-styled/Home.styled';

function Home() {
  return (
    <div>
      <Nav />
      <HomeContainer>
        <div className='titleBox'>
          <h1>코로나 거리두기</h1>
        </div>
      </HomeContainer>
    </div>
  );
}

export default Home;
