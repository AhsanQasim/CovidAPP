import * as React from 'react';
import { Button, View,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import World from './components/World';
import Country from './components/Country';
import Favourites from './components/Favourites';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="World Statistics"
        screenOptions={{
          headerShown: true,
        }}>
        <Drawer.Screen name="World Statistics" component={World} />
        <Drawer.Screen
          name="Country Statistics"
          component={Country}
        />
        <Drawer.Screen
          name="Favourite Countries"
          component={Favourites}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}