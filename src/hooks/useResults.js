import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

/**
 * Custom hook that is responsible for handling the logic
 * for using the Yelp API code
 * 
 * @returns The searchApi function, results, and error message pieces of state
 * 
 * @author Mark Philips
 */
export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    /**
     * Function that is responsible for making an async call to the Yelp API
     * 
     * @author Mark Philips
     */
    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', { 
                params: { 
                    term: searchTerm,
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

    // Call searchApi when a component is first rendered
    useEffect(() => { searchApi('pasta'); }, []); // Default search value

    // Return the searchApi function and results and errorMsg pieces of state
    return [searchApi, results, errorMsg];
};