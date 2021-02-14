/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Title } from '../components/Title';
import LinearGradient from 'react-native-linear-gradient';

export const Continents = () => {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 0.8}} colors={['rgba(125,0,35,1)','rgba(62,0,18,1)']} style={styles.linearGradient}>
      <View>
        <Title title="Datos actuales por continente"/>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient:{
    flex:1,
  },
})