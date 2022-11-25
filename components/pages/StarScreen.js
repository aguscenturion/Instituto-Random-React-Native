import React from 'react'
import Background from '../../components/layout/Background'
import Logo from '../../components/layout/Logo'
import Header from '../../components/layout/Header'
import Button from '../../components/layout/Button'
import Paragraph from '../../components/layout/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Instituto Random</Header>
      <Paragraph>
        La forma más fácil de comenzar con su increíble aplicación.
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('Inicio')}
      >
        Loguearse
      </Button>
    </Background>
  )
}