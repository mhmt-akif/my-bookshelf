import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { showAlert } from '../../../../app/store/alertSlice';
import { Header } from '../../../../shared/components/Header/Header';
import { Input } from '../../../auth/components/Input/Input';
import { Picker } from '../../../../shared/components/Picker/Picker';
import { CoverPicker } from '../../components/CoverPicker/CoverPicker';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useDeleteBook } from '../../hooks/useDeleteBook';
import { useEditBook } from '../../hooks/useEditBook';
import { CustomIndicator } from '../../../../shared/components/CustomIndicator/CustomIndicator';
import CATEGORY_OPTIONS from '../../data/CategoryOptions';
import styles from './styles';

export const BookDetailScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { id } = route.params;
    const { handleDeleteBook, loading: deleteLoading } = useDeleteBook();
    const { handleEditBook, loading: editLoading } = useEditBook();

    // Kitabı Redux içerisinden buluyoruz
    const book = useSelector(state => state.books.booksList.find(b => b.id === id));

    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState("");
    const [editAuthor, setEditAuthor] = useState("");
    const [editCategory, setEditCategory] = useState("");
    const [editPageCount, setEditPageCount] = useState("");
    const [editCoverImage, setEditCoverImage] = useState(null);

    const startEditing = () => {
        setEditTitle(book.title);
        setEditAuthor(book.author);
        setEditCategory(book.category);
        setEditPageCount(String(book.pageCount ?? ""));
        setEditCoverImage(book.coverImage);
        setIsEditing(true);
    };

    const handleSave = async () => {
        const success = await handleEditBook(book.id, {
            title: editTitle,
            author: editAuthor,
            category: editCategory,
            pageCount: Number(editPageCount),
            coverImage: editCoverImage,
        });
        if (success) {
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        dispatch(showAlert({
            title: "Uyarı",
            message: "Bu kitabı silmek istediğinizden emin misiniz?",
            showCancel: true,
            cancelText: "Vazgeç",
            confirmText: "Evet",
            onConfirm: async () => {
                const success = await handleDeleteBook(book.id);
                if (success) {
                    navigation.goBack();
                }
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
                    onBackPress={() => (isEditing ? setIsEditing(false) : navigation.goBack())}
                    title={isEditing ? "Kitabı Düzenle" : "Kitap Detayı"}
                    rightIcon={isEditing ? "check" : "edit"}
                    onRightPress={isEditing ? handleSave : startEditing}
                />

                <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                    {isEditing ? (
                        <>
                            <CoverPicker
                                imageUri={editCoverImage}
                                onImagePicked={setEditCoverImage}
                                onImageRemoved={() => setEditCoverImage(null)}
                            />

                            <View style={styles.editForm}>
                                <Input
                                    label={"Kitap Adı"}
                                    placeholder={"ör. Simyacı"}
                                    value={editTitle}
                                    onChangeText={setEditTitle}
                                />
                                <Input
                                    label={"Yazar"}
                                    placeholder={"ör. Paulo Coelho"}
                                    value={editAuthor}
                                    onChangeText={setEditAuthor}
                                />
                                <Picker
                                    label={"Kategori"}
                                    placeholder={"Kategori Seçiniz"}
                                    value={editCategory}
                                    onValueChange={setEditCategory}
                                    options={CATEGORY_OPTIONS}
                                    modalTitle={"Kategori Seç"}
                                />
                                <Input
                                    label={"Sayfa Sayısı"}
                                    placeholder={"ör. 320"}
                                    value={editPageCount}
                                    onChangeText={setEditPageCount}
                                    keyboardType="numeric"
                                />
                            </View>
                        </>
                    ) : (
                        <>
                            <View style={styles.coverContainer}>
                                {book.coverImage ? (
                                    <Image source={{ uri: book.coverImage }} style={styles.coverImage} />
                                ) : (
                                    <LinearGradient
                                        colors={book.coverColor ? [book.coverColor, book.coverColor] : ["#E3A87C", "#C7753D"]}
                                        style={styles.coverPlaceholder}
                                    >
                                        <Ionicons name="book" size={64} color="#FFFFFF" />
                                    </LinearGradient>
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

                            <TouchableOpacity style={styles.deleteButton} onPress={handleDelete} activeOpacity={0.8}>
                                <Ionicons name="trash-outline" size={18} color="#C0392B" />
                                <Text style={styles.deleteButtonText}>Kitabı Sil</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </ScrollView>
            </View>
            <CustomIndicator visible={deleteLoading} text="Siliniyor..." fullScreen={true} />
            <CustomIndicator visible={editLoading} text="Kaydediliyor..." fullScreen={true} />
        </View>
    );
};
