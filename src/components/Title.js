/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const Title = ({title}) => {
  return <Text style={styles.titles}>{title}</Text>;
};

const styles = StyleSheet.create({
  titles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});
