import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Weekday = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.weekdayTextStyle}>Monday</Text>
            <Text>8AM - 9PM</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        textAlign: 'center',
        alignSelf: 'flex-start',
        padding: 4,
    },
    weekdayTextStyle: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
});

export default Weekday;