import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const P = () => {
    return (
      <View>
        <TouchableOpacity style={styles.button}>
            <MaterialIcons name="home" size={20} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
            <View style={styles.container1}>
                <View style={styles.example}/>
                <Text style={styles.exampletext}>Examples</Text>
            </View>
            <Text style={styles.componenttext}>Components</Text>
            <View style={styles.container1}>
                <MaterialIcons name="article" size={19} color="black" style={styles.articleicon}/>
                <Text style={styles.articletext}>Articles</Text>
            </View>
            <View style={styles.container1}>
                <MaterialIcons name="person" size={21} color="black" style={styles.profileicon}/>
                <Text style={styles.profiletext}>Profiles</Text>
            </View>
            <View style={styles.container1}>
                <MaterialIcons name="account-circle" size={20} color="black" style={styles.accounticon}/>
                <Text style={styles.accounttext}>Account</Text>
            </View>
            <View style={styles.line}/>
            <Text style={styles.documentation}>DOCUMENTATION</Text>
            <View style={styles.container1}>
                <MaterialIcons name="launch" size={20} color="#8898AA" style={styles.getstartedicon}/>
                <Text style={styles.getstartedtext}>Getting started</Text>
            </View>
            <View style={styles.container1}>
                <MaterialIcons name="logout" size={20} color="#8898AA" style={styles.logouticon}/>
                <Text style={styles.logouttext}>Logout</Text>
            </View>
      </View>
    )
}
 
export default P
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#5E72E4',
      paddingVertical: 10,
      top:'43%',
      paddingHorizontal: 115, 
      borderRadius: 4,
      left:'3%',
      flexDirection: 'row',
      alignItems:'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      right:'348%'
    },
    icon: {
      right:'390%'
    },
    container1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      example:{
        width: 13,
        height: 13,
        top:'52%',
        left:'100%',
        borderWidth: 1,
        borderColor: '#FB6340',
        backgroundColor: 'white',
      },
      
      exampletext: {
        justifyContent: 'space-between',
        color: '#8898AA',
        fontSize:20,
        top:'52%',
        right:'530%',
      },
      componenttext:{
        marginLeft: 67,
        color: '#8898AA',
        fontSize:20,
        top:'25%',
      },
      articleicon: {
        top:'65%',
        marginRight: 5, 
        marginLeft:25,
      },
      articletext: {
        top:'65%',
        color: '#8898AA',
        fontSize: 18,
        right:'680%',
      },
      profileicon: {
        top:'69%',
        marginLeft: 23, 
        alignItems:'flex-start',
      },
      profiletext: {
        top:'69%',
        color: '#8898AA',
        fontSize: 18,
        marginRight:170, 
      },
      accounticon: {
        top:'73%',
        marginLeft: 24, 
        alignItems:'flex-start',
      },
      accounttext: {
        top:'73%',
        color: '#8898AA',
        fontSize: 18,
        marginRight:165, 
      },
      line: {
        borderBottomColor: '#8898AA',
        borderBottomWidth: 1,
        width: '95%', 
        marginVertical: 10,
        alignSelf: 'center', 
        top:'34%',
        right:'10%',
        left:'6%',
        
      },
      documentation:{
        marginLeft:38,
        color: '#8898AA',
        fontSize:15,
        top:'35%',
      },
      getstartedicon: {
        top:'85%',
        marginLeft:28, 
      },
      getstartedtext: {
        top:'85%',
        color: '#8898AA',
        fontSize: 18,
       marginRight:110,
      },
      logouticon: {
        top:'89%',
        marginLeft:28, 
       },
      logouttext: {
        top:'89%',
        color: '#8898AA',
        fontSize: 18,
        marginRight:170,
      },
})