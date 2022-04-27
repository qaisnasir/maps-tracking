import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import MapView, {PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';

export default function Welcome() {
  return (
    <View style={styles.container}>
    <MapView
    provider={PROVIDER_GOOGLE}
    style={styles.map}
    showsUserLocation={true}
    region={{
    latitude:  32.571144,
    longitude: 74.075005,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}>
  <Marker
  coordinate={{
    latitude:  32.571144,
    longitude: 74.075005,
  }}>
</Marker>

</MapView>
    <StatusBar style="auto" />
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
},
map:{
  flex:1
}
});