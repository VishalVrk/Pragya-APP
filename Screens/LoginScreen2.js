 import React, { Component } from 'react';
 import { View,
     Text,
    StyleSheet,
    Image,
ImageBackground,
TextInput,
Dimensions,
TouchableOpacity } from 'react-native';
import bgImage from '../assets/background.jpg';
import logo from '../assets/logo.png';
import Icon from 'react-native-vector-icons/Ionicons';
import App from '../App';
 const {width: WIDTH} = Dimensions.get('window')
 export default class LoginScreen2 extends Component {
   constructor()
   {
     super()
     this.state={
       showPass: true,
       press: false
     }
   }

   showPass= ()=>{
     if(this.state.press == false){
       this.setState({showPass:false, press:true})
     }
     else{
          this.setState({showPass: true, press:false})
     }
   }

  static navigationOptions={
    header: null
  }
   render() {
     return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
      <Image  source={logo} style={styles.logo}/>
      <Text style={styles.logoText}></Text>
      </View>
      <View style={styles.inputContainer}>
      <Icon name={ 'ios-contact' } size={28} color={'rgba(255,255,255,0.7)'}style={styles.inputIcon}/>
        <TextInput  style={styles.input} placeholder={'Username / Telephone Number'} placeholderTextColor={'rgba(255,255,255,0.7)'} underlineColorAndroid='transparent'/>
      </View>
      <View style={styles.outputContainer}>
      <Icon name={ 'ios-finger-print' } size={28} color={'rgba(255,255,255,0.7)'}style={styles.inputIcon}/>
        <TextInput  style={styles.input} placeholder={'Password'} secureTextEntry={this.state.showPass} placeholderTextColor={'rgba(255,255,255,0.7)'} underlineColorAndroid='transparent'/>
        <TouchableOpacity style={styles.btnEye}
        onPress={this.showPass.bind(this)}>
        <Icon name={this.state.press==false ? 'ios-eye': 'ios-eye-off'} size={26} color={'rgba(255,255,255,0.7)'}/>
      </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnLogin} onPress={()=>{this.props.navigation.navigate('Otp');}}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>


      </ImageBackground>
     );
   }
 }

 const styles = StyleSheet.create({
    backgroundContainer:{

        flex:1,
        width:null,
        height:null,
        justifyContent:'center',
        alignItems: 'center',
    },

    logo:{

        width:120,
        height:120

    },

    logoContainer:{
      alignItems:'center',
      marginBottom: 50
    },

    logoText:{
      color:'white',
      fontSize:20,
      fontWeight:'500',
      marginTop:10,
      opacity:0.5
    },

    input:{
      width: WIDTH - 55,
      height:50,
      borderRadius: 45,
      fontSize:16,
      paddingLeft: 45,
      backgroundColor:'rgba(0,0,0,0.35)',
      color:'rgba(255,255,255,0.7)',
      marginHorizontal:25
    },

    inputContainer:{
      marginTop:10

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
      marginTop: 20
    },
    text:{
      color:'white',
      fontWeight:'500',
      fontSize:16,
      textAlign:'center',


    }
 });
