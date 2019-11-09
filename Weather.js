import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#485563", "#29323c"],
        title: "Thunderstorm",
        subtitle: "Today is Thunderstorm"
    },
    Drizzle: {
        iconName: "weather-pouring",
        gradient: ["#606c88", "#3f4c6b"],
        title: "Drizzle",
        subtitle: "Today is Drizzle"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#606c88", "#3f4c6b"],
        title: "Rain",
        subtitle: "Today is Rain"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#e6dada", "#274046"],
        title: "Snow",
        subtitle: "Today is Snow"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#616161", "#9bc5c3"],
        title: "Atmosphere",
        subtitle: "Today is Atmosphere"
    },
    Mist: {
        iconName: "weather-sunset",
        gradient: ["#215f00", "#e4e4d9"],
        title: "Mist",
        subtitle: "Today is Mist"
    },
    Smoke: {
        iconName: "weather-lightning-rainy",
        gradient: ["#efefbb", "#d4d3dd"],
        title: "Smoke",
        subtitle: "Today is Smoke"
    },
    Haze: {
        iconName: "weather-night",
        gradient: ["blue", "black"],
        title: "Haze",
        subtitle: "Today is Haze"
    },
    Dust: {
        iconName: "weather-partlycloudy",
        gradient: ["#e9d362", "#333333"],
        title: "Dust",
        subtitle: "Today is Dust"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["olive", "olive"],
        title: "Fog",
        subtitle: "Today is Fog"
    },
    Sand: {
        iconName: "weather-sunset-down",
        gradient: ["#3e5151", "#decba4"],
        title: "Sand",
        subtitle: "Today is Sand"
    },
    Ash: {
        iconName: "weather-sunset-up",
        gradient: ["#606c88", "#3f4c6b"],
        title: "Ash",
        subtitle: "Today is Ash"
    },
    Squall: {
        iconName: "weather-hurricane",
        gradient: ["#373b44", "#4286f4"],
        title: "Squall",
        subtitle: "Today is Squall"
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#bdc3c7", "#2c3e50"],
        title: "Tornado",
        subtitle: "Today is Tornado"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#005c97", "#363795"],
        title: "Clear",
        subtitle: "Today is Clear"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["gray", "gray"],
        title: "Clouds",
        subtitle: "Today is Clouds"
    }

}


export default function Weather({ temp, condition }) {
    return(
            <LinearGradient
          colors={weatherOptions[condition].gradient}
          style={styles.container}>
              <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
            <MaterialCommunityIcons 
            size={96} name={weatherOptions[condition].iconName} color="white"/>
            <Text style={styles.temp}>{temp}°</Text>
        </View>
        <View />
        <View style={{...styles.halfContainer, ...styles.textContainer}}>
<Text style={styles.title}>title: {weatherOptions[condition].title}</Text>
    <Text style={styles.subtitle}>subtitle: {weatherOptions[condition].subtitle}</Text>
        </View>
        </LinearGradient>
       
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color:"white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})