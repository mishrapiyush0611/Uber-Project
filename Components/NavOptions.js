import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-web'

const data=[
    {
        id:"123",
        title:"Book Ride",
        image:"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png"
        
    },
    {
        id:"124",
        title:"Order food",
        image:"https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png"
    }
]
const NavOptions = () => {
  return (
    <View>
     <FlatList
     data={data}
     horizontal
     keyExtractor={(item)=>item.id}
     renderItem={({item})=>
    <TouchableOpacity style={styles.icon} >
        <Image source={{uri:item.image}} style={{height:100,width:100,resizeMode:"contain"}}></Image>
        <Text style={styles.text}>{item.title}</Text>
     </TouchableOpacity>
  }>

     </FlatList>
    </View>
  )
}

export default NavOptions

const styles = StyleSheet.create({

    icon:{
        padding:20,
        paddingLeft:30,
        paddingTop:20,
        paddingBottom:30,
        margin:15,
        backgroundColor:"rgb(240, 239, 237)"
    },
    text:{
        marginTop:10,
        fontSize:14,
        fontWeight:"bold",
        fontFamily:"sans-serif"
    }
})