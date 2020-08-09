// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1D3557"
        translucent
      />
    </>
  );
}
