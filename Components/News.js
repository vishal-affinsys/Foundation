import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Colors from '../Utils/Colors';
import {useState, useEffect, useContext} from 'react';
import {Button} from 'react-native-paper';
import {NewsProvider} from '../Store/Context/NewsStore';
import NewsCard from './NewsCard';
// import ARTICLES from '../everything.json';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('business');
  const NewsCtx = useContext(NewsProvider);
  const [fetchList, setfetchList] = useState([]);

  useEffect(() => {
    if (NewsCtx.newsArray[selectedCategory].length === 0) {
      console.log('useEffect called !!');
      NewsCtx.fetchListOfCategories(selectedCategory).then(() => {
        setfetchList(() => NewsCtx.newsArray[selectedCategory]);
      });
    } else {
      setfetchList(() => NewsCtx.newsArray[selectedCategory]);
    }
  }, [NewsCtx, selectedCategory, setfetchList, fetchList]);

  return (
    <View style={style.newsBody}>
      <Text style={style.newsHeader}>News</Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={[
            'business',
            'entertainment',
            'general',
            'health',
            'science',
            'sports',
            'technology',
          ]}
          renderItem={({item}) => {
            return (
              <Button
                onPress={() => setSelectedCategory(item)}
                key={item}
                style={style.buttonStyle}
                mode="contained"
                textColor={selectedCategory === item ? 'white' : 'black'}
                buttonColor={
                  selectedCategory === item
                    ? Colors.primaryColor
                    : Colors.primaryColor100
                }>
                {item.toUpperCase()}
              </Button>
            );
          }}
        />
      </View>

      {NewsCtx.isListLoading ? (
        <View style={style.loadingIndicator}>
          <ActivityIndicator color={Colors.primaryColor800} />
        </View>
      ) : (
        <FlatList
          nestedScrollEnabled
          style={style.newsScrollStyle}
          keyExtractor={({item}) => Math.random()}
          data={fetchList}
          renderItem={({item, index}) => (
            <View>
              <NewsCard item={item} index={index} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default News;

const style = StyleSheet.create({
  newsBody: {height: 720, display: 'flex'},
  newsHeader: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 8,
    borderRadius: 12,
    padding: 12,
  },
  buttonStyle: {
    height: 42,
    marginHorizontal: 6,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
  },
  scrollStyle: {
    height: 50,
    backgroundColor: 'black',
  },
  newsScrollStyle: {
    marginVertical: 10,
    flex: 1,
  },
  loadingIndicator: {
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
