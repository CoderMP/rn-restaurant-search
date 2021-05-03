import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ResultsListItem from '../components/ResultListItem';

/**
 * Reusable component that shows a list of results from the Yelp API
 * 
 * @author Mark Philips
 */
const ResultsList = ({ header, results }) => {
    // Passing the Navigation Prop directly to ResultList since it is a deeply nested component
    const navigation = useNavigation();

    // Null check to ensure that any empty lists aren't rendered
    if (!results.length) { return null; }

    return (
        <View style={styles.container}>  
            <Text style={styles.headerStyle}>{header}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={ results }
                keyExtractor={ (result) => result.id }
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
                            <ResultsListItem result={ item }/>
                        </TouchableOpacity>
                    )
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