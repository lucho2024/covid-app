/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, ImageBackground} from 'react-native';

export const Carga = () => {
  return (
    <>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/img/fondo.png')}></ImageBackground>
    </>
  );
};
