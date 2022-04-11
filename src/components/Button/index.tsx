import React from 'react';
import { ButtonStyeld } from './Button.styeld';

type ButtonProps = {
  children: string;
  color?: string;
};

function index({ children, color }: ButtonProps) {
  return <ButtonStyeld color={color}>{children}</ButtonStyeld>;
}

export default index;
