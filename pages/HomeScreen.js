import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import DeviceCard from '../components/DeviceCard';
import AddDeviceCard from '../components/AddDeviceCard';

export default function HomeScreen({ navigation }) {
    const deviceData1 = {
        name: "Dispositivo 1",
        license: "JLZJ41",
        password: "3508239",
        firmwareVersion: "v10.3",
        status: "Transmitting",
        lastConnection: "07/10/2024"
    };
    
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>

            <AddDeviceCard                 
                Title={'dispositivo'} 
                Body={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae massa id dolor porttitor interdum eu id lectus. Cras'}
                Button={'Agregar'}
            />
            <DeviceCard deviceMetadata={deviceData1} />
            <DeviceCard deviceMetadata={deviceData1} />
            <DeviceCard deviceMetadata={deviceData1} />
            <DeviceCard deviceMetadata={deviceData1} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Esto asegura que ScrollView ocupe todo el espacio disponible
    justifyContent: 'center',
    alignItems: 'center',
    vertical:true,
    paddingVertical: 20, // Espaciado para el scroll
  },
});
