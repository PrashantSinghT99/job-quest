import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import NearByJobs from './NearByJobs';
import useFetch from '../hook/useFetch';
const JobListing = ({route,navigation}) => {
  const {query} = route.params;
  const [data, setData] = useState([]);
  // const [isLoading, SetIsLoading] = useState(false);
  // const [error, SetError] = useState('');
  const {
    data: fetchedData,
    isLoading,
    error,
  } = useFetch('search', {
    query: query,
    num_pages: '1',
  });

  useEffect(() => {
    if (!isLoading && !error) {
      setData(fetchedData);
    }
  }, [fetchedData, isLoading, error]);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Feather name={'share-2'} size={24} color="black" />
      </View>
      <View>
        <ScrollView>
          {data?.map(job => (
            <TouchableOpacity
              key={`JobListing-${job.job_id}`}
              onPress={() => navigation.navigate('JobDetail', {job: job})}>
              <NearByJobs
                key={job.job_id}
                position={job.job_title}
                jobType={job.job_employment_type}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    padding: 10,
  },
});
export default JobListing;
