import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultListItem = ({ result }) => { 
    return (
        <View style={styles.container}>
            <Image source={{ uri: result.image_url }} style={styles.imageStyle}/>
            <Text style={styles.titleStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },  
    imageStyle: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5,
    },
    titleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },

});

export default ResultListItem;