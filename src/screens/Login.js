import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

const Login = () => {  
  const navigation = useNavigation()  
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = async (data) => {    
    const headers = {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    await axios.get('http://magewizard.ru/authenticate', data, headers).catch((error) => {
      console.error(error);
    }).then(function (response) {         
      console.log(response);
      save('token', response.data.token); 
      navigation.navigate("Details")           
    });     
  }

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <View style={styles.container}>
      {/*<Button title="Go to Home" onPress={() => navigation.navigate('Home')}/>*/}
      <Text style={styles.label}>Телефон</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Пароль</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
      />    
      <View style={styles.horizonBtnsCtnr}>  
      <View style={styles.buttonContainer}>
        <Button
          color="#000000"
          title="Логин"
          onPress={handleSubmit(onSubmit)}
        />
      </View>      
      
      <View style={styles.buttonContainer}>
        <Button
          color="#000000"
          title="Зарегистрироваться"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      </View>
      <View style={styles.buttonContainer}>
      <Text style={{color: '#000000', textAlign: 'center'}}
        onPress={() => navigation.navigate("RequestOTP")}>
        Забыли пароль?
      </Text>
      </View>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    padding: 8,
    backgroundColor: '#FFFFFF',
  },
  label: {
    color: '#000000',
    margin: 10,
    marginLeft: 0,
  },  
  buttonContainer: {
    padding: 10,
  },  
  input: {
    backgroundColor: '#FFFFFF',
    borderColor: 'black',
    borderWidth: 1,
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