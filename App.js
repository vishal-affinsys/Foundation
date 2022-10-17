import { SafeAreaView, StyleSheet, View, Modal } from 'react-native';
import GoalList from './components/GoalList';
import React from 'react';
import Header from './components/Header';
import { useState } from 'react';
import HeadingComponent from './components/HeadingComponent';
import Starter from './components/Starter';

export default function App() {
  const [listItem, setListItem] = useState([]);
  const [modelVisibility, setModalVisibility] = useState(true);

  function removeItem(dataToDelete) {
    setListItem(listItem.filter((item) => item.key !== dataToDelete.key));
  }
  function clearItems() {
    setListItem([]);
  }
  function toggleModelVisibility() {
    setModalVisibility((previous) => !previous);
  }

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Starter start={toggleModelVisibility} />
        <Modal
          style={styles.body}
          animationType="slide"
          visible={modelVisibility}
          onRequestClose={toggleModelVisibility}
        >
          <Header setListItem={setListItem} />
          <HeadingComponent clearList={clearItems} />
          <View style={styles.divider} />
          <View style={styles.list}>
            <GoalList
              listItem={listItem}
              removeItem={(item) => {
                removeItem(item);
              }}
            />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  divider: {
    height: 1,
    backgroundColor: 'rgba(210,210,210,1)',
  },
  body: {
    marginTop: 34,
    paddingTop: 10,
    display: 'flex',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    height: '100%',
    flexDirection: 'column',
  },
  list: {
    flex: 1,
  },
});
