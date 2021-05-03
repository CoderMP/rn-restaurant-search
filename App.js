import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultDetailScreen from './src/screens/ResultDetailScreen';

// Declare and initialize the RN StackNavigator
const Stack = createStackNavigator();

/**
 * Function that is responsible for handling app navigation
 * @returns 
 */
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={ SearchScreen } options={{ title: 'Restaurant Search' }}/>
        <Stack.Screen name="Detail" component={ ResultDetailScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;