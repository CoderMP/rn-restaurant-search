import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    // State variables to track the current search term and 
    // (possible) results from the API call
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    /**
     * Function that is responsible for making an async call to the API
     */
    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', { 
                params: { 
                    term: term,
                    location: 'toronto',
                    limit: 50
                }
            });
    
            // Set any results that are retrieved from the API call to the state
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMsg('Something went wrong');
        }
    };

    return (
        <View>
            <SearchBar 
                term={ term } 
                onTermChange={ setTerm }
                onTermSubmit={ searchApi }/>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;