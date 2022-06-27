import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';

const BotttomPianoKeys = props => {
  const pianoBottomKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C', 'D', 'E'];

  return (
    <View style={styles.BottomPianoKeysContainer}>
      {pianoBottomKeys.map((element, index) => (
        <View
          key={index}
          onTouchStart={() => {
            props.playSound(index, 1);
          }}
          style={styles.bottomPianoKeyView}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple('red')}>
            <View style={styles.bottomPianoKey}>
              <Text
                style={{
                  fontSize: 35,
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
  BottomPianoKeysContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomPianoKeyView: {
    width: '9.6%',
  },
  bottomPianoKey: {
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, .8); ',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default BotttomPianoKeys;
