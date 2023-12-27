import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  // TouchableWithoutFeedback,
  // Keyboard
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {buttonData} from '../../assets/data';

const SearchSection = ({navigation}) => {
  const [query, setQuery] = useState('');

  const handleQuerySearch = () => {
    if (query) {
      navigation.navigate('JobListing', {query: query});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingOne}>Hello Prashant</Text>
      <Text style={styles.headingTwo}>Find your perfect job</Text>
      {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
      <View style={styles.search}>
        <TextInput
          editable
          maxLength={40}
          style={styles.searchBox}
          placeholder="What are you looking for?"
          value={query}
          onChangeText={text => setQuery(text)}
        />
        <TouchableOpacity onPress={handleQuerySearch}>
          <FontAwesome
            name={'search'}
            size={24}
            color="black"
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      {/* </TouchableWithoutFeedback> */}
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
  container: {
    padding: 8,
  },
  headingOne: {
    fontSize: 18,
  },
  headingTwo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBox: {
    padding: 8,
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
    alignItems: 'center',
    padding: 4,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#EBEBEB',
    marginTop: 10,
    width: '30%',
  },
});
export default SearchSection;
