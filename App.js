import { NativeRouter, Route, Routes } from 'react-router-native';
import MainScreen from './Screens/MainScreen';
import React from 'react';
import ChatScreen from './Screens/ChatScreen';

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<MainScreen />} />
        <Route path="/chatScreen" element={<ChatScreen />} />
      </Routes>
    </NativeRouter>
  );
}
