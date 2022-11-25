import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../context/AuthContext';
import { Card, Title } from 'react-native-paper';
import { StyleSheet, Text, Image, ScrollView, View } from 'react-native';

const Anuncios = () => {
  const { anuncios, isLoading, anunciosInfo} = useContext(AuthContext);

  useEffect(()=>{
    anuncios()
  },[])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
    <ScrollView >   
      {anunciosInfo?.length && anunciosInfo?.map((item, i)=>{
         let options = { year: 'numeric', month: 'long', day: 'numeric' }
         const fecha = new Date(item.fecha)
         const fechaConvertida = fecha.toLocaleDateString("es-ES")
         
         
         return(
          
            <Card style={styles.cardContainer} key={i}>
              <Image source = {require('../../assets/img/Admin-Profile.png')} style={styles.cardLogo}/>
              <Text style={styles.cardAutor}>{item?.autorNombre?.nombre} {item?.autorNombre?.apellido}</Text>
              <Text style={styles.cardFecha}>{fechaConvertida}</Text>
              <Card.Content>
                <Title style={styles.cardContenido}>{item?.contenido}</Title>
              </Card.Content>
            </Card>
             )
            })
          }
       </ScrollView>
       </View>
    
       </View>
       )
      }

  const styles = StyleSheet.create({
    cardLogo:{
      width: 60,
      height: 60,
      borderRadius: 40,
    },
    cardContainer: {
      color:'#121310',
      backgroundColor:'#fff',
      margin: 20,
      padding: 20,
      width: 450,
      minHeight: 200,
      borderRadius: 30,
    },
    cardAutor:{
      position: 'absolute',
      left: 70,
      top: 10,
      fontSize: 17
    },
    cardFecha:{
      position: 'absolute',
      left: 70,
      top: 35,
      fontSize: 15,
      color: '#76877d'
    },
    cardContenido:{
      fontSize: 20,
      fontWeight: 'bold',
      top: 20
    },
    mainContainer: {
      backgroundColor: '#f1f1f1',
      flex: 1,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  })


export default Anuncios;