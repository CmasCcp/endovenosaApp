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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}

      {deviceData1.alertMsg && (
        <View style={[styles.fullWidth, styles.textWhite]}>
          <Card title="Alerta"
            body={deviceData1.alertMsg} alertType={deviceData1.alertType} />
        </View>
      )}

      <View style={[styles.mainContent, isSmallScreen && styles.column]}>
        <View style={[styles.col6, isSmallScreen && styles.fullWidth]}>
          <Card title="Patente" body={deviceData1.license} />
          <Card title="Inicio programado" body={deviceData1.lastConnection} />

          <View style={styles.row}>
            <Card style={styles.col}
              title="Tiempo en sesión"
              body={
                <>
                  <Text style={styles.value}>15</Text>
                  <Text style={styles.largeUnit}>Minutos</Text>
                </>
              }
            />

            <Card style={styles.col}
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
        <View style={[styles.col6, isSmallScreen && styles.marginTop]}>
          <Card title="Estado" style={styles.estado} body={deviceData1.status} />

          <Card body={bodyCardDoble} style={styles.cardDoble}/>
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
    flexShrink:"unset",

  },
  mainContent: {
    display:"flex",
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink:"unset",
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  column: {
    marginVertical: 8,
    display:"flex",
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent:"center",
    flexShrink:"unset",

  },
  col: {
    flex: 1,
    alignItems: 'center',
    flexShrink:"unset",
  },
  col8: {
    flex: 1,
    flexShrink:"unset",
    marginRight: 8,
  },
  col6: {
    display:"flex",
    flex: 1,
    flexDirection: "column",
    flexShrink:"unset",
  },
  col4: {
    display:"flex",
    flex: 1,
    flexDirection: "column",
  },
  marginTop:{
    marginTop: 32,
  },
  fullWidth: {
    width: '100%',
    marginBottom: 8,
  },
  label: {
    // fontSize: "12px",
    fontWeight: 'bold',
  },
  value: {
    // fontSize: "12px",
    fontWeight: 'bold',
    color: '#333',
  },
  unit: {
    // fontSize: "12px",
    color: '#666',
  },
  largeUnit: {
    // fontSize: "12px",
    color: '#666',
  },
  textWhite:{
    color: "#fff"
  },
  estado:{
    flex: 2,
  },
  cardDoble:{
    flex:1,
  }
});

export default DashboardScreen;
