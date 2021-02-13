/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export const Title = ({title}) => {
  return (
    <>
      <Text style={styles.titles}>{title}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  titles: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'SourceCodePro-Bold'  
  },
});
