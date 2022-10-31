import React from 'react';
import {useState} from 'react';
import axios from 'react-native-axios';
import Url from '../../Utils/urls';

export const NewsProvider = React.createContext({
  newsArray: {
    trending: [],
    sports: [],
    business: [],
    health: [],
    general: [],
    entertainment: [],
    science: [],
    technology: [],
  },
  isListLoading: null,
  isLoading: null,
  fetchListOfCategories: category => {},
  fetchTrendingPost: () => {},
  fetchQueriedPost: text => {},
});

const NewsContextProvider = ({children}) => {
  const [newsArray, setnewsArray] = useState({
    trending: [],
    sports: [],
    business: [],
    health: [],
    general: [],
    entertainment: [],
    science: [],
    technology: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isListLoading, setIsListLoading] = useState(false);

  async function fetchTrendingPost() {
    setIsLoading(true);
    const data = await axios.get(Url.trendingUrl);

    // Running on Mock API
    // const data = await axios.get(Url.MockApi);

    setIsLoading(false);
    setnewsArray(() => {
      return {
        trending: data.data.articles.splice(0, 20),
        sports: [],
        business: [],
        health: [],
        general: [],
        entertainment: [],
        science: [],
        technology: [],
      };
    });
  }

  async function fetchQueriedPost(searchedItem) {
    setIsLoading(true);
    const data = await axios.get(Url.queriedUrl(searchedItem));
    // const data = await axios.get(Url.MockApi);
    setIsLoading(false);
    setnewsArray(() => {
      return {
        trending: data.data.articles.splice(0, 20),
        sports: [],
        business: [],
        health: [],
        general: [],
        entertainment: [],
        science: [],
        technology: [],
      };
    });
  }

  async function fetchListOfCategories(category) {
    setIsListLoading(true);
    console.log(Url.categoryUrl(category));
    const data = await axios.get(Url.categoryUrl(category));
    // const data = await axios.get(Url.MockApi);
    setnewsArray(previous => {
      previous[category] = data.data.articles.splice(0, 20);
      return previous;
    });
    setIsListLoading(false);
  }

  const value = {
    newsArray: newsArray,
    fetchQueriedPost: fetchQueriedPost,
    fetchTrendingPost: fetchTrendingPost,
    fetchListOfCategories: fetchListOfCategories,
    isLoading: isLoading,
    isListLoading: isListLoading,
  };
  return (
    <NewsProvider.Provider value={value}>{children}</NewsProvider.Provider>
  );
};

export default NewsContextProvider;
