import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomColors from '../constants/CustomColors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: CustomColors.yellow500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: CustomColors.yellow500,
  },
});

export default NumberContainer;
