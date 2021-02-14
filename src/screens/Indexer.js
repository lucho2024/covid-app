/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Main} from './Main';
import {Continents} from './Continents';
import {Countries} from './Countries';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Tab = createBottomTabNavigator();

export const Indexer = () => {
  return (
    <>
    
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused
                ? "globe"
                : "globe";
            } else if (route.name === 'Continents') {
              iconName = focused ? 'globe-americas' : 'globe-americas';
            }else if (route.name === 'Countries'){
              iconName = focused ? 'font-awesome-flag' : 'font-awesome-flag';
            }
            
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#9E002D',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: {
            backgroundColor: "white",
            height: 60,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}

        initialRouteName={"Main"}

      >
        <Tab.Screen name="Continents" component={Continents}/>

        <Tab.Screen  name="Main" component={Main} />
        <Tab.Screen name="Countries" component={Countries} />
      </Tab.Navigator>
    </>
  );
};
