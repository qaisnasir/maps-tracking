import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Geolocation from "react-native-geolocation-service";
import PubNubReact from "pubnub-react";
import Login from './Login';
import Welcome from './screens/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Welcome' component={Welcome}/>
        </Stack.Navigator>
      </NavigationContainer>
    <StatusBar style='auto'/> 
    </SafeAreaView>
  );
}