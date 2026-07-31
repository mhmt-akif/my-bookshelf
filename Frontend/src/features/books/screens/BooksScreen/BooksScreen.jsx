import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from "react-native"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { BookCard } from "../../components/BookCard/BookCard"
import { BottomNav } from "../../../../shared/components/BottomNav/BottomNav"
import styles from "./styles"
import { Streak } from "../../components/Streak/Streak"

const FILTERS = ["Tümü", "Okuduklarım", "Okumadıklarım"]

// const MOCK_BOOKS = [
//     { id: "1", title: "Sapiens", author: "Yuval Noah Harari", coverColor: "#E3A87C" },
//     { id: "2", title: "Atomik Alışkanlıklar", author: "James Clear", coverColor: "#B7D6A1" },
//     { id: "3", title: "Şeker Portakalı", author: "José Mauro de Vasconcelos", coverColor: "#CFC9BE" },
// ]


export const BooksScreen = () => {
    const navigation = useNavigation()

    const profileImage = useSelector((state) => state.user.profileImage)
    const bookList = useSelector((state) => state.books.booksList);

    const [query, setQuery] = useState("")
    const [activeFilter, setActiveFilter] = useState("Tümü")
    const filteredBooks = bookList.filter((book) => {
        const matchesQuery = book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase());

        let matchesFilter = true;
        if (activeFilter === "Okuduklarım") {
            matchesFilter = book.isRead;
        } else if (activeFilter === "Okumadıklarım") {
            matchesFilter = !book.isRead;
        }

        return matchesQuery && matchesFilter;
    });

    const renderHeader = () => (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Kitaplığım</Text>
                <View style={styles.avatar}>
                    {profileImage ? (
                        <Image source={{ uri: profileImage }} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                    ) : (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Profile")}>
                            <Text style={styles.avatarText}>MA</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <Streak />

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
        </>
    )

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <FlatList
                    data={filteredBooks}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={renderHeader}
                    renderItem={({ item }) => (
                        <BookCard
                            id={item.id}
                            title={item.title}
                            author={item.author}
                            coverColor={item.coverColor}
                            coverImage={item.coverImage}
                            selected={item.isRead}
                            onPress={() => navigation.navigate("BookDetail", { id: item.id })}
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
