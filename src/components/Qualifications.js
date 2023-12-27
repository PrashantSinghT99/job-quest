import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
const Qualifications = ({ title, points }) => {
  return (
    <View style={styles.container}>
      <Text  style={styles.tabHeading}>{title}:</Text>
      <View >
        {points.map((item, index) => (
          <View  key={item + index}>
            <View  />
            <Text >{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20
  },
  tabHeading:{
    fontWeight:'bold',
    color:'black',
    marginBottom:4
  }
});
export default Qualifications;
