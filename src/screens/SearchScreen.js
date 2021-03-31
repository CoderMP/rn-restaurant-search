import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    // State variables to track the user's search term 
    // and the pieces of state from the useResults hook
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults();

    return (
        <View>
            <SearchBar 
                term={ term } 
                onTermChange={ setTerm }
                onTermSubmit={ () => searchApi(term) }/>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;