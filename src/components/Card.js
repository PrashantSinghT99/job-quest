import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
const Card = ({name, position, location}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardDetails}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/job.jpg')}
        />
        <Text>{name}</Text>
      </View>
      <View style={styles.cardDetails}>
        <Text>{position}</Text>
        <Text>{location}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    padding: 15,
    margin: 10,
    backgroundColor: '#EBEBEB',
    width: 200,
    height: 160,
    borderRadius: 20,
    justifyContent:'space-between'
  },

  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  cardDetails:{
    paddingTop:5
  }
});
export default Card;
