import { View, Text, TouchableOpacity, Alert } from "react-native"
import { Input } from "../../components/Input/Input"
import { Button } from "../../../../shared/components/Button/Button"
import { Footer } from "../../components/Footer/Footer"
import styles from "./styles"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { authService } from "../../services/authService"
import { Header } from "../../../../shared/components/Header/Header"
import Entypo from '@expo/vector-icons/Entypo';
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
            Alert.alert("Hata", error.message)
        } finally {
            setLoading(false)

        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Header leftIcon={"arrow-left"} onBackPress={() => navigation.goBack()} />

                <View style={styles.avatarContainer}>
                    <Entypo name="book" size={28} color="#8C491A" />
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Tekrar hoş geldin</Text>
                    <Text style={styles.subtitle}>Kitaplığına giriş yap, aradığın kitabın evde olup olmadığını hemen öğren</Text>

                </View>

                <View style={styles.formContainer}>
                    <Input
                        label={"E-posta"}
                        placeholder={"sen@ornek.com"}
                        value={email}
                        onChangeText={setEmail}

                    />

                    <Input
                        label={"Şifre"}
                        placeholder={"••••••••"}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.forgotPasswordContainer} onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text style={styles.forgotPasswordText}>Şifremi unuttum</Text>
                    </TouchableOpacity>
                </View>

                <Footer
                    text="Hesabın yok mu?"
                    linkText="Kayıt Ol"
                    targetScreen="SignUp"
                />

                <View style={styles.btnContainer}>
                    <Button title={"Giriş yap"} onPress={handleSignIn} />
                </View>
            </View>
        </View>
    )
}

//