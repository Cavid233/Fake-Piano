import allNotes from './Notes';

import Music from '../models/Music';

const MusicsList = [
  new Music('Gravity Falls', require('../assets/gravityFalls.jpg'), [
    ...allNotes.gravityFalls,
  ]),
  new Music('Soviet Union Anthem', require('../assets/SovietAnthem.jpg'), [
    ...allNotes.ussrAnthem_2,
  ]),
  new Music('Jingle Bells', require('../assets/jingleBells.jpg'), [
    ...allNotes.jingleBells,
  ]),
  new Music('Red Light Green Light', require('../assets/redGreenLight.jpg'), [
    ...allNotes.redGreenLight,
  ]),
  new Music('Polish Cow', require('../assets/polishCow.jpg'), [
    ...allNotes.polishCow,
  ]),
  new Music('Baby Shark', require('../assets/babyShark.jpg'), [
    ...allNotes.babyShark,
  ]),

  new Music('Star Wars', require('../assets/starWars.jpg'), [
    ...allNotes.StarWars,
  ]),
  new Music('Despacito', require('../assets/despacito.jpg'), [
    ...allNotes.despacito,
  ]),
  new Music('Bad Guy', require('../assets/badGuy.jpg'), [...allNotes.badGuy]),
  new Music('Game Of Thrones', require('../assets/gameOfThrones.jpg'), [
    ...allNotes.gameOfThrones,
  ]),

  new Music('Happy Birthday', require('../assets/happyBirthday.jpg'), [
    ...allNotes.happyBirtdhay,
  ]),
  new Music('Shape Of You', require('../assets/shapeOfYou.jpg'), [
    ...allNotes.shapeOfYou,
  ]),
  new Music(
    'Pirates Of Caribbean',
    require('../assets/piratesOfCaribbean.jpg'),
    [...allNotes.caribbean],
  ),
  new Music('Chicks', require('../assets/cuce.jpg'), [...allNotes.cuce]),
];

export default MusicsList;
