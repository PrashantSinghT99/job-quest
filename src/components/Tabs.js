import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const TabButton = ({name, activeTab, setActiveTab}) => (
  <TouchableOpacity style={styles.btn(name, activeTab)} onPress={setActiveTab}>
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);

const Tabs = ({tabs, activeTab, setActiveTab}) => {
//   console.log(tabs, activeTab, setActiveTab);
  return (
    <View>
      <FlatList
        data={tabs}
        renderItem={({item}) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            setActiveTab={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: 6}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 6,
  },
  btn: (name, activeTab) => ({
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: name === activeTab ? '#312651' : '#F3F4F8',
    borderRadius: 16,
    marginLeft: 2,
    shadowColor: 'F3F4F8',
  }),
  btnText: (name, activeTab) => ({
    fontSize: 12,
    color: name === activeTab ? 'white' : 'gray',
  }),
});

export default Tabs;
