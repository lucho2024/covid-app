import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Api from '../api';
import AppIntroSlider from 'react-native-app-intro-slider';
import {ActivityIndicator} from 'react-native-paper';

export const CContinents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fecthdata();
  }, []);

  const fecthdata = async () => {
    const res = await Api.get_data();

    setData(res.continentes);
  };

  const _renderItem = ({item}) => {
    const image = {uri: item.imagen};
    return (
      <>
        {data.length > 0 ? (
          <ImageBackground
            style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}
            source={image}>
            <View key={item.key} style={styles.containerContinent}>
              <Text style={styles.titleContinent}>
                {item.nombre_continente}
              </Text>
              <View style={styles.dataContinent}>
                {console.log(item.imagen)}
                <View style={styles.columnData}>
                  <View style={styles.box}>
                    <Text style={styles.numberText}>
                      {item.totalcasos_continente}
                    </Text>
                    <Text style={styles.texts}>Casos</Text>
                  </View>

                  <View style={styles.box}>
                    <Text style={styles.numberText}>
                      {item.totalmuerte_continente}
                    </Text>
                    <Text style={styles.texts}>Muertes</Text>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.numberText}>
                      {item.totalrecuperados_continente}
                    </Text>
                    <Text style={styles.texts}>Recuperados</Text>
                  </View>
                </View>
                <View style={styles.columnData}>
                  <View style={styles.box}>
                    <Text style={styles.numberText}>
                      {item.casosactivos_continente}
                    </Text>
                    <Text style={styles.texts}>Casos activos</Text>
                  </View>

                  <View style={styles.box}>
                    <Text style={styles.numberText}>
                      {item.casos_nuevos_continente}
                    </Text>
                    <Text style={styles.texts}>Casos nuevos</Text>
                  </View>
                  <View style={styles.box}>
                    <Text style={styles.numberText}>
                      {item.casoscriticos_continente}
                    </Text>
                    <Text style={styles.texts}>Casos criticos</Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        ) : (
          <ActivityIndicator color="white" size="large"></ActivityIndicator>
        )}
      </>
    );
  };

  return (
    <AppIntroSlider
      showDoneButton={false}
      showNextButton={false}
      renderItem={_renderItem}
      data={data}
    />
  );
};

const styles = StyleSheet.create({
  containerContinent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 20,
    height: '100%',
  },

  dataContinent: {
    height: '90%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },

  columnData: {
    height: '100%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  box: {},
  texts: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'SourceCodePro-Regular',
  },
  numberText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'SourceCodePro-Bold',
  },

  titleContinent: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'SourceCodePro-Bold',
  },
});
