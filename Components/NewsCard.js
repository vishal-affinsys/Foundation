import React from 'react';
import Colors from '../Utils/Colors';
import {View, Image, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NewsCard = ({item, index}) => {
  const {navigate} = useNavigation();
  return (
    <Pressable
      onPress={() => {
        // console.log(item);
        navigate('NewsDetail', {item});
      }}>
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
    </Pressable>
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
    color: 'black',
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
