import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import LoginScreen from './src/pages/LoginScreen';

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

  return (
    <LoginScreen />
  );
};

export default App;