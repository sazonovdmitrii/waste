import { StyleSheet, Text, View, ScrollView, Button, TextInput, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { TabView, SceneMap } from 'react-native-tab-view';
import * as React from 'react';

const FirstRoute = () => {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });
  return (<View style={styles.container}>          
      <Text style={styles.label}>Имя</Text>          
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
        name="firstname"
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
            value={value}
          />
        )}
        name="lastname"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Придумайте пароль</Text>          
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
      <Text style={styles.label}>Повторите пароль</Text>          
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
        name="repeat_password"
        rules={{ required: true }}
      />
    </View>);
};

const SecondRoute = () => {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });
  return (<View style={styles.container}>          
      <Text style={styles.label}>Имя представителя</Text>          
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
        name="firstname"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Фамилия представителя</Text>          
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
        name="lastname"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Придумайте пароль</Text>          
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
      <Text style={styles.label}>Повторите пароль</Text>          
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
        name="repeat_password"
        rules={{ required: true }}
      />
    </View>);
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

const Register = () => {  
  const navigation = useNavigation()  
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Физ. Лицо' },
    { key: 'second', title: 'Юр. Лицо' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

export default Register

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