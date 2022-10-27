import React from 'react';
import {useState} from 'react';
import axios from 'react-native-axios';

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

  // const apiKey1 = '2977e6b09826487ba912c11ee68503de';

  const apiKey2 = '3609c0ae002848bd830f34ec06ff3e4d';

  async function fetchTrendingPost() {
    setIsLoading(true);
    const data = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=' + apiKey2,
    );
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
    const data = await axios.get(
      'https://newsapi.org/v2/everything?q=' +
        searchedItem +
        '&apiKey=' +
        apiKey2,
    );
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
    const data = await axios.get(
      'https://newsapi.org/v2/top-headlines?country=in&category=' +
        category +
        '&apiKey=' +
        apiKey2,
    );
    setnewsArray(previous => {
      previous[category] = data.data.articles.splice(0, 20);
      return previous;
    });
    console.log(newsArray.business.length);
  }

  const value = {
    newsArray: newsArray,
    fetchQueriedPost: fetchQueriedPost,
    fetchTrendingPost: fetchTrendingPost,
    fetchListOfCategories: fetchListOfCategories,
    isLoading: isLoading,
  };
  return (
    <NewsProvider.Provider value={value}>{children}</NewsProvider.Provider>
  );
};

export default NewsContextProvider;
