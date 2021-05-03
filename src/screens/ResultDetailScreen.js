import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp';
import CategoryPill from '../components/CategoryPill';
import WeeklyCalendar from '../components/WeeklyCalendar';

const ResultDetailScreen = ({ navigation, route }) => {
    const id = route.params.id;
    const [result, setResult] = useState(null);
    const categoriesList = [];
    const [hours, setHours] = useState({});

    /**
     * Helper function that is responsible for retrieving the specific
     * result via the Yelp API
     * 
     * @author Mark Philips
     */
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    /**
     * Helper function that is responsible for extracting the categories from the JSON response
     * 
     * @param {array} categories The list of categories
     * 
     * @author Mark Philips
     */
    const extractCategories = (categories) => {
        for (var i = 0; i < categories.length; i++) {
            categoriesList.push(categories[i].title);
        }

        //console.log(result);
    };

    const extractHours = (openHours) => {
        for (var i = 0; i < openHours.length; i++) {
            var open = openHours[i].start;
            var close = openHours[i].end;
            var weekday = openHours[i].day;

            setHours(...hours, {weekday: weekday, open: open, close: close})
            console.log(`Open ${openHours[i].start} to ${openHours[i].end}`);
        }
    };

    // Run the getResult function only once 
    useEffect(() => { getResult(id); }, []);

    // Null check for the result so that nothing is returned until the result is not null
    if (!result) { 
        return null 
    } else { 
        //extractCategories(result.categories); 
        //extractHours(result.hours[0].open);
    }

    return (
        <View>
            <Text style={styles.headerStyle}>{result.name}</Text>
            {/* <FlatList 
                horizontal={true}
                style={styles.pillStyle}
                data={result.categories}
                keyExtractor={(categories) => categories.alias}
                renderItem={(categories) => {
                    return <CategoryPill category={categories.title}/>
                }}/> */}
            <Text style={styles.subheaderStyle}>Contact Information</Text>

            <View style={styles.infoItemStyle}>
                <Text style={styles.infoLabelStyle}>Address: </Text>
                <Text>{result.location.address1}, {result.location.city}, {result.location.country}</Text>
            </View>

            <View style={styles.infoItemStyle}>
                <Text style={styles.infoLabelStyle}>Phone: </Text>
                <Text>{result.display_phone}</Text>
            </View>

            <View style={styles.infoItemStyle}>
                <Text style={styles.infoLabelStyle}>Currently </Text>
                {result.hours[0].is_open_now ? <Text style={styles.greenText}>OPEN</Text> : <Text style={styles.redText}>CLOSED</Text>}
            </View>
            {/* <View style={styles.infoItemStyleAlt}>
                <Text style={styles.infoLabelStyle}>Hours: </Text>
                <WeeklyCalendar />
            </View> */}
            <FlatList 
                data={result.photos} 
                keyExtractor={(photo) => photo} 
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.imageStyle}/>
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    pillStyle: {
        alignSelf: 'center',
    },
    imageStyle: {
        height: 200,
        width: 300,
    },
    subheaderStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    infoLabelStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoItemStyle: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    infoItemStyleAlt: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    greenText: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
    },
    redText: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
    },
});

export default ResultDetailScreen;