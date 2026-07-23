import { View, Text, TouchableOpacity } from "react-native"
import { Input } from "../../components/Input/Input"
import { Button } from "../../../../shared/components/Button/Button"
import styles from "./styles"
import { useState } from "react"
import {useNavigation} from "@react-navigation/native"

export const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <Input
                label="E-posta"
                placeholder="sen@ornek.com"
                value={email}
                onChangeText={setEmail}
            />
            <Input
                label="Şifre"
                placeholder="••••••••"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Text>This</Text>
            <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>Şifremi unuttum</Text>
            </TouchableOpacity>

            <Button title="Giriş Yap" onPress={() => navigation.navigate("Books")} />
        </View>
    )
}

//