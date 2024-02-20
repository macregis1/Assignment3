import 'react-native-gesture-handler';
import React, {useContext} from 'react'
import { SafeAreaView, View, StatusBar, StyleSheet, ActivityIndicator } from 'react-native'
import DContainer from './DContainer'
import { NavigationContainer,DarkTheme } from '@react-navigation/native';
import AuthStack from './AuthStack'
import { AuthContext } from './AutoContext';

const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);
  if (isLoading) {
    return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <ActivityIndicator size={'large'}/>
    </View>
    );
  }
  return (
    <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer >
          {userToken !== null ? <DContainer /> : <AuthStack />}
            {/* <AuthStack /> */}
        </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})

export default AppNav