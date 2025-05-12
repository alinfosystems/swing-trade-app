import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BASE_URL } from '../config';

export default function SuggestionScreen() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSuggestion = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/suggest`);
      setResult(res.data.result);
    } catch (err) {
      setResult("⚠️ Error fetching suggestion.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuggestion();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {loading ? (
          <ActivityIndicator size="large" color="#007AFF" />
        ) : (
          <Text style={styles.text}>{result}</Text>
        )}
      </View>
      <Button title="🔄 Refresh" onPress={fetchSuggestion} color="#007AFF" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    flexGrow: 1
  },
  card: {
    backgroundColor: '#F2F2F2',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2
  },
  text: {
    fontSize: 16,
    color: '#333'
  }
});
