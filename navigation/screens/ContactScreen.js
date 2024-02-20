import * as React from 'react';
import{View, Text} from 'react-native';

export default function ContactScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text onPress={() => navigation.navigate('Home')} style={{fontSize: 26, fontWeight: 'bold'}}>
                contact Screen
                Ndahiro N Regis
                Mobile App Assignment
                nregids552@gmail.com
            </Text>
        </View>
    );
}