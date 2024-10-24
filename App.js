import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './screens/Home';
import Details from './screens/Details';
import Favorites from './screens/Favorites';
import List from './screens/List';
import Settings from './screens/Settings';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const RenderDrawer = () => {
  return ( 
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="PokeDex" component={List} />
    <Drawer.Screen name="Favorites" component={Favorites} />
    <Drawer.Screen name="Settings" component={Settings} />
  </Drawer.Navigator>);
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppHome">   
        <Stack.Screen name="App Home" component={RenderDrawer} options={{headerShown: false}}/>
        <Stack.Screen name="List" component={List} options={{headerShown: false}}/>
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
