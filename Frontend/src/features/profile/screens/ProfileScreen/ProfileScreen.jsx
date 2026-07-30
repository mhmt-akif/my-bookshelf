import { View, ScrollView, StyleSheet } from "react-native"
import { BottomNav } from "../../../../shared/components/BottomNav/BottomNav"
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader"
import { FavoriteGenres } from "../../components/FavoriteGenres/FavoriteGenres"
import { AccountSettings } from "../../components/AccountSettings/AccountSettings"
import { AboutSection } from "../../components/AboutSection/AboutSection"
import { LogoutButton } from "../../components/LogoutButton/LogoutButton"

export const ProfileScreen = () => (
    <View style={styles.screen}>
        <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
        >
            <ProfileHeader />
            <FavoriteGenres />
            <AccountSettings />
            <AboutSection />
            <LogoutButton />
            <View style={{ height: 32 }} />
        </ScrollView>

        <BottomNav active="Profil" />
    </View>
)

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F5EAD8",
    },
    scroll: {
        flex: 1,
    },
    content: {
        paddingBottom: 20,
    },
})
