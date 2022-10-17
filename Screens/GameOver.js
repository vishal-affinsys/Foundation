import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomColors from '../constants/CustomColors';
import Title from '../Components/Title';
// import PrimaryButton from '../Components/PrimaryButton';
// import StartScreen from './StartGame';

function GameOver({ userScore, toggleScreen }) {
  return (
    <View style={styles.container}>
      <Text style={styles.gameOverText}>Game Over</Text>
      <Title>Your Score: {userScore}</Title>
      {/* <PrimaryButton
        buttonText="Restart game"
        style={styles.buttonStyle}
        buttonColor={'green'}
        buttonTextColor="white"
        splashColor={CustomColors.primary500}
        onPress={() => {
        //   toggleScreen(
        //     <StartScreen
        //       toggleScreen={() => {
        //         toggleScreen;
        //       }}
        //     />,
          );
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    padding: 14,
  },
  gameOverText: {
    marginBottom: 10,
    borderRadius: 12,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 24,
    backgroundColor: CustomColors.primary500,
  },
});

export default GameOver;
