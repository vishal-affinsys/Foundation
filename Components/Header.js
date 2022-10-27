import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import OutlinedButton from './OutlinedButton';

const Header = () => {
  return (
    <View style={style.header}>
      <View style={style.leadingHeader}>
        <Image
          style={style.logo}
          source={require('../assets/images/logo1.png')}
        />
        <Text style={style.headerTextStyle}>Berita</Text>
      </View>
      <OutlinedButton iconName="bell" />
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  headerTextStyle: {
    color: 'black',
    fontSize: 30,
    fontWeight: '900',
    marginLeft: 20,
  },

  leadingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Header;
