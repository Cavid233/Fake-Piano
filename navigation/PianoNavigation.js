import React from 'react';
import {Platform} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack'; // NEW

// import { FontAwesome } from "@expo/vector-icons";
import HomeScreen from //   screenOptions as testScreenOptions, // , {
// }
'../screens/HomeScreen';

import PianoScreen from '../screens/PianoScreen';

// import { MaterialIcons } from "@expo/vector-icons";
// import defaultWidth from '../Constants/width-dimension';
// import { AntDesign } from "@expo/vector-icons";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import * as Linking from "expo-linking";

const defaultNavOptions = {
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 28,
  },
  headerTitleAlign: 'center',
  headerShown: false,
  headerTintColor: Platform.OS === 'android' ? 'white' : 'pink',
};

const PianoStackNavigator = createStackNavigator();

const PianoNavigation = props => {
  return (
    <PianoStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <PianoStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ orientation: 'landscape' }}

        // options={testScreenOptions}
      />
      <PianoStackNavigator.Screen
        name="PianoScreen"
        component={PianoScreen}
        options={{ orientation: 'landscape' }}

        // options={testScreenOptions}
      />
      {/* <PianoStackNavigator.Screen
        name="WG_DictOverview"
        component={WG_DictScreen}
        options={WG_DictScreenOptions}
      /> */}
    </PianoStackNavigator.Navigator>
  );
};

export default PianoNavigation;
