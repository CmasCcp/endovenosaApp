import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AddDeviceCard = ({ Title, Body, Button }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{Title}</Text>
      </View>
      
      <Text style={styles.body}>
        {Body}
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{Button}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 12,
    width:"75%",
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, // Para Android
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  body: {
    fontSize: 14,
    color: '#444',
    marginBottom: 16,
},
button: {
  backgroundColor: '#000', // Color oscuro para el botón
  padding: 12,
  borderRadius: 6,
  alignItems: 'center',
},
buttonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
},
});

export default AddDeviceCard;

