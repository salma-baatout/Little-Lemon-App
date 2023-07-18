import * as React from "react";
import {Alert, Image, StyleSheet, Text, TextInput, View} from "react-native";
import Button from "../components/Button";


const Onboarding = () => {
    return(
        <view style={styles.container}>
            <header>
                <Text style={styles.title}>Little Lemon
                </Text>

                <Image 
                style={styles.logo}
                source={require('../assets/logo.png')} />
            </header>

        </view>
    );

};
export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "white",
      },
      title: {
        color: "#333333",
        textAlign: "center",
        fontSize: 20,
      },
      logo: {
        height: 100,
        width: 300,
        resizeMode: "contain",
        marginBottom: 32,
      },
      
})


