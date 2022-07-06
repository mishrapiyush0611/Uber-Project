import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native'
import React from 'react'
import NavOptions from '../Components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"


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
                <GooglePlacesAutocomplete
                 onFail={(error) => console.error(error)}
                query={{
                    key:"AIzaSyDQP5QwW8QzWl1R9QMac5L0I0cKHAlc1F4",
                    language:"en"
                }}
                requestUrl={{
                    url:
                    "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api",
                    useOnPlatform: "web",
                  }} 
                placeholder='Where From?'
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                ></GooglePlacesAutocomplete>
                <NavOptions></NavOptions>
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