import React from 'react';
import { StyleSheet,Text,View,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const P = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.text}>Design </Text>
      <Text style={styles.text1}>System</Text>
      <Text style={styles.text2}>Fully Coded React Native Components.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text:{
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

export default P;
