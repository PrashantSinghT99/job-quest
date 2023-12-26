import React from 'react';
import {View, Text, TouchableOpacity, Image,StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
const JobDetail = () => {
  //take the id then make request to job detail api
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Feather name={'arrow-left'} size={24} color="black" />
        <Feather name={'share-2'} size={24} color="black" />
      </View>
      <View style={styles.section1}>
        <Image  style={styles.tinyLogo} source={require('../../assets/job.jpg')} />
        <Text style={styles.bold}>Senior React Developer(Remote)</Text>
        <Text>ERP <Ionicons style={styles.locationIcon} name={'location-outline'} color='black'/> USA</Text>
      </View>
      <View style={styles.buttonList}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Qualifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Responsibilities</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section2}>
        <Text style={styles.bold}>About the job:</Text>
        <Text>Overview</Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          at nemo. Blanditiis, dolor corporis explicabo doloribus veniam dolorum
          itaque perspiciatis nostrum magni expedita molestias atque ratione
          laboriosam dolores cupiditate iusto!
        </Text>
      </View>
      <View style={styles.footer}>
        <Feather style={styles.footerIcon} name={'heart'} size={24} color="#E07A5F" />
        <TouchableOpacity style={styles.footerBtn}>
          <Text style={styles.footerText}>Apply for job</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:"space-between"
    },
    head:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        padding:10
    },
    section1:{
        flexDirection:'column',
        justifyContent:"center",
        alignItems:'center'
    },
    tinyLogo: {
      width: 50,
      height: 50,
      borderRadius: 20,
    },
    buttonList: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      button: {
        alignItems:'center',
        padding: 6,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#EBEBEB', 
        marginTop: 10,
        width:130
      },
      bold:{
        fontWeight:'bold',
        color:'black'
      },
      locationIcon:{
        width:4,
        height:4
      },
      section2:{
        padding:5,
        marginLeft:16,
        flexDirection:'column',
        marginBottom: 10,

      },
      footer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        margin:10,
        width:'95%',
      },
      footerIcon:{
        padding:10,
        borderWidth:2,
        borderColor:'#E07A5F',
        borderRadius:10
      },
      footerText:{
        color:'white',
      },
      footerBtn:{
        
        backgroundColor:'#E07A5F',
        padding:20,
        fontWeight:'bold',
        width:"85%",
        alignItems:'center',
        borderRadius:20,
      }
  });

export default JobDetail;
