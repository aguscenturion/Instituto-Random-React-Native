import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../components/pages/Home';
import Anuncios from '../components/pages/Anuncios';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export const Tabs = ()=>{
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Configuracion') {
              iconName = focused
                ? 'person-circle'
                : 'person-circle-outline';
            } else if (route.name === 'Anuncios') {
              iconName = focused ? 'megaphone' : 'megaphone-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#560CCE',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Anuncios" component={Anuncios} />
        <Tab.Screen name="Configuracion" component={Home} />
      </Tab.Navigator>
    )
}