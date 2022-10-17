import { Text, StyleSheet } from 'react-native';
import React from 'react';
import CustomColors from '../constants/CustomColors';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: CustomColors.yellow500,
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: CustomColors.yellow500,
    padding: 12,
    borderRadius: 12,
  },
});

export default Title;
