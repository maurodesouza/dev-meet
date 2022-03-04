import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard, Events, Event } from '../screens'

const { Navigator, Screen } = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent'
        }
      }}>
        <Screen name="dashboard" component={Dashboard} />
        <Screen name="events" component={Events} />
        <Screen name="event" component={Event} />
      </Navigator>
    </NavigationContainer>
  )
}

export { StackNavigation }
