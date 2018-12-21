import React, { Component } from 'react';
import { View, 
    Text,
Image } from 'react-native';

class Topics extends Component {

  render() {
    return (
        <View style={{width:this.props.width/2 - 30,height:this.props.width/2-30,borderWidth:0.5,borderColor:'#dddddd',marginBottom:10,borderRadius:10,backgroundColor:'white'}}>
        <View style={{flex:1}}>
        <Image
       style={{flex:1,width:null,height:null, resizeMode:'cover',borderTopRightRadius:10,borderTopLeftRadius:10}}
        source={require('../assets/physics.jpg')}
        />  
        </View>
        <View style={{flex:1, alignItems:'flex-start',paddingLeft:10,justifyContent:'center'}}>
        <Text
        style={{fontSize:8, fontWeight:'500'}}
        >{this.props.chapter}</Text>
        <Text
        style={{fontSize:8,fontWeight:'500'}}
        >{this.props.topic}</Text>
        

        </View>
           </View>
    );
  }
}

export default Topics;
