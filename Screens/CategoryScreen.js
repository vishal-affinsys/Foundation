import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data';
import { useNavigation } from '@react-navigation/native';
import GridTile from '../Components/GridTile';

export default function CategoryScreen() {
  const navigation = useNavigation();
  return (
    <FlatList
      style={styles.list}
      data={CATEGORIES}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <GridTile
            title={item.title}
            color={item.color}
            onPress={() =>
              navigation.navigate('MealsOverScreen', {
                id: item.id,
                name: item.title,
                color: item.color,
              })
            }
          />
        );
        // return <Text>{item.title}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  bodyContainer: {},
  list: {
    flex: 1,
    width: '100%',
  },
});
