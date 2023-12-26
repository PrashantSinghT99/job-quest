import React, {useContext, useEffect} from 'react';
import PopularJobs from './PopularJobs';
import SearchSection from './SearchSection';
import {StyleSheet, View, Text} from 'react-native';
import Header from './Header';
import useFetch from '../hook/useFetch';
import MyContext from '../context/MyContextProvider';
const HomePage = () => {
  const {updateData} = useContext(MyContext);
  const {data, isLoading, error} = useFetch('search', {
    query: 'React developer',
    num_pages: '1',
  });
  useEffect(() => {
    updateData(data);
  }, [data, updateData]);

  return (
    <View style={styles.homePageContainer}>
      <Header />
      <SearchSection />
      <PopularJobs isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  homePageContainer: {
    flex: 1,
  },
});

export default HomePage;
