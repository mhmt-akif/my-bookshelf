import { View, Text, TouchableOpacity } from "react-native"
import { Input } from "../../components/Input/Input"
import { Button } from "../../../../shared/components/Button/Button"
import { Footer } from "../../components/Footer/Footer"
import styles from "./styles"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { Header } from "../../../../shared/components/Header/Header"
import { CustomIndicator } from "../../../../shared/components/CustomIndicator/CustomIndicator"
import Entypo from '@expo/vector-icons/Entypo'
import { useSignIn } from "../../hooks/useSignIn"

export const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    const { handleSignIn, loading } = useSignIn()

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
                    <Button title={"Giriş yap"} onPress={() => handleSignIn(email, password)} />
                </View>
            </View>

            <CustomIndicator visible={loading} text="Giriş yapılıyor..." fullScreen={true} />
        </View>
    )
}