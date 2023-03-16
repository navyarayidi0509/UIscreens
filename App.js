import * as React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import bluelogo from './assets/bluelogo.png'

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function Examples({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>exampletext</Text>
    </View>
  );
}

function Components({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,marginLeft:20}}>
      <Text>Components</Text>
    </View>
  );
}
 
function Articles({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ArticlesScreen</Text>
    </View>
  );
}

function Account({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Account</Text>
    </View>
  );
}

function Gettingstarted({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>get started and logout</Text>
    </View>
  );
}

function Documentation({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>get started</Text>
    </View>
  );
}

function Logout({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>logout page</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{
      marginLeft: 10,
    }} >
      <Image source={require('./assets/bluelogo.png')} style={styles.logo} />
      <View style={styles.menuContainer}>
      <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen}  style={{marginRight:10}}
        options={{
          drawerIcon: ({ tintColor, size }) => (
            <Feather name="home" size={15} color={tintColor} />
          ),
        }}  
      />
      <Drawer.Screen name="Examples" component={Examples} 
        options={{
          drawerIcon: ({ tintColor, size }) => (
            <Feather name="square" size={13} color={'red'} />
          ),
        }}  
      />
      <Drawer.Screen name="Components" component={Components}
      options={{
        drawerIcon: ({}) => (
          <View style={{marginLeft:10}}>
            </View>
          ),
        }} 
      />
      
      <Drawer.Screen name="Articles" component={Articles} 
        options={{
          drawerIcon: ({ tintColor, size }) => (
            <Feather name="activity" size={15} color={tintColor} />
          ),
        }} 
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} 
        options={{
          drawerIcon: ({ tintColor, size }) => (
            <Feather name="user" size={15} color={tintColor} />
          ),
        }}  
      />
      <Drawer.Screen name="Account" component={Account} 
        options={{
          drawerIcon: ({ tintColor, size }) => (
            <Feather name="credit-card" size={15} color={tintColor} />
          ),
        }}  
      />
      <Drawer.Screen name="DOCUMENTATION" component={Documentation}
      />
      <Drawer.Screen name="Getting started" component={Gettingstarted} 
        options={{
          drawerIcon: ({ tintColor, size }) => (
            <Feather name="play-circle" size={15} color={tintColor} />
          ),
        }}  
      />
       
      <Drawer.Screen name="logout" component={Logout}
        options={{
          drawerIcon: ({ tintColor, size }) => (
            <Feather name="log-out" size={15} color={tintColor} />
          ),
        }} 
      />
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer >
      <DrawerNavigator></DrawerNavigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
logo: {
  width: '36%',
  height:'5%', 
  aspectRatio: 1, 
  position: 'absolute', 
  marginLeft:20,
  marginTop:25,
},
menuContainer: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  marginTop:40,
},
})