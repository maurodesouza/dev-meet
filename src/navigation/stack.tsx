import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as screens from '../screens'

const { Navigator, Screen } = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Navigator
      initialRouteName="initial"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent'
        }
      }}>
        {Object.entries(screens).map(([screen, View]) => {
          const name = screen.toLocaleLowerCase()

          return <Screen key={name} name={name} component={View} />
        })}
      </Navigator>
    </NavigationContainer>
  )
}

export { StackNavigation }
