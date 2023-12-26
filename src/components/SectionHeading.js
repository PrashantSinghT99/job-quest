import React from 'react'
import { StyleSheet, View ,Text} from 'react-native'

const SectionHeading = ({heading1,heading2}) => {
  return (
    <View style={styles.bodyHeading}>
    <Text style={styles.popular}>{heading1}</Text>
    <Text style={styles.showAll}>{heading2}</Text>
  </View>
  )
}
const styles=StyleSheet.create({
    bodyHeading: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
      },
      popular: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
      },
      showAll:{
        fontSize: 12,
      }
})
export default SectionHeading