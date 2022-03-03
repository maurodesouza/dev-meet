import { StatusBar } from 'expo-status-bar';

import { StackNavigation } from './src/navigation'

export default function App() {
  return (
    <>
      <StackNavigation />
      <StatusBar style="auto" />
    </>
  );
}
