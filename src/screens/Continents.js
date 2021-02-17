/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import { Title } from '../components/Title';
import LinearGradient from 'react-native-linear-gradient';

export const Continents = () => {
  return (
    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 0.8}} colors={['rgba(125,0,35,1)','rgba(62,0,18,1)']} style={styles.linearGradient}>
      <View>
        <Title title="Datos actuales por continente"/>
      </View>
      <TouchableHighlight onPress={console.log('pruebaentro')}>
      <View style={[styles.ladronchiquito,{width:'30%',position:'absolute',right:2,}]}>
        <Text style={styles.ladrontext}> </Text>
        <Text style={[styles.ladrontext,{color:'white', backgroundColor:'#C70039' ,padding:5, borderRadius:5,fontWeight:'bold',textAlign: 'right', marginTop:10}]}> Más </Text>
      </View>
    </TouchableHighlight> 
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient:{
    flex:1,
  },
})