import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome5, Ionicons } from '@expo/vector-icons' 

import Dice from './components/Dice'
import Settings from './components/Settings'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Dice" component={Dice} options={{
            tabBarIcon: ({color, size}) => {
              return <FontAwesome5 name="dice-d20" color={color} size ={size} />
            }
          }} />
          <Tab.Screen name="Settings" component={Settings} options={{
            tabBarIcon: ({color, size}) => {
              return <Ionicons name="ios-settings" color={color} size={size} />
            }
          }} />
        </Tab.Navigator>
        <StatusBar />
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
