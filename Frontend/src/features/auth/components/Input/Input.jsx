import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { useState } from "react"
import { Ionicons } from '@expo/vector-icons'
import styles from "./styles"

export const Input = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    containerStyle,
    inputContainerStyle,
    inputStyle,
    ...props
}) => {
    const [isSecure, setIsSecure] = useState(secureTextEntry || false)

    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={[styles.inputContainer, inputContainerStyle]}>
                <TextInput
                    style={[styles.input, inputStyle]}
                    placeholder={placeholder}
                    placeholderTextColor="#8C8881"
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isSecure}
                    {...props}
                />
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => setIsSecure(!isSecure)}
                        style={styles.iconContainer}
                    >
                        <Ionicons name={isSecure ? "eye-off" : "eye"} size={22} color="#8C8881" />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}