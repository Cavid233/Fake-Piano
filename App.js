import React, { useEffect } from 'react';

import {NavigationContainer} from '@react-navigation/native';

import PianoNavigation from './navigation/PianoNavigation';
import SplashScreen from 'react-native-splash-screen'


export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <PianoNavigation />
    </NavigationContainer>
  );
}
