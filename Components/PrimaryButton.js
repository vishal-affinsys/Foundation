import { View, Pressable, Text, StyleSheet } from 'react-native';
import React from 'react';

function PrimaryButton(props) {
  return (
    <View
      style={{
        ...styles.buttonOuterContainer,
        backgroundColor: props.buttonColor,
      }}
    >
      <Pressable
        onPress={(event) => {
          props.onPress();
        }}
        android_ripple={{ color: 'white' }}
        style={{
          ...styles.pressableStyle,
          ...props.style,
        }}
      >
        <Text
          style={[styles.buttonTextStyle, { color: props.buttonTextColor }]}
        >
          {props.buttonText}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: 'hidden',
    borderRadius: 12,
    elevation: 4,
    margin: 8,
  },
  pressableStyle: {
    overflow: 'hidden',
    alignItems: 'center',
  },
  buttonTextStyle: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default PrimaryButton;
