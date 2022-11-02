import React from 'react';
import { LogoContainer } from './styles';

import LogoImage from '../../assets/images/logo.png';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <LogoContainer>
      <Image source={LogoImage} />
    </LogoContainer>
  );
};

export default Logo;
