import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, body, style, alertType }) => {
  // Determinar el estilo según el tipo de alerta
  let typeStyles = {};
  switch (alertType) {
    case 'Danger':
      typeStyles = styles.danger;
      break;
    case 'Success':
      typeStyles = styles.success;
      break;
    case 'Warning':
      typeStyles = styles.warning;
      break;
    case 'Info':
      typeStyles = styles.info;
      break;
    default:
      typeStyles = {}; // Estilo por defecto si no coincide ningún caso
      break;
  }

  return (
    <View style={[styles.card, typeStyles, style]}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      <View style={[styles.bodyContainer]}>
        <Text style={[styles.body, styles.fullWidth]}>{body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 10,
    marginHorizontal: 0,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Sombra en Android
    justifyContent:"center"
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    fontSize: 16,
    textAlign: 'center',
  },
  // Estilos para los tipos de alerta
  danger: {
    backgroundColor: '#dc3545',
    color: '#fff',
  },
  success: {
    backgroundColor: '#28a745',
    color: '#fff',
  },
  warning: {
    backgroundColor: '#ffc107',
    color: '#000',
  },
  info: {
    backgroundColor: '#17a2b8',
    color: '#fff',
  },
  fullWidth: {
    width: '100%',
    // marginBottom: 8,
  },
});

export default Card;
