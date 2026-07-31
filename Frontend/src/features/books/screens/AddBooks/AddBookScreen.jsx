import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Header } from '../../../../shared/components/Header/Header';
import { Input } from '../../../auth/components/Input/Input';
import { Picker } from '../../../../shared/components/Picker/Picker';
import { Button } from '../../../../shared/components/Button/Button';
import { CoverPicker } from '../../components/CoverPicker/CoverPicker';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../../app/store/bookSlice';
import { showAlert } from '../../../../app/store/alertSlice';
import CATEGORY_OPTIONS from '../../data/CategoryOptions';

export const AddBookScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [coverImage, setCoverImage] = useState(null);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [pageCount, setPageCount] = useState('');

    const handleSaveBook = () => {
        if (!title.trim()) {
            dispatch(showAlert({ title: "Uyarı", message: "Lütfen kitap adını giriniz." }));
            return;
        }
        if (!author.trim()) {
            dispatch(showAlert({ title: "Uyarı", message: "Lütfen yazar adını giriniz." }));
            return;
        }
        if (!category) {
            dispatch(showAlert({ title: "Uyarı", message: "Lütfen bir kategori seçiniz." }));
            return;
        }
        dispatch(addBook({
            title: title,
            author: author,
            category: category,
            pageCount: pageCount,
            coverImage: coverImage,
        }));

        dispatch(showAlert({
            title: "Başarılı",
            message: `"${title}" adlı kitap başarıyla eklendi!`,
            onConfirm: () => navigation.goBack()
        }));
    };

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Header
                    leftIcon={"arrow-left"}
                    onBackPress={() => navigation.goBack()}
                    title={"Kitap Ekle"}
                    rightIcon={"check"}
                    onRightPress={handleSaveBook}
                />

                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    <ScrollView
                        contentContainerStyle={styles.scrollContent}
                        showsVerticalScrollIndicator={false}
                    >
                        <CoverPicker
                            imageUri={coverImage}
                            onImagePicked={setCoverImage}
                            onImageRemoved={() => setCoverImage(null)}
                        />

                        <View style={styles.formContainer}>
                            <Input
                                label={"Kitap Adı"}
                                placeholder={"ör. Simyacı"}
                                value={title}
                                onChangeText={setTitle}
                            />

                            <Input
                                label={"Yazar"}
                                placeholder={"ör. Paulo Coelho"}
                                value={author}
                                onChangeText={setAuthor}
                            />

                            <Picker
                                label={"Kategori"}
                                placeholder={"Kategori Seçiniz"}
                                value={category}
                                onValueChange={setCategory}
                                options={CATEGORY_OPTIONS}
                                modalTitle={"Kategori Seç"}
                            />

                            <View style={styles.rowContainer}>
                                <Input
                                    label={"Sayfa Sayısı"}
                                    placeholder={"ör. 320"}
                                    value={pageCount}
                                    onChangeText={setPageCount}
                                    keyboardType="numeric"
                                    containerStyle={styles.smallInputContainer}
                                />
                            </View>

                            <View style={styles.buttonContainer}>
                                <Button title={"Kitap Ekle"} onPress={handleSaveBook} />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};
