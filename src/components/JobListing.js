import React from 'react';
import {jobData} from '../../assets/data';
import {View, ScrollView,StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import NearByJobs from './NearByJobs';
const JobListing = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Feather name={'arrow-left'} size={24} color="black" />
        <Feather name={'share-2'} size={24} color="black" />
      </View>
      <View>
        <ScrollView>
          {data?.map(job => (
            <NearByJobs
              key={job.job_id}
              position={job.job_title}
              jobType={job.job_employment_type}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:"space-between"
    },
    head:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        padding:10
    },})
export default JobListing;
