import { View, Text } from "react-native"
import styles from "./styles"
import { Header } from "../../../../shared/components/Header/Header"
import { Input } from "../../components/Input/Input"
import { useState } from "react"
import { Button } from "../../../../shared/components/Button/Button"
import { Footer } from "../../components/Footer/Footer"
import { useNavigation } from "@react-navigation/native"
import { useSignUp } from "../../hooks/useSignUp"
import { CustomIndicator } from "../../../../shared/components/CustomIndicator/CustomIndicator"
export const SignUp = () => {
    const navigation = useNavigation()

    //input için bazı stateler
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { handleSignUp, loading } = useSignUp()

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Header leftIcon={"arrow-left"} onBackPress={() => navigation.goBack()} />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Hesap oluştur</Text>
                    <Text style={styles.subtitle}>Bir dakikada başla,kitaplığın seninle her yerde </Text>

                </View>
                <View style={styles.formContainer}>
                    <Input
                        label={"Ad Soyad"}
                        placeholder={"Adın Soyadın"}
                        keyboardType="default"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                    <Input
                        label={"E-posta"}
                        placeholder={"sen@ornek.com"}
                        keyboardType="default"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Input
                        label={"Şifre"}
                        placeholder={"••••••••"}
                        keyboardType="default"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                </View>
                <View style={styles.btnContainer}>
                    <Button title={"Kayıt Ol"} onPress={() => handleSignUp(fullName, email, password)} />
                </View>
                <Footer
                    text="Zaten hesabın var mı?"
                    linkText="Giriş yap"
                    targetScreen="ForgotPassword"
                />
            </View>

            <CustomIndicator visible={loading} text="Hesap oluşturuluyor..." fullScreen={true} />
        </View>
    )
}