import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Constants from 'expo-constants';

interface CustomSplashScreenProps {
  onFinish: () => void;
  duration?: number;
  showVersionInfo?: boolean;
  versionInfoStyle?: object;
  fadeAnimation?: boolean;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const CustomSplashScreen: React.FC<CustomSplashScreenProps> = ({
  onFinish,
  duration = 5000,
  showVersionInfo = true,
  versionInfoStyle = {},
  fadeAnimation = true,
}) => {
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    // Prevent the native splash screen from auto-hiding
    const preventSplash = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Hide the native splash screen immediately since we're using custom logic
        await SplashScreen.hideAsync();
      } catch (error) {
        console.warn('Splash screen error:', error);
      }
    };
    
    preventSplash();

    const timer = setTimeout(() => {
      if (fadeAnimation) {
        // Fade out animation
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          onFinish();
        });
      } else {
        onFinish();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, fadeAnimation, fadeAnim, onFinish]);

  const appVersion = Constants.expoConfig?.version || '1.0.1';

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <StatusBar hidden />
      
      {/* Background Image */}
      <Image
        source={require('../../assets/splash-main.png')}
        style={styles.splashImage}
        resizeMode="cover"
      />
      
      {/* Version Info Overlay */}
      {showVersionInfo && (
        <View style={[styles.versionContainer, versionInfoStyle]}>
          <Text style={styles.versionText}>v{appVersion}</Text>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: '100%',
    height: screenHeight,
    position: 'absolute',
  },
  versionContainer: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    alignItems: 'flex-end',
  },
  versionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});

export default CustomSplashScreen;