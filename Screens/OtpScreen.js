import React, { Component } from 'react';
import { View,
    Text,
   StyleSheet,
TextInput,
Dimensions,
TouchableOpacity } from 'react-native';
import App from '../App';
const {width: WIDTH} = Dimensions.get('window')
export default class OtpScreen extends Component {

 static navigationOptions={
   header: null
 }
  render() {
    return (
     <View style={styles.backgroundContainer}>
     <View style={styles.inputContainer}>
     {/*Text input you have to convert it into otp place */}
       <TextInput keyboardType={'number-pad'} maxLength={1} style={styles.input} underlineColorAndroid='transparent'/>
       <TextInput keyboardType={'number-pad'} maxLength={1} style={styles.input} underlineColorAndroid='transparent'/>
       <TextInput keyboardType={'number-pad'} maxLength={1} style={styles.input} underlineColorAndroid='transparent'/>
       <TextInput keyboardType={'number-pad'} maxLength={1} style={styles.input} underlineColorAndroid='transparent'/>
     </View>
     <TouchableOpacity style={styles.btnLogin} onPress={()=>{this.props.navigation.navigate('Dashboard')}}>
       <Text style={styles.text}>Login</Text>
     </TouchableOpacity>
     <View style={{paddingTop:10}}>
       <TouchableOpacity>
         <Text style={{color:'blue'}}>
           Resend OTP
         </Text>
       </TouchableOpacity>
     </View>


     </View>
    );
  }
}

const styles = StyleSheet.create({
   backgroundContainer:{
      backgroundColor:'white',
       flex:1,
       width:null,
       height:null,
       alignItems: 'center',
   },


   input:{
     marginTop:120,
     height:50,
     width: 50,
     fontSize:50,
     flexDirection: 'row',
     backgroundColor:'rgba(0,0,0,0.35)',
     color:'black',
     marginHorizontal:15,
     justifyContent:'center',
     alignItems:"center"


   },
   inputContainer:{
    marginTop:20,flexDirection:'row',justifyContent:'center',
    alignItems: 'center',

   },

   outputContainer:{
     marginTop:10
   },

   btnEye:{
     position:'absolute',
     top:12,
     right:37
   },

   inputIcon:{
     position:'absolute',
     top:10,
     left:37
   },
   btnLogin:{
     width: WIDTH - 55,
     height:50,
     borderRadius: 25,
     backgroundColor:'rgba(222, 193, 99, 0.8)',
     justifyContent:'center',
     marginTop: 30,
   },
   text:{
     color:'black',
     fontWeight:'500',
     fontSize:16,
     textAlign:'center',


   }
});
