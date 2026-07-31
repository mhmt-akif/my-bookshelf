import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../../../../app/store/bookSlice';
import { showAlert } from '../../../../app/store/alertSlice';
import { Header } from '../../../../shared/components/Header/Header';
import { Ionicons } from "@expo/vector-icons";
import styles from './styles';

export const BookDetailScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { id } = route.params;

    // Kitabı Redux içerisinden buluyoruz
    const book = useSelector(state => state.books.booksList.find(b => b.id === id));

    const handleDelete = () => {
        dispatch(showAlert({
            title: "Uyarı",
            message: "Bu kitabı silmek istediğinizden emin misiniz?",
            showCancel: true,
            cancelText: "Vazgeç",
            confirmText: "Evet",
            onConfirm: () => {
                dispatch(deleteBook(book.id));
                navigation.goBack();
            }
        }));
    };

    // Eğer silme işleminden sonra kitap bulunamazsa çökmemesi için
    if (!book) return null;

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Header
                    leftIcon={"arrow-left"}
                    onBackPress={() => navigation.goBack()}
                    title={"Kitap Detayı"}
                    rightIcon={"trash-outline"}
                    onRightPress={handleDelete}
                />

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    <View style={[styles.coverContainer, { backgroundColor: book.coverColor || '#E3A87C' }]}>
                        {book.coverImage ? (
                            <Image source={{ uri: book.coverImage }} style={styles.coverImage} />
                        ) : (
                            <Ionicons name="book-outline" size={60} color="#FFFFFF" />
                        )}
                    </View>

                    <Text style={styles.title}>{book.title}</Text>
                    <Text style={styles.author}>{book.author}</Text>

                    <View style={styles.infoRow}>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoLabel}>Kategori</Text>
                            <Text style={styles.infoValue}>{book.category}</Text>
                        </View>
                        <View style={styles.infoBox}>
                            <Text style={styles.infoLabel}>Sayfa Sayısı</Text>
                            <Text style={styles.infoValue}>{book.pageCount}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};
