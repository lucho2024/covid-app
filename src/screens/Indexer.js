/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Main} from './Main';
import {Continents} from './Continents';
import {Countries} from './Countries';
import {Text} from 'react-native';


const Tab = createBottomTabNavigator();

export const Indexer = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Continents" component={Continents} />
        <Tab.Screen name="Main" component={Main} />
        <Tab.Screen name="Countries" component={Countries} />
      </Tab.Navigator>
    </>
  );
};
