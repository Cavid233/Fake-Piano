import React, {useEffect} from 'react';
import {View, ScrollView, StatusBar} from 'react-native';

import MusicsList from '../data/musicsList';
import Card from '../components/home/Card';

import Orientation from 'react-native-orientation';
import {useIsFocused} from '@react-navigation/native';

const HomeScreen = () => {
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  const isFocused = useIsFocused();
  if (isFocused) {
    Orientation.lockToPortrait();
  }

  const FocusAwareStatusBar = props => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FocusAwareStatusBar
        backgroundColor={'black'}
        barStyle={'light-content'}
      />
      <ScrollView
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
      >
        {MusicsList.map(element => (
          <Card
            key={element.id}
            title={element.title}
            pianoNotes={element.pianoNotes}
            imgScr={element.imgScr}
          />
        ))}

      </ScrollView>

    </View>
  );
};

export default HomeScreen;
