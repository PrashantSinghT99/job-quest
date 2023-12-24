import React from 'react';
import Header from './src/components/Header';
import {StyleSheet, View, Image} from 'react-native';
import Body from './src/components/Body';
import MainContent from './src/components/MainContent';
function App() {
  return (
    <View style={styles.container}>
      <Header />
      <MainContent/>
      <Body/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F6F6F6',
    fontFamily: 'Roboto-Black'
  },
});

export default App;
