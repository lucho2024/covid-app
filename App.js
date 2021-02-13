import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Main} from './src/screens/Main';
import {Continents} from './src/screens/Continents';
import {Countries} from './src/screens/Countries';
import {Indexer} from './src/screens/Indexer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Indexer}
          options={{
            headerShown: false,
            
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
