import React, {useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { theme } from '../core/theme';
import Logo from '../layout/Logo';
import Header from '../layout/Header';
import BackButton from '../layout/BackButton';
import Button from '../layout/Button';

export default function App({ navigation }) {
    const [dni, setDni] = useState(null);
    const [contrasenia, setContrasena] = useState(null);
    const {login, mensajeError} = useContext(AuthContext);


  return (
    
    <View style={styles.container} behavior="padding">
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Instituto Random</Header>
      <TextInput style={styles.inputLogin}
        placeholder='Usuario'
        value={dni}
        onChangeText={text => setDni(text)}

      />
      <TextInput mode="outlined" style={styles.inputLogin}
        label="Password"
        placeholder='Contraseña'
        secureTextEntry={true}
        value={contrasenia}
        onChangeText={text => setContrasena(text)}
      />
      <View style={styles.forgotPassword}>
      </View>
      {
        mensajeError == true ?
        <View>
          <Text style={styles.errorMensaje}>
            Usuario o Contraseña No Validos
          </Text>
        </View>
        :
        null  
      }
      <Button mode="contained" style={styles.button} onPress={() => {login(dni, contrasenia)}}>
        Iniciar Sesion
      </Button>
    </View>
  )}
  const styles = StyleSheet.create({
    forgotPassword: {
      width: '100%',
      alignItems: 'flex-end',
      marginBottom: 24,
    },
    row: {
      flexDirection: 'row',
      marginTop: 4,
    },
    forgot: {
      fontSize: 13,
      color: theme.colors.secondary,
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary,
    },
    container: {
      flex: 1,
      padding: 50,
      width: '100%',
      maxWidth: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    inputLogin: {
      borderWidth: 2,
      borderColor: "#b5b5b5",
      padding: 10,
      paddingStart: 30,
      width: '80%',
      height: 50,
      marginTop: 20,
      borderRadius: 30,
    },
    button:{
      width: '80%',
      height: 50,
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10  
    },
    errorMensaje:{
      color:"red",
    }

  })
