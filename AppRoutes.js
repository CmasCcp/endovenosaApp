// AppRoutes.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen';
import Layout from './layout/Layout'; // Importa el layout
import DashboardScreen from './pages/DashboardScreen';

const Stack = createStackNavigator();

export default function AppRoutes() {
  const dashboardProps = {title:"titulo", body:"titulo", style:"danger", alertType:"danger"};
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="home">
          {(props) => (
            <Layout>
              <HomeScreen {...props} />
            </Layout>
          )}
        </Stack.Screen>
        <Stack.Screen name="device">
          {(props) => (
            <Layout>
              <DashboardScreen {...dashboardProps}  {...props}/>
            </Layout>
          )}
        </Stack.Screen>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
