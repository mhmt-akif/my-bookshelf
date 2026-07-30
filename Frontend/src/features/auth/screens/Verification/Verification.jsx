import { View, Text } from "react-native"
import styles from "./styles"
import { Header } from "../../../../shared/components/Header/Header"
import { useNavigation } from "@react-navigation/native"
import { OTPInputSection } from "../../components/OTPInputSection/OTPInputSection"
import { Button } from "../../../../shared/components/Button/Button"
import { Footer } from "../../components/Footer/Footer"
import { useState } from "react"

export const Verification = () => {
    const navigation = useNavigation()
    const [code, setCode] = useState("")

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Header leftIcon={"arrow-left"} onBackPress={() => navigation.goBack()} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Kodu gir</Text>
                    <Text style={styles.subtitle}>E-posta adresinize gönderdiğimiz 6 haneli kodu aşağıya girin.</Text>
                </View>
                <View style={styles.otpContainer}>
                    <OTPInputSection />
                </View>

                <View style={styles.footerContainer}>
                    <Footer
                        text="Kod gelmedi mi?"
                        linkText="Tekrar Gönder"
                        targetScreen=""
                    />
                </View>

                <View style={styles.btnContainer}>
                    <Button title={"Doğrula"} onPress={() => navigation.navigate("NewPassword")} />
                </View>

            </View>
        </View>
    )
}