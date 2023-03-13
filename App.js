import React from 'react';
import { StyleSheet, Text, View ,Image,ImageBackground} from 'react-native';
import bluelogo from './assets/bluelogo.png'
import image from './assets/img1.png'
import logo from './assets/logo.png'
import P from './Screens/S1'
import { Feather } from '@expo/vector-icons';
import P from './Screens/S2'

const App = () => {
  return (
    <ImageBackground source={image} style={Styles.image}>
      <Image source={logo} style={styles.logo}/>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
  image:{
    flex:1,
    resizemode:convertLength,
  },
  logo:{
    width:'50%',
    aspectRatio:1,
    position:'absolute',
    top:'20%',
    left:'7%',
    justifyContent:'center',
    alignItems:'center'
  }
})


