import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Profile from './Profile';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Profile />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6', // Light gray background to make white cards pop
  },
});