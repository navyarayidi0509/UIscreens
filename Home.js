import React from 'react';
import { View, Text, StyleSheet,Button,ImageBackground,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import image from '../assets/img1.png';
import logo from '../assets/logo.png';

const Home = () => {
    const navigation = useNavigation();
  return (
    <ImageBackground source={image} style={styles.image}>
      <Image source={logo} style={styles.logo}/>
      <View>
      <Text style={styles.text}>Design </Text>
      <Text style={styles.text1}>System</Text>
      <Text style={styles.text2}>Fully Coded React Native Components.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

    </View>
     </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  },text:{
    color:'white',
    fontSize: 50,
    marginHorizontal: 30,
    paddingTop:280,
    fontWeight: "bold" ,
    letterSpacing: 2,
  },
  text1:{
    color:'white',
    fontSize: 50,
    marginHorizontal: 30,
    fontWeight: "bold" ,
    letterSpacing: 2,
  },
  text2:{
    color:'white',
    fontsize:10,
    top: '3%', 
    left: '8%', 
    letterSpacing: 1,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 120,
    borderRadius: 5,
    marginBottom: 20,
    top:'30%'
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: "bold" ,
  },
});

export default Home;
