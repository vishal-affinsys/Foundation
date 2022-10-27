import React from 'react';
import {View, Text, ScrollView, StyleSheet, FlatList} from 'react-native';
import Colors from '../Utils/Colors';
import {useState, useEffect, useContext} from 'react';
import {Button} from 'react-native-paper';
import {NewsProvider} from '../Store/Context/NewsStore';
import NewsCard from './NewsCard';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('business');
  const NewsCtx = useContext(NewsProvider);
  useEffect(() => {
    if (NewsCtx.newsArray[selectedCategory].length === 0) {
      NewsCtx.fetchListOfCategories(selectedCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  return (
    <View style={style.newsBody}>
      <Text style={style.newsHeader}>News</Text>
      <ScrollView
        horizontal
        style={style.scrollStyle}
        showsHorizontalScrollIndicator={false}>
        {[
          'business',
          'entertainment',
          'general',
          'health',
          'science',
          'sports',
          'technology',
        ].map(item => {
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
        })}
      </ScrollView>
      <ScrollView nestedScrollEnabled>
        {NewsCtx.newsArray[selectedCategory].map((item, index) => {
          return <NewsCard item={item} key={index} />;
        })}
      </ScrollView>
      {/* <View style={style.newsScrollStyle}>
        <FlatList
          nestedScrollEnabled
          keyExtractor={({item}) => Math.random()}
          data={NewsCtx.newsArray[selectedCategory]}
          renderItem={({item, index}) => (
            <View>
              <NewsCard item={item} index={index} />
            </View>
          )}
        />
      </View> */}
    </View>
  );
};

export default News;

const style = StyleSheet.create({
  newsBody: {height: 720},
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
  },
  newsScrollStyle: {
    marginVertical: 10,
    // flex: 1,
  },
});
{
  /* <FlatList
          nestedScrollEnabled
          keyExtractor={({item}) => Math.random()}
          data={NewsCtx.newsArray[selectedCategory]}
          renderItem={({item, index}) => (
            <View>
              <NewsCard item={item} index={index} />
            </View>
          )}
        /> */
}
