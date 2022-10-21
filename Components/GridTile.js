import { Text, View, StyleSheet, Pressable } from 'react-native';
import React from 'react';

export default function GridTile({ title, color, onPress }) {
  return (
    <View style={{ ...styles.gridTile, backgroundColor: color }}>
      <Pressable
        onPress={onPress}
        style={styles.pressButton}
        android_ripple={{ color: '#ccc' }}
      >
        <Text style={styles.bodyText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridTile: {
    height: 150,
    flex: 1,
    margin: 22,
    borderRadius: 14,
    overflow: 'hidden',
    elevation: 8,
    borderWidth: 2,
  },
  pressButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
