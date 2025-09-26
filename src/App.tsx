import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { CustomSplashScreen } from './components';
import { ProfileScreen } from './screens';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  const handleViewProfile = () => {
    setShowProfile(true);
  };

  const handleBackToMain = () => {
    setShowProfile(false);
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

  if (showProfile) {
    return <ProfileScreen onBack={handleBackToMain} />;
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Avyrox POC Test App</Text> */}
      <TouchableOpacity style={styles.profileButton} onPress={handleViewProfile}>
        <Text style={styles.profileButtonText}>View Jeff Dannel Profile</Text>
      </TouchableOpacity>
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
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 40,
  },
  profileButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  profileButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});