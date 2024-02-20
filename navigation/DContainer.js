import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {useContext} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

// Screens
import ProfileScreen from './screens/profile';
import MContainer from './MContainer';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { Touchable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from './AutoContext';

const homeTab = 'HomeTab';
const contactName = 'Contact';
const calculatorName = 'Calculator';
const profileName = 'Profile';
const loginName = 'login';
const registerName = 'register';


const Drawer = createDrawerNavigator();

export default function DContainer() {
  return (    
      <Drawer.Navigator 
      screenOptions={({route}) => ({
                drawerIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeTab) {
                        iconName = focused ? 'home' : 'home-outline';
                    }else if (rn ===calculatorName) {
                        iconName = focused ? 'calculator' : 'calculator-outline';
                    }else if (rn === contactName) {
                        iconName = focused ? 'call' : 'call-outline';
                    }else if (rn === profileName){
                      iconName = focused ? 'image' : 'image-outline';
                    }else if (rn === loginName){
                        iconName = focused ? 'person' : 'person-outline';
                    }else if (rn === registerName) {
                        iconName = focused ? 'person-add' : 'person-add-outline'; 
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}>
        <Drawer.Screen name="HomeTab" component={MContainer} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        {/* <Drawer.Screen name='login' component={LoginScreen} />
        <Drawer.Screen name='register' component={RegisterScreen} />  */}
      </Drawer.Navigator>

   
  );
}


