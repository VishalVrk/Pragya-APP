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
  constructor(props) {
       super(props);

       this.state = {
         otp:""
       };
     }
 static navigationOptions={
   header: null
 }
  render() {
    function otpCheck(otp,number,obj){
      fetch('https://control.msg91.com/api/verifyRequestOTP.php?authkey=240886A8aUQwX2ak5bb4c117&mobile=' + number + '&otp='+otp, {
      method: 'POST',
      "async": true,
      "crossDomain": true,
      headers: {},

      }).then(response => response.json())
      .then(data =>{
        if(data.type==='success'){
          obj.props.navigation.navigate('Home',{number:number,});
        }
      });
    }
    const { navigation } = this.props;
    const number = navigation.getParam('number', 'err number');
    return (
     <View style={styles.backgroundContainer}>
     <View style={styles.inputContainer}>
     {/*Text input you have to convert it into otp place */}
       <TextInput style={{height:100}} placeholder='enter OTP' onChangeText={(text)=> this.setState({otp: text})}></TextInput>
     </View>
     <TouchableOpacity style={styles.btnLogin} onPress={()=>{otpCheck(this.state.otp,number,this);}}>
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
