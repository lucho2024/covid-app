/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, TouchableWithoutFeedback, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Title} from '../components/Title';
import {Globales} from '../components/Globales';

export const Main = () => {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#9E002D', flex: 1}}>
      <Title title="Datos actuales" />
      <Title title="COVID 19"></Title>
      <Globales />
    </View>
  );
};
