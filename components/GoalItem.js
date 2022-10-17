import { Text, StyleSheet, View, Pressable } from 'react-native';
// import { IconButton } from 'react-native-paper';
import React from 'react';

function GoalItem(props) {
  return (
    <View style={styles.listStyle}>
      <Text style={styles.listItem}>{props.item.text}</Text>
      <View style={styles.deleteButton}>
        <Pressable
          android_ripple={{ color: 'white' }}
          onPress={() => {
            props.deleteItem(props.item);
          }}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  deleteButton: {
    color: 'white',
    backgroundColor: 'rgba(230,0,0, 0.7)',
    marginLeft: 5,
    borderRadius: 15,
  },
  deleteButtonText: {
    color: 'white',
    padding: 12,
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 5,
    borderRadius: 15,
  },
  listStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  listItem: {
    backgroundColor: 'rgba(230,230,230, 0.3)',
    padding: 12,
    flex: 1,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    borderRadius: 15,
    marginTop: 12,
  },
});

export default GoalItem;
