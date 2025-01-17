import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import Card from '../components/Card'; // Suponiendo que tienes un componente Card reutilizable en React Native
import axios from 'axios';

const DashboardScreen = () => {
  const [deviceData1, setDeviceData1] = useState({});
  const [loading, setLoading] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Leer datos (GET)
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://api-sensores.cmasccp.cl/endovenosaDummy')
      .then((response) => setDeviceData1(response.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  // Detectar cambios en el ancho de la pantalla
  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = Dimensions.get('window').width;
      setIsSmallScreen(screenWidth < 600); // Si el ancho es menor a 600px, cambia el estado
    };

    updateLayout(); // Detecta en el montaje
    Dimensions.addEventListener('change', updateLayout); // Detecta cambios en tiempo real

    // Limpieza del evento cuando el componente se desmonta
    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  }, []);

  const bodyCardDoble = (
    <View style={[styles.row, styles.fullWidth]}>
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {deviceData1.alertMsg && (
        <View style={[styles.fullWidth, styles.textWhite]}>
          <Card title="Alerta"
            body={deviceData1.alertMsg} alertType={deviceData1.alertType} />
        </View>
      )}

      <View style={[styles.mainContent, isSmallScreen && styles.col]}>
        <View style={[styles.col, isSmallScreen && styles.fullWidth]}>
          <Card title="Patente" style={[styles.patente]} body={deviceData1.license} />
          <Card title="Inicio programado" style={[styles.inicio]} body={deviceData1.lastConnection} />

          <View style={[styles.row, styles.tiempo]}>
            <Card style={[styles.col, styles.marginRight]}
              title="Tiempo en sesión"
              body={
                <View style={styles.col}>
                  <Text style={styles.value}>15</Text>
                  <Text style={styles.largeUnit}>Minutos</Text>
                </View>
              }
            />

            <Card style={[styles.col, styles.marginLeft]}
              title="Flujo actual"
              body={
                <View style={styles.col}>
                  <Text style={styles.value}>1000</Text>
                  <Text style={styles.largeUnit}>mL/Hr</Text>
                </View>
              }
            />

          </View>
        </View>
        <View style={[styles.col, isSmallScreen && styles.marginTop]}>
          <Card title="Estado" style={styles.estado} body={deviceData1.status} />

          <Card body={bodyCardDoble} style={[styles.cardDoble, styles.fullWidth]}/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 0,
  },
  col: {
    display:"flex",
    flex: 1,
    flexDirection: "column",
  },
  mainContent: {
    display:"flex",
    flexDirection: 'row',
  },
  marginTop:{
    marginTop: 0,
  },
  marginRight:{
    marginRight: 5,
  },
  marginLeft:{
    marginLeft: 5,
  },
  fullWidth: {
    width: '100%',
    // marginBottom: 8,
  },
  label: {
    fontSize: "0.7rem",
    fontWeight: 'bold',
  },
  value: {
    fontSize: "0.7rem",
    fontWeight: 'bold',
    color: '#333',
  },
  unit: {
    fontSize: "0.7rem",
    color: '#666',
  },
  largeUnit: {
    fontSize: "0.7rem",
    color: '#666',
  },
  textWhite:{
    color: "#fff"
  },
  patente:{
    flex: 3,
  },
  inicio:{
    flex:3,
  },
  tiempoFlujo:{
    flex:3,
  },
  estado:{
    flex: 6,
  },
  cardDoble:{
    flex:3,
  }
});

export default DashboardScreen;