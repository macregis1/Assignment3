import React,{useContext} from 'react';
import{View, Text, TouchableOpacity, Switch} from 'react-native';
import { AuthContext } from '../AutoContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({navigation}) {
    const {logout} = useContext (AuthContext);
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme); 
    }  
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={() => {logout()}} style={{paddingVertical: 15}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22}/>
            <Text style={{fontSize: 15, marginLeft: 5}}>Logout</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {toggleTheme()}}>
            <View>
                <Text>DarkTheme</Text>
                <View>
                    <Switch value={isDarkTheme}/>
                </View>
            </View>
        </TouchableOpacity>
            <Text onPress={() => alert("this is the home page")} style={{fontSize: 26, fontWeight: 'bold'}}>Home Screen</Text>
        </View>
    );
}