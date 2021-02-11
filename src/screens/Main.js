/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Text, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const Main = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback>
      <Text style={{width: 80, height: 100, backgroundColor: 'red'}}>Main</Text>
    </TouchableWithoutFeedback>
  );
};
