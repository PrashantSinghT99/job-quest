import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import HomePage from './src/components/HomePage';
import JobDetail from './src/components/JobDetail';
import JobListing from './src/components/JobListing';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyContextProvider} from './src/context/MyContextProvider';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <MyContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage">
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="JobDetail" component={JobDetail} />
          <Stack.Screen name="JobListing" component={JobListing} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContextProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#F6F6F6',
  //   fontFamily: 'Roboto-Black',
  // },
});

export default App;
