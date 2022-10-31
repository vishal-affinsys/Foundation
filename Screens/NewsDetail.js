import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, Linking, Share} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import OutlinedButton from '../Components/OutlinedButton';
import Colors from '../Utils/Colors';
import moment from 'moment';

const NewsDetail = ({route}) => {
  const navigation = useNavigation();
  const {item} = route.params;
  console.log(item);
  const onShare = async () => {
    console.log(item.url);
    Share.share({
      message: 'Hey! Have a look \n' + item.url,
    }).then(({action, activityType}) => {
      if (action === Share.sharedAction) {
        console.log('Share was successful');
      } else {
        console.log('Share was dismissed');
      }
    });
  };
  return (
    <View>
      <View style={style.header}>
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          name={'long-arrow-left'}
          color={Colors.primaryColor}
          size={28}
        />
        <View style={style.actionButtons}>
          <OutlinedButton
            iconName="share"
            onPress={() => {
              console.log('pressed');
              onShare();
            }}
          />
        </View>
      </View>
      <View style={style.textContainer}>
        <Text style={style.textStyle}>{item.title}</Text>
      </View>
      <View style={style.newsSourceContainer}>
        <Text>{moment(item.publishedAt).format('d MMM, Y')}</Text>
        <Text style={style.textSource}>{item.source.name}</Text>
      </View>
      <View style={style.imageContainer}>
        <Image style={style.imageStyle} source={{uri: item.urlToImage}} />
      </View>
      <View style={style.descriptionContainer}>
        <Text style={style.descriptionTextStyle}>{item.description}</Text>
      </View>
      <Text
        style={style.linkTextStyle}
        onPress={() => Linking.openURL(item.url)}>
        Url: {item.url}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButtons: {
    flexDirection: 'row',
  },
  imageContainer: {
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  textContainer: {
    marginHorizontal: 8,
  },
  textStyle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 250,
    width: '100%',
  },
  newsSourceContainer: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
  },
  textSource: {
    color: Colors.primaryColor800,
    fontWeight: '900',
  },
  descriptionContainer: {
    margin: 8,
  },
  descriptionTextStyle: {
    fontSize: 20,
    fontWeight: '500',
  },
  linkTextStyle: {
    color: Colors.primaryColor800,
    padding: 8,
  },
});

export default NewsDetail;
