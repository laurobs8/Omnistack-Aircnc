import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, AsyncStorage, TextInput, Platform, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png'

import api from '../services/api'

export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [techs, setTechs] = useState('')

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => { // Rotas no mobile são invisiveis, por isso ao recarregar a pagina ele volta pra pagina login. Pra salvar no estado atual usa-se
      if(user){                                 // procura user, se existir coloca-se na variavel e navega pra proxima tela
        navigation.navigate('Login') // List            // Se usuario ja tiver feito login, ele é direcionado pra tela List
      }
    });
  }, [])

  async function handleSubmit() {
    const response = await api.post("/sessions", { email })

    const { _id } = response.data
    console.log(_id)

    await AsyncStorage.setItem('user', _id)
    await AsyncStorage.setItem('techs', techs)

    navigation.navigate('List')

  }

  return (
    <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === 'ios'} style={styles.container}>
      <View style={styles.form}>
        <Image source={logo} style={styles.logo}></Image>

        <Text style={styles.label}>SEU EMAIL * </Text>

        <TextInput
          style={styles.input}
          placeholder='Seu email'
          placeholderTextColor='#999'
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={text => setEmail(text)}

        ></TextInput>

        <Text style={styles.label}>TECNOLOGIAS * </Text>
        <TextInput
          style={styles.input}
          placeholder='Tecnologias de interesse'
          placeholderTextColor='#999'
          keyboardType="email-address"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={text => setTechs(text)}
        ></TextInput>

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Encontrar spots</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
  },
  logo: {
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 100
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginHorizontal: 8
  },
  form: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
    marginTop: 30
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    height: 44,
    marginBottom: 20,
    borderRadius: 2
  }
  ,
  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  }
})