import React from 'react';
import { SignTitle } from './Sign.styled';

type SignProps = {
  children: string;
};

function Sign({ children }: SignProps) {
  return (
    <SignTitle>
      <h1>{children}</h1>
      <div className='border'></div>
    </SignTitle>
  );
}

export default Sign;
