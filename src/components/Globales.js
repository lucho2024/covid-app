/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import Api from '../api';

export const Globales = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fecthdata();
  }, []);

  const fecthdata = async () => {
    const res = await Api.get_data();

    setData(res);
  };

  return (
    <>

      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={[styles.numberText, {fontSize: 36}]}>
            {data?.datos_globales?.casos_de_coronavirus}
          </Text>
          <Text style={styles.texts}>Casos actuales</Text>
        </View>
        <View style={styles.box}>
          <Text style={[styles.numberText, {fontSize: 30}]}>
            {data?.datos_globales?.casos_nuevos}
          </Text>
          <Text style={styles.texts}>Casos nuevos</Text>
        </View>
        <View
          style={[
            styles.box,
            {flexDirection: 'row', justifyContent: 'space-evenly'},
          ]}>
          <View style={styles.boxDeaths}>
            <Text style={[styles.numberText, {fontSize: 24}]}>
              {data?.datos_globales?.muertes}
            </Text>
            <Text style={styles.texts}>Muertes</Text>
          </View>
          <View style={styles.boxNewDeaths}>
            <Text style={[styles.numberText, {fontSize: 24}]}>
              {data?.datos_globales?.muertes_nuevas}
            </Text>
            <Text style={styles.texts}>Muertes nuevas</Text>
          </View>
        </View>
      </View>
      {}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '70%',
    width: '100%',
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-evenly',
  },

  box: {
    width: '100%',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts: {
    color: '#D9D9D9',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'SourceCodePro-Regular',
  },
  numberText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'SourceCodePro-Bold',
  },
});
