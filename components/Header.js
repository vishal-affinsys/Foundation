import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useState } from 'react';

function Header(props) {
  const [message, setMessage] = useState('');
  const clickHandler = () => {
    if (message.length > 0) {
      props.setListItem((previous) => [
        { text: message, key: Math.random().toString() },
        ...previous,
      ]);
    }
    setMessage('');
  };
  return (
    <View style={styles.header}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholderTextColor={'black'}
          style={styles.textInput}
          placeholder="Add your goal"
          value={message}
          onChangeText={(event) => {
            setMessage(event);
          }}
        />
        <Pressable
          style={styles.addButton}
          android_ripple={{ color: 'white' }}
          onPress={() => {
            clickHandler();
          }}
        >
          <Text style={styles.addButtonText}>Add goal</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addButtonText: {
    color: 'white',
    padding: 12,
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 5,
    borderRadius: 15,
  },
  addButton: {
    color: 'white',
    backgroundColor: 'rgba(0,230,0, 0.7)',
    marginLeft: 5,
    borderRadius: 15,
  },
  header: {
    paddingHorizontal: 12,
    paddingTop: 20,
    backgroundColor: 'white',
  },

  inputContainer: {
    flexDirection: 'row',
    color: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    padding: 12,
    fontSize: 20,
    paddingLeft: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
    color: 'black',
    marginRight: 12,
  },
});

export default Header;
