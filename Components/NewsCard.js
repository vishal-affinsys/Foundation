import React from 'react';
import Colors from '../Utils/Colors';
import {View, Image, Text, StyleSheet} from 'react-native';

const NewsCard = ({item, index}) => {
  return (
    <View style={style.newsCardStyle} key={index}>
      <View style={style.cardImageContainer}>
        <Image
          source={{uri: item.urlToImage}}
          style={style.cardImageStyle}
          resizeMode="cover"
        />
      </View>
      <View style={style.cardTitleContainer}>
        <Text style={style.cardTextStyle}>{item.title}</Text>
        <Text style={style.cardSourceName}>{item.source.name}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  newsCardStyle: {
    flexDirection: 'row',
    display: 'flex',
    marginVertical: 8,
    overflow: 'hidden',
    height: 170,
    backgroundColor: Colors.frostWhite,
    borderRadius: 12,
  },
  cardImageContainer: {
    flex: 1,
  },
  cardImageStyle: {
    height: 170,
    // width: 150,
  },
  cardTitleContainer: {
    flex: 1.5,
  },
  cardTextStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    margin: 4,
  },
  cardSourceName: {
    color: Colors.primaryColor800,
    fontSize: 15,
    marginHorizontal: 8,
    marginVertical: 12,
    fontWeight: '500',
  },
});

export default NewsCard;
