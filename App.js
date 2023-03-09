import React from 'react';
import { Image, ImageBackground, StyleSheet ,Text,View} from 'react-native';
import image from './assets/img1.png';
import logo from './assets/logo.png'
import P from './Screens/S1'

const App = () => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <Image source={logo} style={styles.logo}/>
      <P></P>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  logo:{
    width: '50%', 
    aspectRatio: 1, 
    position: 'absolute', 
    top: '20%', 
    left: '7%', 
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;