import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {useContext, useRef, useEffect, useCallback, useState} from 'react';
import {NewsProvider} from '../Store/Context/NewsStore';
import Colors from '../Utils/Colors';

const Trending = () => {
  const NewsCtx = useContext(NewsProvider);
  const {width} = useWindowDimensions();
  const scrollRef = useRef();
  const [selectedIndex, setSelectedIndex] = useState(0);

  let intervalId = null;

  useEffect(() => {
    if (NewsCtx.newsArray.trending.length === 0) {
      NewsCtx.fetchTrendingPost();
    } else {
      return;
    }
  });

  const onSlideChange = useCallback(() => {
    const newIndex =
      selectedIndex === NewsCtx.newsArray.length - 1 ? 0 : selectedIndex + 1;

    setSelectedIndex(newIndex);

    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
      x: width * newIndex,
    });
  }, [selectedIndex, width, NewsCtx.newsArray.length]);

  const startInterval = useCallback(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    intervalId = setInterval(onSlideChange, 3000);
  }, [onSlideChange]);

  useEffect(() => {
    startInterval();

    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId, startInterval]);

  const onTouchStart = () => {
    clearInterval(intervalId);
  };

  const onTouchEnd = () => {
    // As soon as the user stops touching the slide, releases it, start the automatic sliding again
    startInterval();
  };

  return (
    <View style={style.trendingBody}>
      <Text style={style.trendingTextStyle}>Trending 🔥</Text>
      <View style={style.scrollBehaviour}>
        {NewsCtx.isLoading ? (
          <ActivityIndicator size={28} color={Colors.primaryColor} />
        ) : (
          <ScrollView
            horizontal
            ref={scrollRef}
            showsHorizontalScrollIndicator={false}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            pagingEnabled>
            {NewsCtx.newsArray.trending.map(item => {
              return (
                <View
                  key={Math.random()}
                  style={{...style.listItem, width: width - 16}}>
                  <ImageBackground
                    source={{uri: item.urlToImage}}
                    resizeMode="contain"
                    style={style.imageStyle}>
                    <Text style={style.titleTextStyle}>{item.title}</Text>
                  </ImageBackground>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  trendingBody: {
    height: 720,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  scrollBehaviour: {
    flex: 1,
    alignItems: 'center',

    justifyContent: 'center',
  },
  trendingTextStyle: {
    color: 'black',
    fontSize: 26,
    fontWeight: '800',
    marginHorizontal: 12,
    marginTop: 12,
  },
  listItem: {
    marginBottom: 12,
    borderRadius: 12,
    marginHorizontal: 8,
    // height: 460,
    overflow: 'hidden',
    backgroundColor: Colors.searchBarBackground,
  },
  titleTextStyle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: Colors.primaryFrostColor100,
    padding: 12,
  },
});

export default Trending;
