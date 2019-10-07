import React, { useState } from 'react';
import { View, KeyboardAvoidingView, TextInput, Platform, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png'

import api from './../services/api'

export default function Login() {

  const [email, setEmail] = useState('')
  const [techs, setTechs] = useState('')

  async function handleSubmit() {
    // email
    // tecnologias
console.log(email)
console.log(techs)
  }

  return (
    <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === 'ios'} style={styles.container}>
      <View style={styles.form}>
        <Image source={logo}></Image>

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