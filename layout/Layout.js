import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Encabezado */}
        {/* <View style={styles.header}>
          <Image
            source={require('../assets/logo.png')} // Ruta relativa a la carpeta del archivo
            style={styles.image} // Aplica estilos para controlar el tamaño
          />
        </View> */}
        <Navbar/>

        {/* Contenido dinámico desplazable */}
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {children}
        </ScrollView>

        {/* Pie de página */}
        {/* <View style={styles.footer}>
          <Text style={styles.footerText}>My App Footer</Text>
        </View> */}

        <Footer/>
      </View>
    </ScrollView>
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
  scrollContent: {
    flexGrow: 1, // Asegura que el contenido use el espacio restante
    padding: 10,
    vertical:"true",
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