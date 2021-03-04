/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Title} from '../components/Title';
import LinearGradient from 'react-native-linear-gradient';
import {CCountries} from '../components/CCountries';

export const Countries = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.8}}
      colors={['rgba(125,0,35,1)', 'rgba(62,0,18,1)']}
      style={styles.linearGradient}>
      <View style={{paddingTop: 50}}>
        <Title title="Datos actuales" />
        <Title title="por pais"></Title>
        <CCountries></CCountries>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
