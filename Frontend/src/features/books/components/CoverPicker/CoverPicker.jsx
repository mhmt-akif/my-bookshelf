import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

export const CoverPicker = ({ imageUri, onImagePicked, onImageRemoved }) => {
    const handlePickImage = async () => {
        try {
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

            if (!permissionResult.granted) {
                Alert.alert("İzin Gerekli", "Galeriye erişim izni vermeniz gerekiyor.");
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'],
                allowsEditing: true,
                aspect: [3, 4],
                quality: 0.8,
            });

            if (!result.canceled && result.assets && result.assets.length > 0) {
                if (onImagePicked) {
                    onImagePicked(result.assets[0].uri);
                }
            }
        } catch (error) {
            console.log("Görsel seçme hatası:", error);
            Alert.alert("Hata", "Görsel seçilirken bir sorun oluştu.");
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.pickerBox}
                onPress={handlePickImage}
                activeOpacity={0.75}
            >
                {imageUri ? (
                    <View style={{ width: '100%', height: '100%' }}>
                        <Image source={{ uri: imageUri }} style={styles.coverImage} />
                        <TouchableOpacity
                            style={styles.removeBadge}
                            onPress={(e) => {
                                e.stopPropagation();
                                if (onImageRemoved) onImageRemoved();
                            }}
                        >
                            <Ionicons name="trash-outline" size={16} color="#FFFFFF" />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        <View style={styles.iconContainer}>
                            <Ionicons name="image-outline" size={36} color="#7C756B" />
                        </View>
                        <Text style={styles.titleText}>Kapak{"\n"}fotoğrafı ekle</Text>
                        <Text style={styles.subText}>veya dosyalara göz at</Text>
                    </>
                )}
            </TouchableOpacity>
        </View>
    );
};
