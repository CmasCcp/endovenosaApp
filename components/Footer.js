import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2024 Centro de investigación en tecnologías para la sociedad (C+).</Text>
      <Text style={styles.text}>Todos los derechos reservados.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f8f9fa', // Fondo similar al del diseño web
    padding: 16, // Espaciado interno
    borderTopWidth: 1, // Borde superior
    borderTopColor: '#ddd', // Color del borde
    alignItems: 'center', // Centrar el texto horizontalmente
  },
  text: {
    fontSize: 14, // Tamaño del texto
    color: '#333', // Color del texto
    textAlign: 'center', // Alinear texto al centro
    marginVertical: 4, // Separación entre líneas de texto
  },
});

export default Footer;
