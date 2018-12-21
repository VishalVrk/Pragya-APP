import React from 'react';
import { StyleSheet, 
    Text, 
    View,
    ScrollView,
    Image,
    Dimensions
 } from 'react-native';

 import Subjects from './Subjects';

 import Topics from './Topics';

 const {height,width}= Dimensions.get('window')

 class Layout extends React.Component {
     render(){
         return(
             <ScrollView
             scrollEventThrottle={16}
             >
             <View style={{flex:1, backgroundColor:'#hsla(186, 50%, 50%, 0.38)', paddingTop:20,flexWrap:"wrap"}}>
             <Text style={{fontSize:24, fontWeight:'700',paddingHorizontal: 30,marginTop:30}}>Recommended</Text>
             <View style={{height:200, marginTop:20}}>
             <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false}
             
             >

             <Subjects
                 imageUri={require('../assets/maths.jpg')}
                 name="Maths"
             />
              <Subjects
                 imageUri={require('../assets/physics.jpg')}
                 name="Phyics"
             />
              <Subjects
                 imageUri={require('../assets/chemistry.jpg')}
                 name="Chemistry"
             />
             </ScrollView>
             </View>
             <View style={{
                     marginTop:20,
                     paddingHorizontal:20,
             }}>
                 <Text style={{
                     fontSize:24,
                     fontWeight:'700',
                     paddingHorizontal:10
                    
                 }}>
                     Introducing Pragya learning app
                 </Text>
                 <ScrollView
                 horizontal={true}
                 showsHorizontalScrollIndicator={false}
                 >
                 <View style ={{width: width-40, marginTop:20, height:200}}>
                 <Image style ={{flex:1,height:null,width:null, resizeMode:'cover',borderRadius:5,borderWidth:1,borderColor:"#dddddd"}} 
                 source={require('../assets/physics.jpg')}
                 ></Image>   
                 </View>
                 <View style ={{width: width-40, marginTop:20, height:200}}>
                 <Image style ={{flex:1,height:null,width:null, resizeMode:'cover',borderRadius:5,borderWidth:1,borderColor:"#dddddd"}} 
                 source={require('../assets/chemistry.jpg')}
                 ></Image>   
                 </View>
                 <View style ={{width: width-40, marginTop:20, height:200}}>
                 <Image style ={{flex:1,height:null,width:null, resizeMode:'cover',borderRadius:5,borderWidth:1,borderColor:"#dddddd"}} 
                 source={require('../assets/maths.jpg')}
                 ></Image>   
                 </View>
                 </ScrollView>
                 <View style={{marginTop:40}}>
                 <Text
                 style={{fontSize:24,fontWeight:'700',paddingHorizontal:10}}
                 >Come lets enjoy learning </Text>
                 <View style={{marginTop:20,flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between'}}>
                 <Topics width={width}
                     chapter= "Relations and Functions"
                     topic="Maths IIT-JEE"
                 />
                 <Topics width={width}
                     chapter= "Inverse Trigonometric Functions"
                     //name not coming correctly
                     topic="Maths IIT-JEE"
                 />
                 <Topics width={width}
                     chapter='Inverse Trigonometric Functions'
                     topic="Maths IIT-JEE"
                 />
                 <Topics width={width}
                     chapter= "Determinants"
                     topic="Maths IIT-JEE"
                 />
                        </View>
                            </View>
                                </View>
                                     </View>
             </ScrollView>
             
             
         );
     }
 }
 export default Layout;