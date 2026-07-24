import { View, Text, TouchableOpacity, Alert } from "react-native"
import { Input } from "../../components/Input/Input"
import { Button } from "../../../../shared/components/Button/Button"
import styles from "./styles"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { authService } from "../../services/authService"
export const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)
    //giriş kontrolü yapılıyor
    const handleSignIn = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Uyarı", "Lütfen, e-posta ve şifrenizi giriniz!")
            return
        }
        setLoading(true)

        try {
            //servis üzerinden istek atılıyor
            const response = await authService.signInWithPassword(email, password)
            console.log("Giriş başarılı Token/User:", response.user.id)
            Alert.alert("Tebrikler", "Giriş Başarılı!")
            navigation.navigate("Books")


        } catch (error) {
            console.log("Girişte hata!", error.message)
        } finally {
            setLoading(false)

        }
    }

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

            <Button title="Giriş Yap" onPress={handleSignIn} />
        </View>
    )
}

//