import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {
  return (
    <View style={styles.header}>
      <FontAwesome name={'bars'} size={24} color="black" />
      <FontAwesome name={'user'} size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#FFFCF9',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
});
export default Header;
