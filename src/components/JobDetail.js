import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {checkImageURL} from '../utils/checkImageURL';
import Qualifications from './Qualifications';
import Tabs from './Tabs';
import About from './About';

const tabs = ['About', 'Qualifications', 'Responsibilities'];
const JobDetail = ({route, navigation}) => {
  //take the id then make request to job detail api

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const {job} = route.params;
  //const tabs=[{"About":`${job?.job_description}`},{"Qualifications":`${job?.job_highlights.Qualifications}`},{"Responsibilities":`${job?.job_highlights.Responsibilities}`}];
  //job_highlights.Qualifications
  //job_highlights.Responsibilities
  //job_description
  // console.warn(job);
  // console.warn(tabs);
  const displayTabContent = () => {
    switch (activeTab) {
      case 'Qualifications':
        return (
          <Qualifications
            title="Qualifications"
            points={job.job_highlights?.Qualifications ?? ['N/A']}
          />
        );

      case 'About':
        return <About info={job.job_description ?? 'No data provided'} />;

      case 'Responsibilities':
        return (
          <Qualifications
            title="Responsibilities"
            points={job.job_highlights?.Responsibilities ?? ['N/A']}
          />
        );

      default:
        return null;
    }
  };
  const handleApplyButtonClick = () => {
    const applyLink = job?.job_apply_link;
    if (applyLink) {
      // Open the apply link in the device's default browser
      Linking.openURL(applyLink);
    } else {
      // Handle the case where no apply link is available
      console.warn('No apply link provided for this job.');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Feather name={'share-2'} size={24} color="black" />
      </View>
      <View style={styles.section1}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: checkImageURL(job?.employer_logo)
              ? job?.employer_logo
              : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg',
          }}
          resizeMode="contain"
        />

        <Text style={styles.bold}>{job.job_title}</Text>
        <Text style={styles.companyLocation}>
          {job.employer_name}
          <Ionicons
            style={styles.locationIcon}
            name={'location-outline'}
            color="black"
          />
          {job.job_country}
        </Text>
      </View>
      <ScrollView>
        <View style={styles.buttonList}>
          <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </View>
        {displayTabContent()}
      </ScrollView>
      <View style={styles.footer}>
        <Feather
          style={styles.footerIcon}
          name={'heart'}
          size={24}
          color="#E07A5F"
        />
        {/* job_apply_link */}
        <TouchableOpacity
          style={styles.footerBtn}
          onPress={handleApplyButtonClick}>
          <Text style={styles.footerText}>Apply for job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'space-around',
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    padding: 10,
  },
  section1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  buttonList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 6,
  },
  button: {
    alignItems: 'center',
    padding: 6,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#EBEBEB',
    marginTop: 10,
    width: 130,
  },
  bold: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    padding: 10,
  },
  companyLocation: {
    fontSize: 14,
    marginTop: 2,
  },
  locationIcon: {
    width: 4,
    height: 4,
  },
  section2: {
    padding: 5,
    marginLeft: 16,
    flexDirection: 'column',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
    width: '95%',
    // position: 'absolute',
    // bottom: 0,
  },
  footerIcon: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#E07A5F',
    borderRadius: 10,
  },
  footerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footerBtn: {
    backgroundColor: '#E07A5F',
    padding: 20,
    fontWeight: 'bold',
    width: '85%',
    alignItems: 'center',
    borderRadius: 20,
  },
});

export default JobDetail;
