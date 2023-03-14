import React from 'react';
import { StyleSheet, Text, View ,Image,ImageBackground,TouchableOpacity} from 'react-native';
import bg from './assets/bg.png'
import { MaterialIcons } from '@expo/vector-icons'; 
import { CheckBox } from 'react-native-elements';
import git from './assets/git.png';
import google from './assets/google.png';

const App = () => {
  return (
    <ImageBackground source={bg} style={styles.image}>
      <View style={styles.container1}>
        <MaterialIcons name="navigate-before" size={29} color="white" style={styles.arrowicon}/>
        <Text style={styles.arrowtext}>Create Account</Text>
        <MaterialIcons name="notifications" size={22} color="white" left='180%' style={styles.arrowicon}/>
        <MaterialIcons name="circle" size={9} color="red" left='161%' top='11%' />
        <MaterialIcons name="crop-square" size={16} color="white" left='160%' top='1%' style={styles.arrowicon}/>
        <MaterialIcons name="room-service" size={13} color="white" left='133%' top='10%' />
      </View>
      <View style={styles.container}>
        <Text top='3%' left='37%' >Sign Up With</Text>
        <View style={styles.container1}>
        <TouchableOpacity style={styles.button4}>
        <View style={styles.buttonContent}>
        <Image source={git} style={styles.buttonImage} />
        <Text style={styles.buttonTitle}>GITHUB</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button4}>
        <View style={styles.buttonContent}>
        <Image source={google} style={styles.buttonImage} />
        <Text style={styles.buttonTitle}>GOOGLE</Text>
        </View>
        </TouchableOpacity>
        </View>
      </View>

      <View style={styles.conin}> 
      <Text top='3%' left='28%' style={{  color:'#8898AA'}}>Or Sign Up With Credentials</Text>
        <TouchableOpacity style={styles.button}>
        <View style={styles.container1}>
            <MaterialIcons name="person" size={20} color="#8898AA"  top={3} marginLeft={15} />
            <Text style={styles.buttonText}>Name</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
        <View style={styles.container1}>
            <MaterialIcons name="email" size={20} color="#8898AA"  top={3} marginLeft={15} />
            <Text style={styles.buttonText}>Email</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
        <View style={styles.container1}>
            <MaterialIcons name="lock" size={20} color="#8898AA"  top={3} marginLeft={15} />
            <Text style={styles.buttonText}>Password</Text>
        </View>
        </TouchableOpacity>
        <Text top='26%' left='8%' style={{ color: '#8898AA' }}>Password Strength :</Text>
        <Text top='21%' left='44%' style={{ color: 'green' }}>Strong</Text>
        <View style={styles.checkbox} >
            <CheckBox />
            <Text bottom='40%' left='13%' style={{  color:'#454545 '}}>I agree with the</Text>
            <Text bottom='61%' left='41%' style={{color:'blue'}}>Privacy Policy</Text>
        </View>
          <TouchableOpacity style={styles.button3}>
            <Text style={styles.button3Text}>CREATE  ACCOUNT</Text>
          </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}
const styles=StyleSheet.create({
  image:{
    flex:1,
    resizemode:'cover',
  },
  container1: {
    flexDirection: 'row',
  },
  container: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right:  20,
    height: '75%',
    backgroundColor: 'white',
  },
  conin: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    right:  20,
    height: '58%',
    backgroundColor: '#F4F5F9',
  },
  arrowicon: {
    marginTop: 45,
    marginRight: 5,
    marginLeft: 17,
  },
  arrowtext: {
    marginTop: 45, 
    color: 'white',
    fontSize: 18,
    marginLeft: 5, 
  },
  text:{
    color: '#8898AA',
    fontSize:15,
    top:'35%',
  },
  button:{
    top:'10%',
    width:'90%',
    marginLeft:20,
    paddingVertical:8,
    backgroundColor:'white',
    borderRadius:5,
    elevation: 3,
  },
  buttonText: {
    color: '#8898AA',
    fontSize: 18,
    marginLeft:20,
  },
  button1:{
    top:'15%',
    width:'90%',
    marginLeft:20,
    paddingVertical:8,
    backgroundColor:'white',
    borderRadius:5,
    elevation: 3,
  },
  button2:{
    top:'20%',
    width:'90%',
    marginLeft:20,
    paddingVertical:8,
    backgroundColor:'white',
    borderRadius:5,
    elevation: 3,
  },
  checkbox:{
    top:'20%',
    left:'2%',
  },
  button3:{
    top:'14%',
    width:'40%',
    marginLeft:110,
    paddingVertical:8,
    backgroundColor:'#5E72E4',
    borderRadius:5,
    
  },
  button3Text: {
    color: 'white',
    fontSize: 13,
    fontWeight:'bold',
    marginLeft:17,
  },
  button4: {
    width:'40%',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    top:'9%',
    elevation:3,
    marginLeft:22
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonTitle: {
    color: 'blue',
    fontWeight:'bold',
  },
})
export default App