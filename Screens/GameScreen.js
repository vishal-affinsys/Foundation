import { View, StyleSheet, Text, Alert } from 'react-native';
import React, { useState } from 'react';
import Title from '../Components/Title';
import NumberContainer from '../Components/NumberContainer';
import PrimaryButton from '../Components/PrimaryButton';
import CustomColors from '../constants/CustomColors';
import GameOver from './GameOver';

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, toggleScreen }) {
  const [counter, setCounter] = useState(0);
  function generateRandomNumber(max, min, exclude) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
      console.log(counter);
      return toggleScreen(
        <GameOver
          userScore={counter}
          toggleScreen={() => {
            toggleScreen;
          }}
        />,
      );
    } else {
      return randomNumber;
    }
  }
  const initialGuess = generateRandomNumber(
    minBoundary,
    maxBoundary,
    userNumber,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  function generateNextGuess(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", '', [{ text: 'Okay' }]);
      return;
    } else if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(minBoundary, maxBoundary);
    const nextNumber = generateRandomNumber(
      minBoundary,
      maxBoundary,
      userNumber,
    );
    setCurrentGuess(nextNumber);
    setCounter(counter + 1);
  }

  return (
    <View style={styles.mainScreen}>
      <View style={styles.gameCard}>
        <Title>Opponent's guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <View>
            <Text>Higher or lower?</Text>
          </View>
          <View>
            <PrimaryButton
              onPress={() => generateNextGuess('higher')}
              buttonText="+"
              buttonColor={CustomColors.primary300}
              buttonTextColor="white"
              splashColor={CustomColors.primary500}
            />
            <PrimaryButton
              onPress={() => generateNextGuess('lower')}
              buttonText="-"
              buttonColor={CustomColors.primary300}
              buttonTextColor="white"
              splashColor={CustomColors.primary500}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    height: '100%',
    flex: 1,
    padding: 24,
    margin: 24,
    alignItems: 'center',
  },
  gameCard: {
    alignItems: 'center',
    width: 260,
  },
});

export default GameScreen;
