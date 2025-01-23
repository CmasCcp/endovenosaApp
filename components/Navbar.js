import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png'; // Asegúrate de que el logo esté en la carpeta adecuada
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de instalar expo/vector-icons si usas Expo

const Navbar = () => {
  const navigation = useNavigation();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  // Detectar el tamaño de la pantalla
  useEffect(() => {
    const updateLayout = () => {
      const screenWidth = Dimensions.get('window').width;
      setIsSmallScreen(screenWidth < 600); // Cambiar a vista responsiva si la pantalla es pequeña
    };

    // Detectar dimensiones iniciales
    updateLayout();

    // Suscribirse a los cambios de dimensiones
    const subscription = Dimensions.addEventListener('change', updateLayout);

    // Limpiar la suscripción al desmontar el componente
    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.navbarContainer}>
      <View style={styles.navbar}>
        {/* Logo */}
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </TouchableOpacity>

        {/* Menú */}
        {isSmallScreen ? (
          <TouchableOpacity
            onPress={() => setMenuVisible(!menuVisible)}
            style={styles.hamburgerIcon}
          >
            <Ionicons name="menu" size={24} color="#333" />
          </TouchableOpacity>
        ) : (
          <View style={styles.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.menuItem}>
              <Text style={styles.menuText}>INICIO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Device')} style={styles.menuItem}>
              <Text style={styles.menuText}>DASHBOARD</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('MyAccount')} style={styles.menuItem}>
              <Text style={styles.menuText}>MI CUENTA</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Menú desplegable para pantallas pequeñas */}
      {menuVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('Home');
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>INICIO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('Device');
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>DASHBOARD</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setMenuVisible(false);
              navigation.navigate('MyAccount');
            }}
            style={styles.menuItem}
          >
            <Text style={styles.menuText}>MI CUENTA</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    position: 'relative', // Posiciona el navbar relativo a la pantalla
    zIndex: 10, // Asegúrate de que el navbar tenga prioridad sobre otros elementos
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f8f9fa', // Color similar al de Bootstrap navbar-light
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    elevation: 4, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 10, // Prioridad sobre otros elementos
  },
  logoContainer: {
    padding: 8,
  },
  logo: {
    height: 40,
    width: 40, // Ajusta según tu logo
    resizeMode: 'contain',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    marginHorizontal: 8,
    padding: 8,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Color de texto oscuro
  },
  hamburgerIcon: {
    padding: 8,
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%', // Colocar el menú justo debajo del navbar
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 20, // Asegúrate de que el menú desplegable tenga prioridad
  },
});

export default Navbar;
