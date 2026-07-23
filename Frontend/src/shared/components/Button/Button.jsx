import { TouchableOpacity, Text } from "react-native"
import styles from "./styles"

export const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
