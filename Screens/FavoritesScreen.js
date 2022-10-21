import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FavoriteContext } from '../shop/context/favourite-context';
import { MEALS } from '../data';
import { useSelector } from 'react-redux';

export default function FavoriteScreen() {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();
  const favoriteIds = useContext(FavoriteContext);
  const favoriteReduxIds = useSelector((state) => state.favoriteMeals);
  let meals = [];
  favoriteReduxIds.ids.forEach((item) => {
    const array = MEALS.filter((meal) => meal.id === item);

    meals.push(...array);
  });

  return (
    <View style={{ ...style.bodyContainer }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={style.listStyle}
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={style.itemContainer}>
              <View style={{ ...style.innerContainer, width: width - 25 }}>
                <Pressable
                  android_ripple={{ color: '#98796850' }}
                  onPress={() => {
                    navigation.navigate('MealsDetailScreen', {
                      item: item,
                    });
                  }}
                >
                  <Image
                    style={{ ...style.imageStyle }}
                    source={{ uri: item.imageUrl }}
                  />
                  <Text style={{ ...style.textStyle, width: width - 25 }}>
                    {item.title}
                  </Text>
                  <View style={style.subtitle}>
                    <Text>{item.duration}m</Text>
                    <Text>{item.complexity.toUpperCase()}</Text>
                    <Text>{item.affordability.toUpperCase()}</Text>
                  </View>
                </Pressable>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  itemContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 9,
    elevation: 2,
    alignSelf: 'stretch',
    margin: 8,
  },

  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textStyle: {
    fontSize: 16,
    flexDirection: 'row',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  innerContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    overflow: 'hidden',
    borderRadius: 8,
  },
  subtitle: {
    flexDirection: 'row',
    marginVertical: 8,
    borderRadius: 8,
    justifyContent: 'space-evenly',
  },
  // listStyle: {
  //   marginHorizontal: 12,
  // },
  imageStyle: {
    height: 200,
    borderRadius: 8,
    borderWidth: 2,
  },
});
