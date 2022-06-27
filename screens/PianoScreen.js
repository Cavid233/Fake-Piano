import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

import Orientation from 'react-native-orientation';
import {useIsFocused} from '@react-navigation/native';

import BotttomPianoKeys from '../components/piano/BotttomPianoKeys';
import TopPianoKeys from '../components/piano/TopPianoKeys';

let Sound = require('react-native-sound');
const playMusic = music => {
  const speech = new Sound(music, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.warn('failed to load the sound', error);

      return;
    }
    speech.play(success => {
      if (!success) {
        console.warn('playback failed due to audio decoding errors');
      } else {
        speech.release();
      }
    });
    return;
  });
};

const pianoButtonNotesList = [
  'm_040.mp3',
  'm_042.mp3',
  'm_044.mp3',
  'm_045.mp3',
  'm_047.mp3',
  'm_049.mp3',
  'm_051.mp3',
  'm_052.mp3',
  'm_054.mp3',
  'm_056.mp3',
];

let num = 0;
const PianoScreen = props => {
  const notes = props.route.params.notes && props.route.params.notes;

  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  const playSound = () => {
    const mSound = notes;

    let source = pianoButtonNotesList[mSound[num] - 1];
    num++;

    if (num == mSound.length) {
      num = 0;
    }
    playMusic(source);
  };

  const FocusAwareStatusBar = props => {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
  };

  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        backgroundColor={'black'}
        barStyle={'light-content'}
      />

      <BotttomPianoKeys playSound={playSound} />
      <TopPianoKeys playSound={playSound} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default PianoScreen;
