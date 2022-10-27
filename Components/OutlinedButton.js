import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Colors from '../Utils/Colors';

const OutlinedButton = ({iconName}) => {
  //   console.log(typeof iconName);
  return (
    <View style={style.headerAction}>
      <Icon name={iconName} color={Colors.primaryColor} size={26} />
    </View>
  );
};

const style = StyleSheet.create({
  headerAction: {
    backgroundColor: Colors.primaryColor100,
    padding: 8,
    borderRadius: 8,
    marginRight: 10,
  },
});

export default OutlinedButton;
