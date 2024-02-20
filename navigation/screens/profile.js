import * as React from 'react';
import{View, Text, Image} from 'react-native';

export default function ProfileScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Image source={require('./profile-pic.jpg')} style={styles.profile} />
            <Text style={styles.name}>Ndahiro N Regis</Text>
        </View>
    );
}
const styles = {
    profile: {
      // Adjust the styles for your profile image
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    name: {
      // Adjust the styles for the name text
      fontSize: 24,
      color: 'blue',
      marginTop: 8,
    },
  };
  