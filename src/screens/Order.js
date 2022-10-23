import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as SecureStore from 'expo-secure-store';
import YaMap from 'react-native-yamap';

const Order = () => {
  return (
    <YaMap
      userLocationIcon={{ uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png' }}
      initialRegion={{
        lat: 50,
        lon: 50,
        zoom: 10,
        azimuth: 80,
        tilt: 100
      }}
      style={{ flex: 1 }}
    />
  );
}

export default Order

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    padding: 8,
    backgroundColor: '#4E5D6CFF',
  },
  label: {
    color: '#FFFFFF',
    margin: 10,
    marginLeft: 0,
  },  
  buttonContainer: {
    padding: 10,
  },  
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: '#F0FFF0',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
  horizonBtnsCtnr: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }
});