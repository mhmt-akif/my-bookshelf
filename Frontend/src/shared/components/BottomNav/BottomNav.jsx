import { View, Text, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"

const TABS = [
    { key: "Kitaplığım", icon: "home", route: "Books" },
    { key: "Profil", icon: "person-outline", route: "Profile" },
]

export const BottomNav = ({ active }) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            {TABS.map((tab) => {
                const isActive = tab.key === active
                return (
                    <TouchableOpacity
                        key={tab.key}
                        style={styles.tab}
                        onPress={() => tab.route && navigation.navigate(tab.route)}
                    >
                        <Ionicons
                            name={tab.icon}
                            size={22}
                            color={isActive ? "#C7753D" : "#8C8881"}
                        />
                        <Text style={[styles.label, isActive && styles.labelActive]}>
                            {tab.key}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}
