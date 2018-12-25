import React, { Component } from 'react';
import { View, 
          Text,
          ImageBackground,
        TextInput,
      TouchableOpacity,
      Animated,
      Dimensions,
    Image} from 'react-native';

import * as Animatable from 'react-native-animatable';
//import {Icon} from 'native-base';

const SCREEN_HEIGHT=Dimensions.get('window').height

class LoginScreen extends Component {

    static navigationOptions={
      header: null
    }

    componentWillMount(){
      this.loginHeight = new Animated.Value(150)
    }

    increaseHeightOfLogin = ()=>{
      Animated.timing(this.loginHeight,{
        toValue:SCREEN_HEIGHT,
        duration:500
      }).start(()=>{
        this.refs.textInputMobile.focus()
      })

    }

   render() {

    const headerTextOpacity = this.loginHeight.interpolate({

      inputRange:[150,SCREEN_HEIGHT],
      outputRange:[1,0]

    })

    const marginTop= this.loginHeight.interpolate({

      inputRange:[150,SCREEN_HEIGHT],
      outputRange:[25,100]

    })

    const headerBackArrowOpacity= this.loginHeight.interpolate({
    //this is not currently used there is an issue importing the fonts
      inputRange:[150,SCREEN_HEIGHT],
      outputRange:[0,1]

    })


  return (
      <View style={{flex:1}}>
    
      <Animated.View style={{
      position:'absolute',
      height:60,
      width:60,
      ZIndex:100,
      marginTop:60,
      paddingHorizontal:25}}
      >
      <TouchableOpacity
      onPress={()=> this.decreaseHeightOfLogin()}
      >
      
      </TouchableOpacity>

      {/*Must include the icon here */}
      {/*<Icon name="md-arrow-back" style={{ color: 'black' }} />*/}

      
  
  
      </Animated.View>
  
    
       {/* Login Screen Background */}
      <ImageBackground source={require('../assets/bg1.jpg')} style={{flex:1}}>

      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          
          <Animatable.View 
          animation="zoomIn" iterationCount={1}
          style={{backgroundColor:'white',height:100,width:100,alignItems:"center",justifyContent:'center',borderRadius:100}}>
         <Image source={require('../assets/back.png')}
           style={{width:40,height:40}}
         />
          </Animatable.View>
          </View>

          <Animatable.View animation="slideInUp" iterationCount={1}>

            <Animated.View style={{
              height:this.loginHeight,
              backgroundColor:'white'
            }}>
              <Animated.View style={{
                opacity:headerTextOpacity,//animated
                alignItems:'flex-start',
                paddingHorizontal:25,
                marginTop: marginTop//animate
              }}>
                <Text style={{fontSize:24}}>
                  Let's Start Learning
                </Text>
              </Animated.View>
              <TouchableOpacity
              onPress={()=> this.increaseHeightOfLogin()}>
                  

                <View style={{
                  marginTop:25,//animated
                  paddingHorizontal:25,
                  flexDirection:'row'

                }}>
                <Image
                //Dynamically change the country with isd code
                  source={require('../assets/india.png')}
                  style={{ 
                  height:25,
                  width:25
                  }}
                />
                <View 
                pointerEvents='none'
                style={{
                  flexDirection:'row',
                  flex:1,
                }}>
                <Text style={{
                  fontSize:20,
                  paddingHorizontal:10
                }}>+91</Text>

                {/* enter your mobile number */}
                <TextInput
                  ref="textInputMobile"
                  style={{
                  flex:1, 
                  fontSize:20,
                  }}
                  placeholder='Enter your mobile number'
                  underlineColorAndroid='transparent'
                />
                </View>

                </View>
              </TouchableOpacity>
            </Animated.View>
          </Animatable.View>
        <View>
          <View style={{
            height:70,
            backgroundColor:'white',
            alignItems:'center',
            justifyContent:'center',
            borderTopColor:'#e8e8ec',
            borderTopWidth:1,
            paddingHorizontal:25
          }}>

        <Text style={{
          color:'#5a7fdf',
          fontWeight:'bold'
        }}>
          or connect using a social account
        </Text>

          </View>
      </View>
          </ImageBackground>
          </View>
    );
  }
}



export default LoginScreen;
