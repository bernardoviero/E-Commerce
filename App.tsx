import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import Login from './src/screens/LoginScreen';
import Home from './src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'IBMPlexSans-SemiBold': require('./assets/fonts/IBM/IBMPlexSans-SemiBold.ttf'),
        'IBMPlexSans-Regular': require('./assets/fonts/IBM/IBMPlexSans-Regular.ttf'),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
};

export default App;