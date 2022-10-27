import React from 'react';
import {Provider} from 'react-native-paper';
import HomePage from './Screens/HomePage';
import NewsContextProvider from './Store/Context/NewsStore';

const App = () => {
  return (
    <NewsContextProvider>
      <Provider>
        <HomePage />
      </Provider>
    </NewsContextProvider>
  );
};

export default App;
