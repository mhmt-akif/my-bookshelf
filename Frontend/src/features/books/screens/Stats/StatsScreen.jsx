import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../../../../shared/components/Header/Header';
import { Ionicons } from '@expo/vector-icons';
import { showAlert } from '../../../../app/store/alertSlice';
import { useReadingLog } from '../../hooks/useReadingLog';
import styles from './styles';

const StatCard = ({ value, label, icon }) => (
    <View style={styles.statCard}>
        <Ionicons name={icon} size={20} color="#C7753D" />
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
    </View>
);

const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString("tr-TR", { day: "2-digit", month: "long", year: "numeric" });
};

export const StatsScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { handleDeleteLog } = useReadingLog();

    const booksList = useSelector((state) => state.books.booksList) || [];
    const logs = useSelector((state) => state.readingLogs.logs) || [];

    const totalBooks = booksList.length;
    const readBooks = booksList.filter((b) => b.isRead).length;
    const totalPages = logs.reduce((sum, log) => sum + (log.pagesRead || 0), 0);

    // Güncel seri (Streak.jsx ile aynı mantık)
    const readDayKeys = new Set(logs.map((log) => new Date(log.createdAt).toDateString()));
    const today = new Date();
    let streakCount = 0;
    const cursor = new Date(today);
    if (!readDayKeys.has(today.toDateString())) {
        cursor.setDate(cursor.getDate() - 1);
    }
    while (readDayKeys.has(cursor.toDateString())) {
        streakCount++;
        cursor.setDate(cursor.getDate() - 1);
    }

    const bookTitleById = (id) => booksList.find((b) => b.id === id)?.title || "Silinmiş kitap";

    const handleDelete = (log) => {
        dispatch(showAlert({
            title: "Kaydı Sil",
            message: `"${bookTitleById(log.bookId)}" için ${log.pagesRead} sayfalık okuma kaydını silmek istediğine emin misin?`,
            showCancel: true,
            cancelText: "Vazgeç",
            confirmText: "Sil",
            onConfirm: () => handleDeleteLog(log.id),
        }));
    };

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Header
                    leftIcon={"arrow-left"}
                    onBackPress={() => navigation.goBack()}
                    title={"İstatistikler"}
                />

                <View style={styles.statsRow}>
                    <StatCard value={totalBooks} label="Toplam Kitap" icon="book" />
                    <StatCard value={readBooks} label="Okunan" icon="checkmark-circle" />
                    <StatCard value={totalPages} label="Toplam Sayfa" icon="document-text" />
                    <StatCard value={streakCount} label="Güncel Seri" icon="flame" />
                </View>

                <Text style={styles.sectionTitle}>Okuma Kayıtların</Text>

                <FlatList
                    data={logs}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={<Text style={styles.emptyText}>Henüz bir okuma kaydın yok.</Text>}
                    renderItem={({ item }) => (
                        <View style={styles.logRow}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.logBookTitle} numberOfLines={1}>{bookTitleById(item.bookId)}</Text>
                                <Text style={styles.logMeta}>{item.pagesRead} sayfa · {formatDate(item.createdAt)}</Text>
                            </View>
                            <TouchableOpacity onPress={() => handleDelete(item)} style={styles.deleteIconBtn}>
                                <Ionicons name="trash-outline" size={18} color="#C0392B" />
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};
