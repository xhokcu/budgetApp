import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { NativeBaseProvider, Text, Box, HStack, VStack} from 'native-base';

// Components
import HomeScreen from './Components/HomeScreen/HomeScreen';
import OrderScreen from './Components/OrderScreen/OrderScreen';
import ProfileScreen from './Components/ProfileScreen/ProfileScreen';
 
//  Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Icons
import { Ionicons } from '@expo/vector-icons';


export default function App() {

const Tab = createBottomTabNavigator();

const data =[
        {
            Name: "Beril",
            LastName: "Evliyaoğlu",
            Age: "23",
            City:  "İstanbul"
        },
        {
            Name: "Lal",
            LastName: "Ütün",
            Age: "23",
            City:  "İstanbul"
        },
        {
            Name: "Cemre",
            LastName: "Yeşinnar",
            Age: "22",
            City:  "İstanbul"
        },
]

  return (
    <NativeBaseProvider>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({size, color}) => (
                            <Ionicons name="home" size={20} color="#4c4c4c"/>
                        )
                    }}
                />
                <Tab.Screen 
                    name="Order" 
                    component={OrderScreen}
                    options={{
                        tabBarLabel: "Order",
                        tabBarIcon: ({size, color}) => (
                            <Ionicons name="reorder-four-outline" size={20} color="#4c4c4c"/>
                        )
                    }}
                />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: "Profile",
                        tabBarIcon: ({size, color}) => (
                            <Ionicons name="person-outline" size={20} color="#4c4c4c"/>
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    padding: 10,
    borderColor: '#9c5a5a' ,
    borderWidth: 1,
    borderRadius: 10,
  }
});
