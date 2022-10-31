import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ErrorScreen = ({route}) => {
  const message = route.params.error[0];
  console.log(message);
  return (
    <View style={style.errorBody}>
      <Text>Stuck in error !</Text>
      <Text> Message : {message} </Text>
    </View>
  );
};

export default ErrorScreen;

const style = StyleSheet.create({
  errorBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
