import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const loginIcon = require('../assets/login-icon.png'); // Importa la imagen en React Native

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Icono */}
        <View style={styles.iconContainer}>
          <Image source={loginIcon} style={styles.icon} />
        </View>

        {/* Tabla */}
        <View style={styles.tableContainer}>
          <View style={styles.row}>
            <Text style={styles.cellLeft}>Nombre</Text>
            <Text style={styles.cellRight}>David Kressin</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cellLeft}>E-mail</Text>
            <Text style={styles.cellRight}>dkressing@udd.cl</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cellLeft}>Contraseña</Text>
            <Text style={[styles.cellRight, styles.link]}>Cambiar contraseña</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // Fondo similar a Bootstrap
  },
  card: {
    padding: 20,
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
    aspectRatio: 10 / 8,
    width: 300, // Ajustar a un tamaño razonable en dispositivos móviles
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  icon: {
    height: 120,
    resizeMode: 'contain',
  },
  tableContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cellLeft: {
    fontSize: 16,
    fontWeight: '500',
    color: '#212529',
  },
  cellRight: {
    fontSize: 16,
    fontWeight: '400',
    color: '#495057',
    textAlign: 'right',
  },
  link: {
    color: '#007bff', // Color azul para "Cambiar contraseña"
    textDecorationLine: 'underline',
  },
});

export default AccountScreen;
