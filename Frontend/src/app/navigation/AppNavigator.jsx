import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { BooksScreen } from '../../features/books/screens/BooksScreen';
import { AddBookScreen } from '../../features/books/screens/AddBookScreen';
import { SignIn } from '../../features/auth/screens/SignIn/SignIn';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Books" component={BooksScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddBook" component={AddBookScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

