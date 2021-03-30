import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

/**
 * Function that is responsible for creating the SearchBar reusable component
 * for the application.
 * 
 * @returns The SearchBar reusable component
 * @author Mark Philips
 */
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={ styles.backgroundStyle }>
            <MaterialIcons name="search" style={ styles.iconStyle }/>
            <TextInput 
                placeholder="Search" 
                style={ styles.textinputStyle }
                autoCapitalize="none"
                autoCorrect={ false }
                value={ term }
                onChangeText={ onTermChange }
                onEndEditing={ onTermSubmit }/>
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#d3d4d8',
        height: 50,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    iconStyle: {
        margin: 5,
        color: 'black',
        fontSize: 40,
        alignSelf: 'center',
    },
    textinputStyle: {
        flex: 1,
        fontSize: 18,
    },
});

export default SearchBar;