/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Api from '../api';
import {CCountry} from './CCountry';

export const CCountries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fecthdata();
  }, []);

  const fecthdata = async () => {
    const res = await Api.get_data();

    setData(res.paises);
  };

  return (
    <View>
      {data.map((pais) => (
        <CCountry key={pais.numero_pais} pais={pais}></CCountry>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});
