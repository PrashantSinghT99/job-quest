import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SectionHeading from './SectionHeading';
import Card from './Card';
import {bodyHeading} from '../../assets/data';
import NearByJobs from './NearByJobs';
import {ActivityIndicator} from 'react-native';
import MyContext from '../context/MyContextProvider';
const PopularJobs = ({isLoading, navigation }) => {
  const {data} = useContext(MyContext);

  return (
    <View style={styles.container}>
      <SectionHeading
        heading1={bodyHeading[0].heading1}
        heading2={bodyHeading[0].heading2}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#3498db" />
      ) : (
        <View style={styles.cards}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {data?.map(job => (
              <TouchableOpacity
                key={job?.job_id}
                onPress={() => navigation.navigate('JobDetail',{job:job})}>
                <Card
                  key={job?.job_id}
                  name={job?.employer_name}
                  position={job?.job_title}
                  location={job?.job_country}
                  icon={job?.employer_logo}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
      <SectionHeading
        heading1={bodyHeading[1].heading1}
        heading2={bodyHeading[1].heading2}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#3498db" />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {data?.map(job => (
             <TouchableOpacity
             key={`NearByJobs-${job.job_id}`}
             onPress={() => navigation.navigate('JobDetail',{job:job})}>
            <NearByJobs
              key={`NearByJobs-${job.job_id}`}
              position={job.job_title}
              jobType={job.job_employment_type}
            />
               </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cards: {
    flexDirection: 'row',
  },
});
export default PopularJobs;
