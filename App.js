import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import bluelogo from './assets/bluelogo.png'
import { Feather } from '@expo/vector-icons';
import P from './Screens/S2'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <Image source={bluelogo} style={styles.logo} />
      <Feather name="menu" style={styles.menuIcon} />
      <P></P>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBECF0',
    width: '80%',
    height: '100%',
    alignItems: 'flex-start',
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    right:'4%',
  },
  logo: {
    width: '43%',
    height:'6%', 
    aspectRatio: 1, 
    position: 'absolute', 
    top: '7%', 
    left: '15%', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 22, 
    top: '18%', 
    left: '45%', 
  },
});


