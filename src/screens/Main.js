/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  Button,
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Title} from '../components/Title';
import {Globales} from '../components/Globales';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';

export const Main = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.8}}
      colors={['rgba(125,0,35,1)', 'rgba(62,0,18,1)']}
      style={styles.linearGradient}>
      <ImageBackground
        source={require('../../assets/img/imagenPrincipal.png')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.boxTitle}>
            <StatusBar barStyle="light-content" backgroundColor="#7D0023" />
            <Title title="DATOS ACTUALES" />
            <Text style={styles.textCovid}>COVID19</Text>
          </View>
          <Globales />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },

  container: {
    flex: 1,
  },
  boxTitle: {
    height: '43%',
    justifyContent: 'center',
  },
  textCovid: {
    fontSize: 38,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'SourceCodePro-Bold',
    margin: -16,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
