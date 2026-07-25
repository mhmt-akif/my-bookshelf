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
import Ionicons from '@expo/vector-icons/Ionicons';
export const NewPassword = () => {

    const navigation = useNavigation();

    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Header leftIcon={"arrow-left"} onBackPress={() => navigation.goBack()} />

                <View style={styles.avatarContainer}>
                    <Ionicons name="checkmark" size={28} color="#3D472B" />
                </View>

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Yeni şifre belirle</Text>
                    <Text style={styles.subtitle}>Kodu doğruladık , şimdi yeni şifreni belirleyebilirsin.</Text>

                </View>

                <View style={styles.formContainer}>
                    <Input
                        label={"Yeni Şifre"}
                        placeholder={"Yeni Şifre"}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <Input
                        label={"Şifre Tekrar"}
                        placeholder={"Şifre Tekrar"}
                        value={passwordRepeat}
                        onChangeText={setPasswordRepeat}
                        secureTextEntry
                    />
                </View>

                <View style={styles.btnContainer}>
                    <Button title={"Şifremi Sıfırla"} onPress={() => navigation.navigate("SignIn")} />
                </View>
            </View>
        </View>
    )
}