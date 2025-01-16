import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DeviceCard = ({ deviceMetadata }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Transmitting':
        return '#3DB838';
      case 'Disconnected':
        return '#D13438';
      case 'Programmed':
        return '#EAA300';
      default:
        return '#9B9B9B';
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.deviceName}>{deviceMetadata.name}</Text>
        <View
          style={[
            styles.statusDot,
            { backgroundColor: getStatusColor(deviceMetadata.status) },
          ]}
        />
      </View>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.label}>Patente</Text>
          <Text style={styles.value}>{deviceMetadata.license}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Contraseña</Text>
          <Text style={styles.value}>{deviceMetadata.password}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Versión Firmware</Text>
          <Text style={styles.value}>{deviceMetadata.firmwareVersion}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Estatus</Text>
          <Text style={styles.value}>{deviceMetadata.status}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Última Conexión</Text>
          <Text style={styles.value}>{deviceMetadata.lastConnection}</Text>
        </View>
      </View>
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
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  margin:{
    margin: 12,
  },
  
  marginBottom:{
    marginBottom: 12,
  },
  marginTop:{
    marginTop: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  table: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
});

export default DeviceCard;
