/* eslint-disable prettier/prettier */
import React , {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import { Title } from '../components/Title';
import LinearGradient from 'react-native-linear-gradient';
import { CContinents } from '../components/CContinents';


export const Continents = () => {

  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 0.8}} colors={['rgba(125,0,35,1)','rgba(62,0,18,1)']} style={styles.linearGradient}>
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Datos actuales{"\n"}por continente</Text>
        </View>
        <View style={styles.boxContinents}>
          <CContinents/>
        </View>
 
      </View>
    </LinearGradient>

  );
};

const styles = StyleSheet.create({
  linearGradient:{
    flex:1,
  },

  container:{
   flex: 1,
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'flex-end'
  },
  boxTitle:{
    height: '20%',
    paddingRight: 40
  },
  title:{
    color:'white',
    fontSize: 25,
    fontFamily: 'SourceCodePro-Bold',
    textAlign: 'right'
  },
  boxContinents:{
    height: '70%',
  }
})