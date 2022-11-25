import React, {useContext} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import { Avatar } from 'react-native-paper';

export default function Home() {
  const {userInfo, logout} = useContext(AuthContext);
  return (
    <View
        style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <Avatar.Image
            size={150}
            style={{ backgroundColor: "#560CCE" }}
            source={require('../../assets/img/Admin-Profile.png')}
            
        />
        <TouchableOpacity>
            <Text style={{ color: "#560CCE", margin: 10, fontWeight: "bold" }}>BIENVENIDO</Text>
        </TouchableOpacity>

        <View>
            <Text style={Styles.input}>{userInfo?.user?.nombre} {userInfo?.user?.apellido}</Text>
        </View>
        <Button
          title="Cerrar Session"
          onPress={() => logout()}
          color="#560CCE"
        />
    </View>
  )
}

const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSVG: {
    justifyContent: 'flex-start',
    alignItems:'center',
  },
  titulo: {
    fontSize: 80,
    color: '#34433D',
    fontWeight: 'bold',

  },
  subtitulo: {
    fontSize: 20,
    color:'gray',
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    padding: 10,
    paddingLeft: 10,
    borderRadius: 5,
    marginVertical: 15,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
});
