import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Weekday from '../components/Weekday';

const WeeklyCalendar = () => {
    return (
        <View>
            {/* <FlatList /> */}
            <Weekday />
            <Weekday />
            <Weekday />
            <Weekday />
            <Weekday />
            <Weekday />
            <Weekday />
        </View>
    );
};

const styles = StyleSheet.create({});

export default WeeklyCalendar;