import React from 'react';
import StartScreen from './Screens/StartGame';
import { StyleSheet, ImageBackground } from 'react-native';
import { useState } from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './Screens/GameScreen';

export default function App() {
  const [mainScreen, setMainScreen] = useState(
    <StartScreen
      toggleScreen={() => {
        setMainScreen(<GameScreen />);
      }}
    />,
  );
  return (
    <LinearGradient colors={['#72063c', '#ddb52f']} style={styles.mainBody}>
      <ImageBackground
        style={styles.mainBody}
        source={require('./assets/images/background.png')}
        imageStyle={styles.imageBackground}
      >
        {mainScreen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.2,
  },
});
