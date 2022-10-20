import MainScreen from './Screens/MainScreen';
import React from 'react';
import ChatScreen from './Screens/ChatScreen';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
export default function App() {
  const screenOptions = {
    cardStyle: { backgroundColor: '#1B202D' },
    headerShown: false,
    animationEnable: false,
  };
  return (
    <NavigationContainer
      theme={{
        dark: true,
        colors: {
          ...DefaultTheme.colors,
          background: '#1B202D',
          animation: 'fade_from_bottom',
        },
      }}
    >
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name="/"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{ headerShown: false, cardStyleInterpolator: forFade }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
