import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet ,Button,ImageBackground} from 'react-native';
import s1 from './Screens/Home';
import Home1 from'./Screens/Home1'
import Profile from './Screens/Profile';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={s1} options={{headerShown: false}}/>
        {/* <Stack.Screen name="Home1" component={Home1} /> */}
        <Stack.Screen name="Profile" component={Profile} options={{ headerStyle: {
            backgroundColor: '#31207F', },headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }, headerRight: () => (
              <View style={{ flexDirection: 'row' }}>
              <MaterialIcons name="notifications-active" size={22} color="white" style={{ marginRight: 29 }} onPress={() => { }} />
              <MaterialIcons name="description" size={19} color="white" style={{ marginRight: 19 }} onPress={() => { }} />
              </View>
            ),
         }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;