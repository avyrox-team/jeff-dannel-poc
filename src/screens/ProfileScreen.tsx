import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
  Dimensions,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const { width: screenWidth } = Dimensions.get('window');

interface ProfileScreenProps {
  onBack?: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onBack }) => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:jd@3cstudios.com');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:407-463-2908');
  };

  const handleQRCodePress = () => {
    Linking.openURL('https://dev.3rx.co/go/zGu7HQn');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <StatusBar style="auto" />
      
      {/* Back Button */}
      {onBack && (
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
      )}

      {/* Profile Photo */}
      <View style={styles.profilePhotoContainer}>
        <Image
          source={require('../../assets/jeff-dannel.jpg')}
          style={styles.profilePhoto}
          resizeMode="cover"
        />
      </View>

      {/* Name and Company */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>Jeffery C Dannel</Text>
        <Text style={styles.company}>3cStudios</Text>
      </View>

      {/* Contact Information */}
      <View style={styles.contactContainer}>
        <TouchableOpacity style={styles.contactItem} onPress={handleEmailPress}>
          <Text style={styles.contactLabel}>Email:</Text>
          <Text style={styles.contactValue}>jd@3cstudios.com</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactItem} onPress={handlePhonePress}>
          <Text style={styles.contactLabel}>Cell:</Text>
          <Text style={styles.contactValue}>407-463-2908</Text>
        </TouchableOpacity>
      </View>

      {/* QR Code */}
      <View style={styles.qrContainer}>
        <Text style={styles.qrLabel}>Visit 3cStudios</Text>
        <TouchableOpacity onPress={handleQRCodePress}>
          <Image
            source={require('../../assets/3cstudios.png')}
            style={styles.qrCode}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.qrDescription}>Tap QR code to visit 3cstudios.com</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  profilePhotoContainer: {
    marginTop: 60,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  profilePhoto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  nameContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 8,
  },
  company: {
    fontSize: 20,
    color: '#666666',
    textAlign: 'center',
    fontWeight: '500',
  },
  contactContainer: {
    width: '100%',
    maxWidth: 300,
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
  contactValue: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 0,
  },
  qrLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 15,
  },
  qrCode: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  qrDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

export default ProfileScreen;