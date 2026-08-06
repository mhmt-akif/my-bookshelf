import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    ScrollView,
} from "react-native"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { SectionHeader, ACCENT } from "../ProfilePrimitives/ProfilePrimitives"
import styles from "./styles"
import { useFavoriteGenres } from "../../hooks/useFavoriteGenres"

const GENRE_LIST = [
    { id: "1", label: "Roman", icon: "book" },
    { id: "2", label: "Hikaye", icon: "reader" },
    { id: "3", label: "Ders Kitabı", icon: "school" },
    { id: "4", label: "Polisiye", icon: "finger-print" },
    { id: "5", label: "Cinayet", icon: "skull" },
    { id: "6", label: "Kişisel Gelişim", icon: "trending-up" },
]

export const FavoriteGenres = () => {
    const { updateFavoriteGenres } = useFavoriteGenres()
    const selectedGenres = useSelector((state) => state.user.favoriteGenres)
    const [showModal, setShowModal] = useState(false)

    const toggleGenre = (id) => {
        const newGenres = selectedGenres.includes(id)
            ? selectedGenres.filter((g) => g !== id)
            : [...selectedGenres, id]
        updateFavoriteGenres(newGenres)
    }

    return (
        <>
            <SectionHeader title="Favori Türlerim" icon="heart" />

            <View style={styles.previewCard}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollWrapper}
                    contentContainerStyle={styles.scrollContent}
                >
                    <TouchableOpacity
                        style={styles.chips}
                        onPress={() => setShowModal(true)}
                        activeOpacity={0.8}
                    >
                        {selectedGenres.map((id) => {
                            const genre = GENRE_LIST.find((g) => g.id === id)
                            return (
                                <View key={id} style={styles.chip}>
                                    <Ionicons name={genre?.icon + "-outline"} size={12} color="#fff" />
                                    <Text style={styles.chipText}>{genre?.label}</Text>
                                </View>
                            )
                        })}
                        {selectedGenres.length === 0 && (
                            <Text style={styles.emptyText}>Henüz tür seçmediniz</Text>
                        )}
                    </TouchableOpacity>
                </ScrollView>
                <TouchableOpacity onPress={() => setShowModal(true)}>
                    <Ionicons name="chevron-forward" size={18} color={ACCENT} />
                </TouchableOpacity>
            </View>

            {/* Genre Modal */}
            <Modal visible={showModal} transparent animationType="slide">
                <View style={styles.overlay}>
                    <View style={[styles.sheet, { maxHeight: "80%" }]}>
                        <View style={styles.handle} />
                        <Text style={styles.sheetTitle}>Favori Türleri Seç</Text>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.grid}>
                                {GENRE_LIST.map((genre) => {
                                    const active = selectedGenres.includes(genre.id)
                                    return (
                                        <TouchableOpacity
                                            key={genre.id}
                                            style={[
                                                styles.gridItem,
                                                active && styles.gridItemActive,
                                            ]}
                                            onPress={() => toggleGenre(genre.id)}
                                        >
                                            <Ionicons
                                                name={genre.icon + "-outline"}
                                                size={22}
                                                color={active ? "#fff" : "#6A6155"}
                                            />
                                            <Text style={[styles.gridLabel, active && { color: "#fff" }]}>
                                                {genre.label}
                                            </Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </ScrollView>
                        <TouchableOpacity
                            style={styles.saveBtn}
                            onPress={() => setShowModal(false)}
                        >
                            <Text style={styles.saveBtnText}>Kaydet ({selectedGenres.length} seçili)</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}
