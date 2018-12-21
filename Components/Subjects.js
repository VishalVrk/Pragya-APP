import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

class Subjects extends Component {
  render() {
    return (
        <TouchableOpacity 
        style={{height:180, width:150,marginLeft:10,backgroundColor: '#ffffff', borderRadius:10,borderWidth:0.5,borderColor:"#dddddd"}}>
        <View style ={{flex:2,borderRadius:10}}>
       <Image source={this.props.imageUri}
           style={{flex:1,width:null,height:null, resizeMode:"cover",borderTopLeftRadius:10,borderTopRightRadius:10}}></Image>
        </View>
       <View style ={{flex:1, paddingLeft:10, paddingTop:10,alignItems:'flex-start',justifyContent:"space-around"}}>
           <Text>{this.props.name}</Text>
       </View>
        </TouchableOpacity>
    );
  }
}

export default Subjects;
