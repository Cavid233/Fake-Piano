import React from 'react';

import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Card = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        onPress={() =>
          navigation.navigate('PianoScreen', {
            notes: props.pianoNotes,
          })
        }
        useForeground={true}>
        <View style={styles.subContainer}>
          <Image
            source={props.imgScr}
            resizeMode={'stretch'}
            style={{width: '97%', height: '85%'}}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 2,
    height: windowHeight / 2.5,
    marginVertical: 7,
  },
  subContainer: {flex: 1, alignItems: 'center'},
  titleContainer: {
    width: '97%',
    height: '15%',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'brown',
  },
  title: {color: 'white', fontWeight: 'bold', fontSize: 16},
});

export default Card;
