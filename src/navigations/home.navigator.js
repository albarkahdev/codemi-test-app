import HomeScreen from '../screens/home';
import ScanQRScreen from '../screens/features/scanQR';
import {animationSlide} from './animation';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: animationSlide,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ScanQR" component={ScanQRScreen} />
    </Stack.Navigator>
  );
}
