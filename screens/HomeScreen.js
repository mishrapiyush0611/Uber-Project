import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-rn'

const HomeScreen = () => {
    return (
        <SafeAreaView style={{backgroundColor:"white",height:100}}>
            <View style={{padding:20}}>
                <Image
                    style={{
                        height: 100,
                        width: 100,
                        resizeMode:"contain"
                    }}
                    source={
                        {
                            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                        }
                    }
                >

                </Image>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: "blue"
    }
})