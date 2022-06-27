import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';

const TopPianoKeys = props => {
  const pianoTopKeys = ['C#', 'D#', 'F#', 'G#', 'A#', 'C#', 'D#'];

  const upperPianoButtonLeftMarginList = [
    '69%',
    '0%',
    '99%',
    '0%',
    '0%',
    '99%',
  ];

  return (
    <View style={styles.topPianoKeysContainer}>
      {pianoTopKeys.map((element, index) => (
        <View
          onTouchStart={() => {
            props.playSound(index, 2);
          }}
          style={{
            ...styles.topPianoKeyView,
            marginLeft: upperPianoButtonLeftMarginList[index],
          }}
          key={index}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('red')}>
            <View style={styles.topPianoKey}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 25,
                  fontFamily: 'Redressed-Regular',
                }}>
                {element}
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  topPianoKeysContainer: {
    width: '10%',
    height: '100%',
    flexDirection: 'row',
    position: 'absolute',
  },
  topPianoKeyView: {
    width: '100%',
  },
  topPianoKey: {
    width: '70%',
    height: '50%',
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 5,
  },
});

export default TopPianoKeys;
