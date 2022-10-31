import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import CustomTextInput from '../Components/FormComponents';
import {Button} from 'react-native-paper';
import Colors from '../Utils/Colors';
import {useEffect, useState, useCallback} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-community/google-signin';
import {useNavigation} from '@react-navigation/native';

async function onGoogleButtonPress() {
  // Get the user's ID token
  try {
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    return [false, error];
  }
}

async function createUser(email, password) {
  // auth().signInAnonymously
  try {
    auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
}

const LoginScreen = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '587001100633-9d0r923q876gc8gbtaigt1opoelmh1ng.apps.googleusercontent.com',
    });
  }, []);
  const navigate = useNavigation();

  const [emailCtr, setEmailCtr] = useState('');
  const [passWord, setPassword] = useState('');
  const [isValidEmail, setisValidEmail] = useState(true);
  const [isValidPassword, setisValidPassword] = useState(true);

  const validateFields = useCallback(() => {
    const strongRegex = new RegExp(
      '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    );

    if (!strongRegex.test(emailCtr)) {
      setisValidEmail(false);
      return false;
    } else if (passWord.length < 8) {
      setisValidPassword(false);
      return false;
    } else {
      return true;
    }
  }, [emailCtr, passWord]);

  return (
    <View style={style.body}>
      <Image
        source={require('../assets/images/login.jpg')}
        style={style.imageStyle}
      />
      <Text style={style.bodyText}>Let's Sign You In</Text>
      <View style={style.input}>
        <CustomTextInput name="Email" setText={setEmailCtr} />
        {isValidEmail ? (
          <View />
        ) : (
          <Text style={style.passwordValidator}>Invalid email</Text>
        )}
      </View>
      <View style={style.input}>
        <CustomTextInput
          name="Password"
          setText={setPassword}
          isPasswordField={true}
        />
        {isValidPassword ? (
          <View />
        ) : (
          <Text style={style.passwordValidator}>
            Password length is too short, minimum length: 8
          </Text>
        )}
      </View>
      <View style={style.buttonContainer}>
        <Button
          onPress={() => {
            if (validateFields()) {
              createUser(emailCtr, passWord).then(() => {
                navigate.navigate('Home');
              });
            }
          }}
          style={style.buttonStyle}
          mode="contained">
          Sign In
        </Button>
      </View>
      {/* <View>
        <Text>OR</Text>
      </View> */}
      {/* <View style={style.googleButtonContainer}>
        <Button
          textColor="black"
          onPress={() => {
            onGoogleButtonPress(navigate).then(value => {
              if (value) {
                navigate.replace('Home');
              } else {
                navigate.navigate('ErrorScreen');
              }
            });
          }}
          style={style.googleButton}
          mode="contained">
          <Text> Login with google</Text>
          <Image
            style={style.googleIcon}
            source={require('../assets/images/googleLogo.webp')}
          />
        </Button>
      </View> */}
    </View>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,
    padding: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 170,
    width: 170,
  },
  bodyText: {
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 12,
  },
  input: {
    width: '100%',
  },
  buttonContainer: {
    marginTop: 36,
    marginBottom: 24,
    width: '100%',
  },
  googleButtonContainer: {
    marginTop: 24,
    marginBottom: 24,
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: Colors.primaryColor,
  },
  googleButton: {
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0.3)',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
  },
  googleIcon: {
    marginLeft: 12,
    height: 20,
    width: 20,
  },
  passwordValidator: {
    backgroundColor: Colors.primaryColor100,
    color: Colors.primaryColor,
    padding: 4,
    borderRadius: 12,
    fontSize: 13,
  },
});

export default LoginScreen;
