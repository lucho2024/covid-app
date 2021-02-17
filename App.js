import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Indexer} from './src/screens/Indexer';
import { Cities } from './src/screens/Cities';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer DefaultTheme={DarkTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Indexer}
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: '#3E0012',
            },
          }}
        />
        <Stack.Screen
          name="Cities"
          component={Cities}
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: '#3E0012',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
