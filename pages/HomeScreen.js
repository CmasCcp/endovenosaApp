import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
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

    <View style={styles.container}>
        <AddDeviceCard                 
            Title= {'Agregar dispositivo'} 
            Body= {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae massa id dolor porttitor interdum eu id lectus. Cras'}
            Button= {'Agregar'}
        />
            <DeviceCard deviceMetadata={deviceData1}/>
            <DeviceCard deviceMetadata={deviceData1}/>
            <DeviceCard deviceMetadata={deviceData1}/>
            <DeviceCard deviceMetadata={deviceData1}/>
    </View>
    //const { id, name } = route.params;

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
