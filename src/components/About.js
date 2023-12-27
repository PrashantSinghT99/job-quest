import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
const About = ({info}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tabHeading}>About the job:</Text>
      <View>
        <Text>{info}</Text>
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

export default About;
