import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const CCountry = (props) => {
  const [expanded, setExpanded] = React.useState(true);

  return (

    <View>
       <View>
          <Text></Text>
        </View>

        <View>
          <Text>{props.pais.nombre_pais}</Text>
        </View>

        <View>
          <Text>Casos</Text>
          <Text>{props.pais.totalcasos_pais}</Text>
        </View>

        <View>
          <Text>Muertes</Text>
          <Text>{props.pais.totalmuerte_pais}</Text>
        </View>

        <View>
          <Text>Recuperados</Text>
          <Text>{props.pais.totalrecuperados_pais}</Text>
        </View> 
    </View>    
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'blue',
    width: '100%',
  },
});
