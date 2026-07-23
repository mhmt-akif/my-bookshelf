import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export const AddBookScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>
                Add Book Screen
            </Text>
            <Button onPress={() => navigation.navigate('SignIn')} title=" Book Screen" />
        </View>
    )
}


