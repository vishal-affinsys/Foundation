/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Ionicons from '@expo/vector-icons/Ionicons';
import { FavoriteContext } from '../shop/context/favourite-context';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../shop/redux/favorites';

function list(item) {
  return item.map((data) => {
    return (
      <View key={Math.random()} style={styles.ingredients}>
        <Text>{'\u25CF'}</Text>
        <Text style={styles.bodyText}>{data}</Text>
      </View>
    );
  });
}

const width = Dimensions.get('window').width;
export default function MealDetailScreen({ route }) {
  const meals = route.params.item;
  const navigation = useNavigation();
  const favoriteMealCtl = useContext(FavoriteContext);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals);
  const isFavorite = favoriteMealIds.ids.includes(meals.id);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    function favoriteHandler() {
      if (isFavorite === true) {
        dispatch(removeFavorite({ id: meals.id }));
      } else {
        dispatch(addFavorite({ id: meals.id }));
      }
      return isFavorite;
    }
    navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            name={isFavorite ? 'star' : 'star-outline'}
            size={25}
            color="white"
            onPress={() => {
              favoriteHandler();
            }}
          />
        );
      },
    });
  }, [navigation, dispatch, isFavorite, meals.id]);
  return (
    <ScrollView>
      <View>
        <Image style={styles.imageStyle} source={{ uri: meals.imageUrl }} />
      </View>
      <View style={styles.outerCounter}>
        <Text style={styles.textStyle}>INGREDIENTS</Text>
        {list(meals.ingredients)}
        <Text style={styles.textStyle}>STEPS</Text>
        {list(meals.steps)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerCounter: {
    margin: 8,
  },
  imageStyle: {
    height: 350,
    width: width,
  },
  ingredients: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  bodyText: {
    marginLeft: 5,
    fontWeight: '600',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 12,
  },
});
