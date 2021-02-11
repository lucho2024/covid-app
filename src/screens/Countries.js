/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Title } from '../components/Title';

export const Countries = () => {
  const navigation = useNavigation();
  return  <Title title="Datos actuales por pais"/>;
};
