import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.barBackground}>
            <Text>Search Bar</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    barBackground: {
        backgroundColor: '#d3d4d8',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 15,
    }
});

export default SearchBar;