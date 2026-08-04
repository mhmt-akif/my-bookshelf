import { View, Text } from "react-native"
import styles from "./styles"
import { Header } from "../../../../shared/components/Header/Header"
import { useNavigation, useRoute } from "@react-navigation/native"
import { OTPInputSection } from "../../components/OTPInputSection/OTPInputSection"
import { Button } from "../../../../shared/components/Button/Button"
import { useState } from "react"
import { useVerification } from "../../hooks/useVerification"
import { CustomIndicator } from "../../../../shared/components/CustomIndicator/CustomIndicator"
import { Text as RNText, Pressable } from "react-native"

export const Verification = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const email = route.params?.email || ""
    const isPasswordReset = route.params?.isPasswordReset || false

    const [code, setCode] = useState("")
    const { handleVerify, handleResend, loading } = useVerification(email, isPasswordReset)

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Header leftIcon={"arrow-left"} onBackPress={() => navigation.goBack()} />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Kodu gir</Text>
                    <Text style={styles.subtitle}>
                        {email ? `${email}` : "E-posta adresinize"} gönderdiğimiz 6 haneli kodu aşağıya girin.
                    </Text>
                </View>
                <View style={styles.otpContainer}>
                    <OTPInputSection onCodeChange={setCode} />
                </View>

                <View style={styles.footerContainer}>
                    <Pressable onPress={handleResend}>
                        <Text style={styles.subtitle}>
                            Kod gelmedi mi?{" "}
                            <Text style={{ color: "#8B5E3C", fontWeight: "bold" }}>Tekrar Gönder</Text>
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.btnContainer}>
                    <Button title={"Doğrula"} onPress={() => handleVerify(code)} />
                </View>

            </View>

            <CustomIndicator visible={loading} text="Doğrulanıyor..." fullScreen={true} />
        </View>
    )
}
