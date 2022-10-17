import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

function HeadingComponent(props) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.bodyText}>List of goals</Text>
      <Pressable
        style={styles.clearButton}
        android_ripple={{ color: 'white' }}
        onPress={() => {
          props.clearList();
        }}
      >
        <Text style={styles.clearButtonText}>Clear</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: 'white',
    padding: 12,
    display: 'flex',
    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyText: {
    padding: 12,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'black',
    borderRadius: 15,
    color: 'white',
  },
  clearButton: {
    color: 'white',
    backgroundColor: 'rgba(230,0,0, 0.7)',
    padding: 12,
    fontSize: 20,
    fontWeight: '400',
    borderRadius: 15,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    borderRadius: 15,
  },
});

export default HeadingComponent;
