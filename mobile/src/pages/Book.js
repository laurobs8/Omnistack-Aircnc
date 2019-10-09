import React, { useState } from 'react';
import { SafeAreaView, AsyncStorage, Alert, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';

import api from '../services/api'

export default function Book({ navigation }) {

  const [date, setDate] = useState('')
  const id = navigation.getParam('id')

  async function handleSubmit() {
    const user_id = await AsyncStorage.getItem('user')

    await api.post(`/spots/${id}/bookings`, {
      date,
    }, {
      headers: { user_id }
    })

    Alert.alert('Solicitação de reserva enviada')

    navigation.navigate('List')
  }

  function handleCancel() {
    navigation.navigate('List')
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Data de interesse </Text>

      <TextInput
        style={styles.input}
        placeholder='Qual data que gostaria de reservar?'
        placeholderTextColor='#999'
        autoCapitalize="words"
        autoCorrect={false}
        value={date}
        onChangeText={setDate}

      ></TextInput>

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Solicitar Reserva</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8,
    marginHorizontal: 8,
    marginTop: 30
  },
  button: {
    height: 32,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 10
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
  }
})