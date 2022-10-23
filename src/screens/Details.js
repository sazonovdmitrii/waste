import { StyleSheet, Text, View, ScrollView, Button, TextInput, ActivityIndicator, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Axios from 'axios';

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  
  return result
}


const Details = () => { 
  const navigation = useNavigation()
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });
  // return <Person/>
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [token, setToken] = useState([]);

  useEffect(() => {
    SecureStore.getItemAsync('token').then(response => {
      setToken(response)
    });

    const AuthStr = 'Bearer '.concat(token);
    var config = {
      headers: {'Authorization': AuthStr}
    };
    Axios.get('http://magewizard.ru/authenticate/account', config)
      .then(({ data }) => {
        console.log("defaultApp -> data", data)
        setData(data)
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>          
      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={data.email}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Телефон</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={data.phone}
          />
        )}
        name="password"
        rules={{ required: true }}
      />  
      <Text style={styles.label}>Имя</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={data.firstname}
          />
        )}
        name="password"
        rules={{ required: true }}
      />  
      <Text style={styles.label}>Фамилия</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={data.lastname}
          />
        )}
        name="password"
        rules={{ required: true }}
      />    
    </View>
  );
  
}

export default Details

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',    
    padding: 24,
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
    borderColor: '#000000',
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