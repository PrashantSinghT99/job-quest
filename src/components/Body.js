import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SectionHeading from './SectionHeading';
import Card from './Card';
import {bodyHeading} from '../../assets/data';
import {jobData} from '../../assets/data';
import JobList from './JobList';
const Body = () => {
  return (
    <View>
      <SectionHeading
        heading1={bodyHeading[0].heading1}
        heading2={bodyHeading[0].heading2}
      />
      <View style={styles.cards}>
        <ScrollView horizontal={true}>
          {jobData.map(job => (
            <Card
              key={job.id}
              name={job.name}
              position={job.position}
              location={job.location}
            />
          ))}
        </ScrollView>
      </View>
      <SectionHeading
        heading1={bodyHeading[1].heading1}
        heading2={bodyHeading[1].heading2}
      />
      <ScrollView>
        {jobData.map(job => (
          <JobList key={job.id} position={job.position} jobType={job.jobType} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'row',
  },
});
export default Body;
