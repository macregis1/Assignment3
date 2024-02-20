import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens

import HomeScreen from './screens/HomeScreen';
import CalculatorScreen from './screens/CalculatorScreen';
import ContactScreen from './screens/ContactScreen';

//names of screens

const homeName = 'Home';
const contactName = 'Contact';
const calculatorName = 'Calculator';

const Tab = createBottomTabNavigator();

export default function MContainer(){
    return(
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === calculatorName) {
              iconName = focused ? 'calculator' : 'calculator-outline';
            } else if (rn === contactName) {
              iconName = focused ? 'call' : 'call-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'grey',
          tabBarInactiveTintColor: 'blue',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          tabBarStyle: { padding: 10, height: 70 },
        })}
      >
            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={calculatorName} component={CalculatorScreen} />
            <Tab.Screen name={contactName} component={ContactScreen} />

            </Tab.Navigator>
    )
}