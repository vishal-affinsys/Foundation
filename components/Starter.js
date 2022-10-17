import { View, Text, Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';

function Starter(props) {
  return (
    <View style={styles.body}>
      <Image
        style={styles.image}
        source={require('../assets/images/logo.jpg')}
      />
      <Text style={styles.textMessage}>
        Start adding and accomplishing your goals !!
      </Text>
      <Pressable
        android_ripple={{ color: 'white' }}
        style={styles.startButton}
        onPress={() => props.start()}
      >
        <Text style={styles.startButtonText}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textMessage: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  startButtonText: {
    color: 'white',
    fontSize: 20,
  },
  image: {
    height: 100,
    width: 150,
    padding: 20,
    overflow: 'visible',
  },
  startButton: {
    backgroundColor: 'green',
    padding: 12,
    margin: 12,
    borderRadius: 12,
  },
});

export default Starter;
