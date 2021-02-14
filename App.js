import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Indexer} from './src/screens/Indexer';

const Stack = createStackNavigator();


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
