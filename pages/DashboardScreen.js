import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Card from '../components/Card'; // Suponiendo que tienes un componente Card reutilizable en React Native
import axios from 'axios';

const bodyCardDoble = (
  <View style={styles.row}>
    <View style={styles.col}>
      <Text style={styles.label}>Suministrado</Text>
      <Text style={styles.value}>60</Text>
      <Text style={styles.unit}>mL</Text>
    </View>
    <View style={styles.col}>
      <Text style={styles.label}>Total</Text>
      <Text style={styles.value}>1000</Text>
      <Text style={styles.unit}>mL</Text>
    </View>
  </View>
);

const DashboardScreen = () => {
  const [deviceData1, setDeviceData1] = useState({});
  const [loading, setLoading] = useState(false);

  // Leer datos (GET)
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://api-sensores.cmasccp.cl/endovenosaDummy')
      .then((response) => setDeviceData1(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {deviceData1.alertMsg && (
        <View style={styles.fullWidth}>
          <Card title="Alerta" body={deviceData1.alertMsg} alertType={deviceData1.alertType} />
        </View>
      )}

      <View style={styles.mainContent}>
        <View style={styles.col8}>
          <Card title="Patente" body={deviceData1.license} />
          <Card title="Inicio programado" body={deviceData1.lastConnection} />

          <View style={styles.row}>
            <Card
              title="Tiempo en sesión"
              body={
                <>
                  <Text style={styles.value}>15</Text>
                  <Text style={styles.largeUnit}>Minutos</Text>
                </>
              }
            />
            <Card
              title="Flujo actual"
              body={
                <>
                  <Text style={styles.value}>1000</Text>
                  <Text style={styles.largeUnit}>mL/Hr</Text>
                </>
              }
            />
          </View>
        </View>
        <View style={styles.col4}>
          <Card title="Estado" body={deviceData1.status} />
          <Card body={bodyCardDoble} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  mainContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  col: {
    flex: 1,
    alignItems: 'center',
  },
  col8: {
    flex: 2,
    marginRight: 8,
  },
  col4: {
    flex: 1,
  },
  fullWidth: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  unit: {
    fontSize: 14,
    color: '#666',
  },
  largeUnit: {
    fontSize: 18,
    color: '#666',
  },
});

export default DashboardScreen;
