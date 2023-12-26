import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {checkImageURL} from '../utils/checkImageURL';

const Card = ({name, position, location, icon}) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardDetails}>
        <Image
          style={styles.tinyLogo}
          // source={require('../../assets/job.jpg')}
          source={{
            uri: checkImageURL(icon)
              ? icon
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
        />
        <Text>{name}</Text>
      </View>
      <View style={styles.cardDetails}>
        <Text>{position.substring(0, 15)}</Text>
        <Text>{location}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    padding: 12,
    margin: 10,
    backgroundColor: '#EBEBEB',
    width: 200,
    height: 135,
    borderRadius: 20,
    justifyContent: 'space-between',
  },

  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  cardDetails: {
    paddingTop: 5,
  },
});
export default Card;
