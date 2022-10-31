import React from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import Colors from '../Utils/Colors';

const CustomTextInput = ({name, setText, isPasswordField}) => {
  return (
    <View>
      <View style={style.formTextContainer}>
        <Text style={style.formTextStyle}>{name}</Text>
        <Text style={{color: Colors.primaryColor}}>*</Text>
      </View>
      <View style={style.textInputContainer}>
        {isPasswordField ? (
          <TextInput
            onChangeText={value => {
              setText(value);
            }}
            placeholder={name}
            secureTextEntry={true}
            passwordRules={
              'required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;'
            }
            style={style.textInputStyle}
          />
        ) : (
          <TextInput
            onChangeText={value => {
              setText(value);
            }}
            placeholder={name}
            style={style.textInputStyle}
          />
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  formTextContainer: {
    width: '100%',
    flexDirection: 'row',
    margin: 4,
    marginLeft: 12,
  },
  textInputContainer: {
    width: '100%',
  },
  formTextStyle: {
    textAlign: 'left',
  },
  textInputStyle: {
    borderWidth: 0.5,
    borderRadius: 32,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingLeft: 18,
    marginBottom: 12,
  },
});

export default CustomTextInput;
