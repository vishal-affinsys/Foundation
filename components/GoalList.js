import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './GoalItem';
import React from 'react';

function Space() {
  return <View style={style.space} />;
}

function GoalList(props) {
  return (
    <FlatList
      style={style.list}
      data={props.listItem}
      renderItem={(data) => {
        if (data.item.key === props.listItem[props.listItem.length - 1].key) {
          return (
            <View>
              <GoalItem
                item={data.item}
                deleteItem={() => {
                  props.removeItem(data.item);
                }}
              />
              <Space />
            </View>
          );
        }
        return (
          <GoalItem
            item={data.item}
            deleteItem={() => {
              props.removeItem(data.item);
            }}
          />
        );
      }}
      // keyExtractor is used to fetch unique key/id from data given
      // below is the code to extract key property from data
      /// note: if data consist key parameter already then no need to define keyExtractor
      // keyExtractor={(data, index) => {
      //   return data.key;
      // }}
    />
  );
}

const style = StyleSheet.create({
  list: {
    borderRadius: 15,
    padding: 12,
    backgroundColor: 'white',
  },
  space: {
    height: 20,
    // backgroundColor: 'red',
  },
});

export default GoalList;
