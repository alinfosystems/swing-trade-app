import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'HomePage' });
  }, []);


  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.heading}>📊 Swing Trade AI Agent</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="📈 Get Suggestion"
          onPress={() => router.push('/suggest')}
          color="#007AFF"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="🗂 View History"
          onPress={() => router.push('/history')}
          color="#007AFF"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 40,
  },
  buttonContainer: {
    marginVertical: 10,
    width: '70%',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
  },
});
