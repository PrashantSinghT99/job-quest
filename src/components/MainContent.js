import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {buttonData} from '../../assets/data';
const MainContent = () => {
  return (
    <View style={styles.maincontent}>
      <Text style={styles.textOne}>Hello Prashant</Text>
      <Text style={styles.textTwo}>Find your perfect job</Text>
      <View style={styles.search}>
        <TextInput
          editable
          maxLength={40}
          style={styles.searchBox}
          placeholder="What are you looking for?"
        />
        <FontAwesome
          name={'search'}
          size={24}
          color="black"
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.buttonList}>
        {buttonData.map(button => (
          <TouchableOpacity style={styles.button} key={button.id}>
            <Text style={styles.buttonText}>{button.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontent: {
    padding: 20,
  },
  textOne: {
    fontSize: 20,
  },
  textTwo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBox: {
    padding: 10,
    backgroundColor: '#EBEBEB',
    borderRadius: 20,
    marginTop: 15,
    width: '85%',
    fontSize: 15,
  },
  searchIcon: {
    padding: 10,
    marginTop: 15,
  },
  buttonList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    alignItems:'center',
    padding: 8,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#EBEBEB', 
    marginTop: 10,
    width:'30%'
  },
});
export default MainContent;
