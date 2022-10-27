import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import Trending from '../Components/Trending';
import News from '../Components/News';

const HomePage = () => {
  return (
    <View style={style.body}>
      {/* HEADER */}
      <Header />
      {/* ------------------------------------------------------------------------------------------------- */}

      {/* SEARCHBAR */}
      <SearchBar />
      {/* --------------------------------------------------------------------------------------------------------- */}

      {/* TRENDING/News SECTION */}
      {/* <FlatList
        pagingEnabled
        style={style.scrollStyle}
        data={[<Trending />, <News />]}
        renderItem={({item}) => {
          return item;
        }}
      /> */}
      <ScrollView pagingEnabled={true} style={style.scrollStyle}>
        <Trending />
        <News />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  body: {
    backgroundColor: Colors.backGroundColor,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  scrollStyle: {
    // backgroundColor: 'black',
  },
});

export default HomePage;
