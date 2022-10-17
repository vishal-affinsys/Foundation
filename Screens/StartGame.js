import { TextInput, View, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../Components/PrimaryButton';
import GameScreen from './GameScreen';
import CustomColors from '../constants/CustomColors';
function StartScreen(props) {
  const [enteredText, setEnteredText] = useState('');

  function submitButtonHandler() {
    const chosenNumber = parseInt(enteredText, 10);
    if (chosenNumber >= 1 && chosenNumber < 100) {
      props.toggleScreen(
        <GameScreen
          userNumber={chosenNumber}
          toggleScreen={props.toggleScreen}
        />,
      );
    } else {
      Alert.alert('Invalid number!', 'Number has to be in between 1 and 99', [
        { text: 'okay', style: 'destructive', onPress: resetButtonHandler },
      ]);
    }
  }
  function resetButtonHandler() {
    setEnteredText('');
  }
  return (
    <View style={styles.bodyContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="white"
          maxLength={2}
          value={enteredText}
          onChangeText={setEnteredText}
          keyboardType="number-pad"
        />
        <View style={styles.groupButton}>
          <PrimaryButton
            buttonText="Submit"
            style={styles.buttonStyle}
            buttonColor={CustomColors.primary300}
            buttonTextColor="white"
            splashColor={CustomColors.primary500}
            onPress={submitButtonHandler}
          />
          <PrimaryButton
            buttonText="Reset"
            style={styles.buttonStyle}
            buttonColor={CustomColors.primary300}
            buttonTextColor="white"
            splashColor={CustomColors.primary500}
            onPress={resetButtonHandler}
          />
        </View>
      </View>
    </View>
  );
}

export default StartScreen;
function screenWidthFactor(factor) {
  return 392.5 * factor;
}
const styles = StyleSheet.create({
  buttonStyle: {
    padding: 14,
    width: screenWidthFactor(0.4),
    // flex: 1,
  },
  groupButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  inputText: {
    width: 70,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    height: 70,
    borderBottomColor: CustomColors.yellow500,
    borderBottomWidth: 2,
    color: CustomColors.yellow500,
    padding: 12,
    marginTop: 6,
    borderRadius: 12,
  },
  container: {
    backgroundColor: CustomColors.primary500,
    alignItems: 'center',
    padding: 12,
    margin: 16,
    borderRadius: 8,
    elevation: 12,
  },
  bodyContainer: {
    flexDirection: 'column-reverse',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
});
