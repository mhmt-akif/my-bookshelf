import {View,Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export const BooksScreen=()=>{
    const navigation = useNavigation();
    return(
        <View>
            <Text>
                Books Screen
            </Text>
            <Button onPress={() =>navigation.navigate('AddBook')} title="Add Book" />
        </View>
    )
}