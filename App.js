import 'react-native-gesture-handler';
import React from 'react';
import CategoryScreen from './Screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverScreen from './Screens/MealsOverScreen';
import MealDetailScreen from './Screens/MealsDetailScreen';
import { IconButton, Button } from 'react-native';
import FavoriteContextProvider from './shop/context/favourite-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './Screens/FavoritesScreen';
import { Provider } from 'react-redux';
import { store } from './shop/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomePage() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={CategoryScreen}
        options={{
          title: 'All categories',
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#351401' },
          statusBarTranslucent: true,
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          title: 'Favorite',
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#351401' },
          statusBarTranslucent: true,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // <FavoriteContextProvider>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={HomePage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverScreen"
            component={MealsOverScreen}
            options={{
              title: 'Menu',
              headerTintColor: 'white',
              headerTitleStyle: { color: 'white' },
              headerStyle: { backgroundColor: '#351401' },
              statusBarTranslucent: true,
              navigationBarColor: 'white',
            }}
          />
          <Stack.Screen
            name="MealsDetailScreen"
            component={MealDetailScreen}
            options={{
              title: 'Menu',
              headerTintColor: 'white',
              headerTitleStyle: { color: 'white' },
              headerStyle: { backgroundColor: '#351401' },
              statusBarTranslucent: true,
              navigationBarColor: 'white',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
