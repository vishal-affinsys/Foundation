import {View, TextInput, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import OutlinedButton from './OutlinedButton';
import Colors from '../Utils/Colors';
import React from 'react';
import {useState, useContext} from 'react';
import {NewsProvider} from '../Store/Context/NewsStore';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState(null);
  const NewsCtx = useContext(NewsProvider);
  return (
    <View style={style.searchSection}>
      <View style={style.searchBar}>
        <TextInput
          placeholder="Search"
          style={style.searchBarInput}
          value={searchInput}
          onChangeText={text => setSearchInput(text)}
          placeholderTextColor={'black'}
          cursorColor={'black'}
        />
        <Pressable
          android_ripple={'black'}
          onPress={() => {
            NewsCtx.fetchQueriedPost(searchInput);
          }}>
          <Icon
            name={'search'}
            color={'black'}
            size={25}
            style={style.searchIcon}
          />
        </Pressable>
      </View>
      <View style={style.OutlinedButton}>
        <OutlinedButton iconName={'list'} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarInput: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    padding: 12,
    height: 50,
    borderRadius: 12,
    flex: 1,
    color: 'black',
    backgroundColor: Colors.searchBarBackground,
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: Colors.searchBarBackground,
    justifyContent: 'space-between',
    flex: 6,
    marginHorizontal: 10,

    borderRadius: 12,
    alignItems: 'center',
  },
  searchIcon: {
    marginRight: 15,
    color: Colors.searchIcon,
  },
  OutlinedButton: {
    flex: 1,
  },
});

export default SearchBar;
