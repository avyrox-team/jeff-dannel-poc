import { ImageSourcePropType, ViewStyle } from 'react-native';

export interface SplashScreenProps {
  onFinish: () => void;
  duration?: number;
  showVersionInfo?: boolean;
  versionInfoStyle?: ViewStyle;
  fadeAnimation?: boolean;
  splashImage?: ImageSourcePropType;
}

export interface SplashScreenConfig {
  duration: number;
  showVersionInfo: boolean;
  fadeAnimation: boolean;
  appName: string;
}