/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Title } from '../components/Title';

export const Countries = () => {
  const navigation = useNavigation();
  return ( 
  <View style={{backgroundColor:'#9E002D',flex:1}}>
    <Title title="Datos actuales por pais"/>
    </View>);
};
