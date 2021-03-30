import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    // State variable to track the current search term
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <View>
            <SearchBar 
                term={ searchTerm } 
                onTermChange={newSearchTerm => setSearchTerm(newSearchTerm)}
                onTermSubmit={() => console.log('term was submitted')}/>
            <Text>Search Screen</Text>
            <Text>{searchTerm}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;