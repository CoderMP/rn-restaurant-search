import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryPill = ({ category }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{category}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(35,47,52, 0.12)',
        borderRadius: 15,
        alignSelf: 'flex-start',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
    },
    textStyle: {
        margin: 4,
    },
});

export default CategoryPill;