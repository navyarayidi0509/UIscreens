import React from 'react';
import { View, Text, StyleSheet ,Button,ImageBackground,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import img1 from '../assets/img1.png'
import pc from '../assets/profilepic.png'
import img from '../assets/images.png'

const Profile = () => {
  const navigation = useNavigation();
  
  return (
    <ImageBackground source={require('../assets/img1.png')} style={styles.backgroundImage}>
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.circle}>
        <Image source={pc} style={styles.image1}/>
          </View>
          <View style={{ flexDirection: 'row',top:'17%' }}>
         <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>Connect</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button1}>
         <Text style={styles.buttonText}>Message</Text>
         </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'space-around' ,top:'22%'}}>
        <Text style={{fontSize: 18 }}>2k</Text>
        <Text style={{left:'-29%',fontSize: 18 }}>10</Text>
        <Text style={{fontSize: 18 ,right:'27%'}}>89</Text>
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'space-around' ,top:'21%'}}>
        <Text style={{fontSize: 16,color:'#454545' }}>Friends</Text>
        <Text style={{left:'29%',fontSize: 16,color:'#454545'}}>Photos</Text>
        <Text style={{fontSize: 16,color:'#454545' }}>Comments</Text>
        </View>
        <View style={{top:'19%'}}>
          <Text style={{fontSize: 22,color:'black' ,left:'26%'}}>Jessica Jones,27</Text>
          <Text style={{fontSize: 16,color:'#454545',left:'33%' }}>San Francisco,USA</Text>
        </View>
        <View style={styles.line}></View>
        <View style={{top:'19%'}}>
        <Text style={{fontSize: 14,color:'#454545' ,left:'19%'}}>An artist of considerable range,Jessica</Text>
        <Text style={{fontSize: 14,color:'#454545' ,left:'26%'}}>name taken by Melbourne....</Text>
        <Text style={{fontSize: 15,color:'blue' ,left:'39%'}}>Show More..</Text>
        <Text style={{fontSize: 15,color:'black' ,left:'6%'}}>Album</Text>
        <Text style={{fontSize: 13,color:'blue' ,right:'-85%'}}>View All</Text>
        </View>
         <Image source={img} style={styles.image2}/>
          <Image source={img} style={styles.image3}/>
          <Image source={img} style={styles.image4}/>
          <Image source={img} style={styles.image5}/>
          <Image source={img} style={styles.image6}/>
          <Image source={img} style={styles.image7}/>
      </View>
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
  container1: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right:  20,
    height: '80%',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height:'40%',
    
  },
  image1: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  circle: {
    position: 'absolute',
    top: '-13%', 
    left: '38%',
    height: '23%',
    width: '30%',
    borderRadius: 50,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#11CDEF',
    padding: 4,
    borderRadius: 5,
    marginHorizontal: 13,
   marginLeft:120,
  },
  button1: {
    backgroundColor: '#172B4D',
    padding: 4,
    borderRadius: 5,
    marginHorizontal: 12,
   
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#454545',
    marginVertical: 10,
    marginHorizontal:39,
    top:'19%',
   
  },
  image5: {
    height: '13%',
    width: '30%',
    borderRadius: 6,
    top:'-4%',
    left:'4%',
   
  },
  image3: {
    height: '13%',
    width: '30%',
    borderRadius: 6,
    top:'8%',
    left:'35%'
  },
  image4: {
    height: '13%',
    width: '30%',
    borderRadius: 6,
    top:'-5%',
    left:'66%'
  },
  image2: {
    height: '13%',
    width: '30%',
    borderRadius: 6,
    top:'21%',
    left:'4%',
  },
  image6: {
    height: '13%',
    width: '30%',
    borderRadius: 6,
    top:'-17%',
    left:'35%'
  },
  image7: {
    height: '13%',
    width: '30%',
    borderRadius: 6,
    top:'-30%',
    left:'66%'
  },
});

export default Profile;
