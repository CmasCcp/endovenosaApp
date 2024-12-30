// components/Layout.js
import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default function Layout({ children }) {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Image
            source={require('../assets/logo.png')} // Ruta relativa a la carpeta del archivo
            style={styles.image} // Aplica estilos para controlar el tamaño
        />
      </View>

      {/* Contenido dinámico */}
      <View style={styles.content}>
        {children}
      </View>

      {/* Pie de página */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>My App Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'start',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 10,
  },
  footer: {
    height: 50,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
  },
  image: {
    width: 50, // Ancho de la imagen
    resizeMode: 'contain', // Ajuste de escala
    margin: 10,
  },
});