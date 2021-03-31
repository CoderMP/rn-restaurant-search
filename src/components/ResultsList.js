import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ResultsListItem from '../components/ResultListItem';

/**
 * Reusable component that shows a list of results from the Yelp API
 * 
 * @author Mark Philips
 */
const ResultsList = ({ header, results }) => {
    return (
        <View style={styles.container}>  
            <Text style={styles.headerStyle}>{header}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={ results }
                keyExtractor={ (result) => result.id }
                renderItem={({ item }) => {
                    return <ResultsListItem result={ item }/>
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    headerStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
});

export default ResultsList;