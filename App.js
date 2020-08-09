// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar } from 'react-native';
import Home from './src/pages/Home';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1D3557"
        translucent
      />
    </>
  );
}
