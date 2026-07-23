import { View, Text, TouchableOpacity } from "react-native"
import { Input } from "../../components/Input/Input"
import { Button } from "../../../../shared/components/Button/Button"
import styles from "./styles"
import { useState } from "react"

export const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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

            <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPasswordText}>Şifremi unuttum</Text>
            </TouchableOpacity>

            <Button title="Giriş Yap" onPress={() => console.log("Giriş Yapıldı")} />
        </View>
    )
}