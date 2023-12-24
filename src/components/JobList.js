import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
const JobList = ({position, jobType}) => {
  return (
    <View style={styles.jobList}>
      <View style={styles.jobListDetails}>
        <Image
          style={styles.tinyLogo}
          source={require('../../assets/job.jpg')}
        />
      </View>
      <View style={styles.jobListDetails}>
        <Text>{position}</Text>
        <Text>{jobType}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  jobList: {
    width: '85%',
    backgroundColor: 'red',
    marginHorizontal:20,
    padding:20,
    marginVertical:10,
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    flexDirection:'row',
    alignItems:'center'
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius:20
  },
  jobListDetails:{
    paddingLeft:20
  }
});
export default JobList;
