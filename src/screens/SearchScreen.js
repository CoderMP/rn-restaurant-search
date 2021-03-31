import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    // State variables to track the user's search term 
    // and the pieces of state from the useResults hook
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults();

    /**
     * Helper function that filtering the results from the Yelp API
     * 
     * @param {string} price The price to filter the results by ('$', '$$', '$$$')
     * @returns {boolean} True if the price of the current result matches the given price param
     * 
     * @author Mark Philips
     */
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <>
            <SearchBar 
                term={ term } 
                onTermChange={ setTerm }
                onTermSubmit={ () => searchApi(term) }/>

            {errorMsg ? <Text>{errorMsg}</Text> : null}

            <ScrollView>
                <ResultsList header="Cost Effective" results={ filterResultsByPrice('$') }/>
                <ResultsList header="Bit Pricier"    results={ filterResultsByPrice('$$') }/>
                <ResultsList header="Big Spender"    results={ filterResultsByPrice('$$$') }/>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;