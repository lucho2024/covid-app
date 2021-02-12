/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
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
      <View style={styles.contenedor_g}>
        <View style={styles.contenedores}>
          <Text style={styles.text}>Casos actuales</Text>
          <Text style={styles.text_num}>
            {data?.datos_globales?.casos_de_coronavirus}
          </Text>
        </View>

        <View style={styles.contenedores}>
          <Text style={styles.text}>Casos nuevos</Text>
          <Text style={[styles.text_num, {width: '40%'}]}>
            {data?.datos_globales?.casos_nuevos}
          </Text>
        </View>

        <View style={styles.contenedores}>
          <View style={[styles.text,{paddingTop: 20}]}>
            <Text
              style={{
                color: '#E30041',
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              Muertes
            </Text>
           
            <Text
              style={{
                color: '#E30041',
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Muertes nuevas
            </Text>
          </View>

          <View style={[styles.text_num, {width: '30%'}]}>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              {data?.datos_globales?.muertes}
            </Text>
            <Text
              style={{color: 'white', textAlign: 'center', fontWeight: 'bold'}}>
              {data?.datos_globales?.muertes_nuevas}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor_g: {
    width: '100%',
    height: '70%',
    display: 'flex',
    justifyContent: 'center',

    position: 'absolute',
    bottom: 0,
  },

  contenedores: {
    height: '20%',
    margin: 0,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },

  text: {
    color: '#E30041',
    fontWeight: 'bold',
    backgroundColor: 'white',
    width: '40%',
    height: '100%',
    textAlign: 'center',
    paddingTop: 30,
    borderTopLeftRadius: 12,
    fontSize: 15,
    borderBottomLeftRadius: 12,
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  text_num: {
    width: '50%',
    height: '100%',
    paddingTop: 20,
    backgroundColor: '#6E001F',

    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  
});
