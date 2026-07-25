import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BooksScreen } from '../../features/books/screens/BooksScreen/BooksScreen';
import { AddBookScreen } from '../../features/books/screens/AddBooks/AddBookScreen';
import { SignIn } from '../../features/auth/screens/SignIn/SignIn';
import { SignUp } from '../../features/auth/screens/SignUp/SignUp';
import { ForgotPassword } from '../../features/auth/screens/ForgotPassword/ForgotPassword';
import { Verification } from '../../features/auth/screens/Verification/Verification';
import { NewPassword } from '../../features/auth/screens/NewPassword/NewPassword';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
        <Stack.Screen name="NewPassword" component={NewPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Books" component={BooksScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddBook" component={AddBookScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

