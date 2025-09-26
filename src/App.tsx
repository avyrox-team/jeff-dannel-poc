import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CustomSplashScreen } from './components';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return (
      <CustomSplashScreen 
        onFinish={handleSplashFinish}
        duration={5000} // 5 seconds
        showVersionInfo={true}
        fadeAnimation={true}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text>Avyrox POC Test App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});