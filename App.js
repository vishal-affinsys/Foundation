import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider} from 'react-native-paper';
import HomePage from './Screens/HomePage';
import NewsContextProvider from './Store/Context/NewsStore';
import NewsDetail from './Screens/NewsDetail';
import LoginScreen from './Screens/LoginScreen';
import ErrorScreen from './Screens/ErrorScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NewsContextProvider>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="NewsDetail" component={NewsDetail} />
            <Stack.Screen name="ErrorScreen" component={ErrorScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </NewsContextProvider>
  );
};

export default App;
