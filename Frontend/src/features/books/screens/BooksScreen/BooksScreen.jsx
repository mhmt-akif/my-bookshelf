import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native"
import { useState } from "react"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { BookCard } from "../../components/BookCard/BookCard"
import { BottomNav } from "../../../../shared/components/BottomNav/BottomNav"
import styles from "./styles"

const FILTERS = ["Tümü", "Sahibim", "Sahip Olduklarım"]

const MOCK_BOOKS = [
    { id: "1", title: "Sapiens", author: "Yuval Noah Harari", coverColor: "#E3A87C" },
    { id: "2", title: "Atomik Alışkanlıklar", author: "James Clear", coverColor: "#B7D6A1" },
    { id: "3", title: "Şeker Portakalı", author: "José Mauro de Vasconcelos", coverColor: "#CFC9BE" },
]

export const BooksScreen = () => {
    const navigation = useNavigation()
    const [query, setQuery] = useState("")
    const [activeFilter, setActiveFilter] = useState("Sahip Olduklarım")
    const [selectedIds, setSelectedIds] = useState([])

    const filteredBooks = MOCK_BOOKS.filter(
        (book) =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase())
    )

    const toggleSelected = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Kitaplığım</Text>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>EY</Text>
                    </View>
                </View>

                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={18} color="#8C8881" />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Kitap ya da yazar ara..."
                        placeholderTextColor="#8C8881"
                        value={query}
                        onChangeText={setQuery}
                    />
                </View>

                <View style={styles.filterRow}>
                    {FILTERS.map((filter) => {
                        const active = filter === activeFilter
                        return (
                            <TouchableOpacity
                                key={filter}
                                style={[styles.filterChip, active && styles.filterChipActive]}
                                onPress={() => setActiveFilter(filter)}
                            >
                                <Text style={[styles.filterText, active && styles.filterTextActive]}>
                                    {filter}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>

                <Text style={styles.countText}>{filteredBooks.length} kitap</Text>

                <FlatList
                    data={filteredBooks}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <BookCard
                            title={item.title}
                            author={item.author}
                            coverColor={item.coverColor}
                            selected={selectedIds.includes(item.id)}
                            onToggle={() => toggleSelected(item.id)}
                        />
                    )}
                />

                <TouchableOpacity
                    style={styles.fab}
                    onPress={() => navigation.navigate("AddBook")}
                >
                    <Ionicons name="add" size={28} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <BottomNav active="Kitaplığım" />
        </View>
    )
}
