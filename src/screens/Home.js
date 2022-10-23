import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as SecureStore from 'expo-secure-store';

const Home = () => {
  const navigation = useNavigation()  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/*<Text>Home Screen and Token:</Text>*/}      
      {/*<Button title="Alert token" onPress={() => getValueFor('token')}/>*/}
      <Button title="Авторизоваться" onPress={() => navigation.navigate('Login')}/>
      <Button title="Заказ" onPress={() => navigation.navigate('Order')}/>
      <Button title="Регистрация" onPress={() => navigation.navigate('Register')}/>
      <Button title="Ваш аккант" onPress={() => navigation.navigate('Details')}/>
    </View>    
  );
}

export default Home

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