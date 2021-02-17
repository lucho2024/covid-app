import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {List} from 'react-native-paper';

export const CCountry = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section>
      <List.Accordion
        left={() => (
          <View style={styles.container}>
            <View style={styles.containers2}>
              <Text style={styles.textonum}>{props.pais.numero_pais}</Text>
            </View>

            <View style={styles.containers}>
              <Text style={styles.textos}>{props.pais.nombre_pais}</Text>
            </View>

            <View style={styles.containers}>
              <Text style={styles.numeros}>Casos</Text>
              <Text style={styles.numeros}>{props.pais.totalcasos_pais}</Text>
            </View>

            <View style={styles.containers}>
              <Text style={styles.numeros}>Muertes</Text>
              <Text style={styles.numeros}>{props.pais.totalmuerte_pais}</Text>
            </View>

            <View style={styles.containers}>
              <Text style={styles.numeros}>Recuperados</Text>
              <Text style={styles.numeros}>
                {props.pais.totalrecuperados_pais}
              </Text>
            </View>
          </View>
        )}>
        <View style={styles.ladronGrande}>
          <View style={styles.ladronchiquito}>
            <Text style={styles.ladrontext}>Casos activos</Text>
            <Text style={styles.ladrontext}>
              {props.pais.casosactivos_pais}{' '}
            </Text>
          </View>

          <View style={styles.ladronchiquito}>
            <Text style={styles.ladrontext}>Casos criticos</Text>
            <Text style={styles.ladrontext}>
              {props.pais.severoscasos_pais}
            </Text>
          </View>

          <View style={styles.ladronchiquito}>
            <Text style={styles.ladrontext}>Casos por millon</Text>
            <Text style={styles.ladrontext}>
              {props.pais.casospormillon_pais}
            </Text>
          </View>

          <View style={styles.ladronchiquito}>
            <Text style={styles.ladrontext}>Muertes por millon</Text>
            <Text style={styles.ladrontext}>
              {props.pais.muertespormillon_pais}
            </Text>
          </View>

          <View style={styles.ladronchiquito}>
            <Text style={styles.ladrontext}>Nro pruebas</Text>
            <Text style={styles.ladrontext}>
              {props.pais.numeropruebas_pais}
            </Text>
          </View>

          <View style={styles.ladronchiquito}>
            <Text style={styles.ladrontext}>Nro millon</Text>
            <Text style={styles.ladrontext}>
              {props.pais.numeropruebaspormillon_pais}
            </Text>
          </View>
        </View>
      </List.Accordion>
    </List.Section>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    height: 50,
    borderRadius: 8,
    flexDirection: 'row',
    backgroundColor: '#A1002E',
    marginBottom: -10,
  },
  ladronGrande: {
    backgroundColor: 'white',
    width: '90%',
    marginLeft: 15,
    marginTop: 2,
    padding: 10,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  ladrontext: {
    textAlign: 'center',
    color: '#C70039',
    flex: 1,
  },

  ladronchiquito: {
    color: '#C70039',
    justifyContent: 'space-evenly',
    alignItems: 'center',

    marginLeft: -65,
    display: 'flex',
    flexDirection: 'row',
  },
  containers: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginLeft: 2,
    justifyContent: 'space-evenly',
    textAlign: 'center',
    alignItems: 'center',
  },
  containers2: {
    borderRadius: 8,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: 50,
    backgroundColor: 'white',
  },
  textonum: {
    color: '#A1002E',
    fontSize: 15,
    fontWeight: 'bold',
  },
  numeros: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  textos: {
    fontSize: 15,
    color: 'white',
  },
});
