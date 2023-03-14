import React from 'react';
import { Image, ImageBackground, StyleSheet ,Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import image from './assets/img1.png';
import logo from './assets/logo.png';
import P from './Screens/S1';
import DetailScreen from './Screens/DetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Details" component={DetailScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <Image source={logo} style={styles.logo}/>
      <P />
    </ImageBackground>
  );
};

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  }
});

export default App;
