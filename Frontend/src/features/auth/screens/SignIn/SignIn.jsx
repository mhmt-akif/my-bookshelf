import { View, Text, TouchableOpacity } from "react-native"
import { Input } from "../../components/Input/Input"
import { Button } from "../../../../shared/components/Button/Button"
import { Footer } from "../../components/Footer/Footer"
import styles from "./styles"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { authService } from "../../services/authService"
import { Header } from "../../../../shared/components/Header/Header"
import { CustomIndicator } from "../../../../shared/components/CustomIndicator/CustomIndicator"
import { useDispatch } from "react-redux"
import { showAlert } from "../../../../app/store/alertSlice"
import Entypo from '@expo/vector-icons/Entypo';

export const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    const handleSignIn = async () => {
        if (!email.trim() || !password.trim()) {
            dispatch(showAlert({ title: "Uyarı", message: "Lütfen, e-posta ve şifrenizi giriniz!" }))
            return
        }
        setLoading(true)

        try {
            const response = await authService.signInWithPassword(email, password)
            console.log("Giriş başarılı Token/User:", response.user.id)
            setLoading(false)

            setTimeout(() => {
                dispatch(showAlert({
                    title: "Tebrikler",
                    message: "Giriş Başarılı!",
                    onConfirm: () => navigation.navigate("Books")
                }))
            }, 500)
        } catch (error) {
            console.log("Girişte hata!", error.message)
            setLoading(false)

            setTimeout(() => {
                dispatch(showAlert({ title: "Hata", message: error.message }))
            }, 500)
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

            {/* Lottie Yükleniyor Göstergesi */}
            <CustomIndicator visible={loading} text="Giriş yapılıyor..." fullScreen={true} />
        </View>
    )
}