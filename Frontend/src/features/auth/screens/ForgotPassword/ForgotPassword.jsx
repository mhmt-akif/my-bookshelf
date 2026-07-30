import { View, Text } from "react-native"
import styles from "./styles"
import { Header } from "../../../../shared/components/Header/Header"
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { Input } from "../../components/Input/Input";
import { useState } from "react";
import { Button } from "../../../../shared/components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { useNavigation } from "@react-navigation/native";
export const ForgotPassword = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState("");

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Header leftIcon={"arrow-left"} onBackPress={() => navigation.goBack()} />

                <View style={styles.avatarContainer}>
                    <Feather name="lock" size={28} color="#8C491A" />
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Şifreni mi Unuttun?</Text>
                    <Text style={styles.subtitle}>E-posta adresinizi girin, size şifrenizi sıfırlamanız için bir bağlantı gönderelim.</Text>

                </View>

                <View style={styles.formContainer}>
                    <Input
                        label={"E-posta"}
                        placeholder={"sen@ornek.com"}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.btnContainer}>
                    <Button title={"Şifremi Sıfırla"} onPress={() => navigation.navigate("Verification")} />
                </View>
                <Footer
                    text="Şifreni hatırladın mı?"
                    linkText="Giriş yap"
                    targetScreen="SignIn"
                />
            </View>
        </View>
    )
}