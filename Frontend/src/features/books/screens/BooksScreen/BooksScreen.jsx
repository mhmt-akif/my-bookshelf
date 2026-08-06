import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ActivityIndicator } from "react-native"
import { useState, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation, useFocusEffect } from "@react-navigation/native"
import { BookCard } from "../../components/BookCard/BookCard"
import { BottomNav } from "../../../../shared/components/BottomNav/BottomNav"
import styles from "./styles"
import { Streak } from "../../components/Streak/Streak"
import { bookService } from "../../services/bookService"
import { readingLogService } from "../../services/readingLogService"
import { setBooks, setBooksLoading } from "../../../../app/store/bookSlice"
import { setReadingLogs } from "../../../../app/store/readingLogSlice"

const FILTERS = ["Tümü", "Okuduklarım", "Okumadıklarım"]

export const BooksScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const profileImage = useSelector((state) => state.user.profileImage)
    const bookList = useSelector((state) => state.books.booksList)
    const loading = useSelector((state) => state.books.loading)
    const userId = useSelector((state) => state.auth.user?.id)

    const [query, setQuery] = useState("")
    const [activeFilter, setActiveFilter] = useState("Tümü")

    const {user}=useSelector((state)=>state.auth);
    const full_name=user?.user_metadata?.full_name ||"Deneme Kullanıcı"

    useFocusEffect(
        useCallback(() => {
            const fetchBooks = async () => {
                if (!userId) return;
                dispatch(setBooksLoading(true));
                try {
                    const data = await bookService.getBooks(userId);
                    dispatch(setBooks(data));
                } catch (err) {
                    console.log(err);
                } finally {
                    dispatch(setBooksLoading(false));
                }
            };
            const fetchReadingLogs = async () => {
                if (!userId) return;
                try {
                    const logs = await readingLogService.getLogs(userId);
                    dispatch(setReadingLogs(logs));
                } catch (err) {
                    console.log(err);
                }
            };
            fetchBooks();
            fetchReadingLogs();
        }, [userId])
    );

    const filteredBooks = bookList.filter((book) => {
        const matchesQuery = book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase());

        let matchesFilter = true;
        if (activeFilter === "Okuduklarım") matchesFilter = book.isRead;
        else if (activeFilter === "Okumadıklarım") matchesFilter = !book.isRead;

        return matchesQuery && matchesFilter;
    });

    const renderHeader = () => (
        <>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Kitaplığım</Text>
                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.statsIconBtn} onPress={() => navigation.navigate("Stats")}>
                        <Ionicons name="stats-chart-outline" size={18} color="#8C491A" />
                    </TouchableOpacity>
                    <View style={styles.avatar}>
                        {profileImage ? (
                            <Image source={{ uri: profileImage }} style={{ width: '100%', height: '100%', borderRadius: 20 }} />
                        ) : (
                            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                                <Text style={styles.avatarText}>{full_name.split(' ').map(n => n[0]).join('')}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
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
                {loading && bookList.length === 0 ? (
                    <ActivityIndicator style={{ marginTop: 40 }} />
                ) : (
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
                )}

                <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate("AddBook")}>
                    <Ionicons name="add" size={28} color="#FFFFFF" />
                </TouchableOpacity>
            </View>

            <BottomNav active="Kitaplığım" />
        </View>
    )
}