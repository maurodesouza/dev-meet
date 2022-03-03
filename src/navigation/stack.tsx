import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dashboard, Events } from '../screens'

const { Navigator, Screen } = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{
        headerShown: false,
      }}>
        <Screen name="dashboard" component={Dashboard} />
        <Screen name="events" component={Events} />
      </Navigator>
    </NavigationContainer>
  )
}

export { StackNavigation }
