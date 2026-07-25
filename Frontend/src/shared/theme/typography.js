// src/shared/theme/typography.js

/**
 * Kitaplık (BookShelf) Teması Ortak Font Yönetimi
 * 
 * Görseldeki "Hesap oluştur" başlığında kullanılan klasik ve şık edebiyat/kitap
 * tarzı başlıklar için Serif (Playfair Display / DM Serif Display) fontları tercih edilmektedir.
 */

export const FONTS = {
    // Görseldeki ultra kalın/etkileyici tırnaklı (fatface) başlık fontu
    abrilFatface: 'AbrilFatface_400Regular',

    // Playfair serif başlık fontları
    serifBold: 'PlayfairDisplay_700Bold',
    serifMedium: 'PlayfairDisplay_600SemiBold',
    serifRegular: 'PlayfairDisplay_400Regular',

    // Standart gövde metinleri
    body: undefined, // Sistem fontunu kullanır
};

export const TYPOGRAPHY = {
    h1: {
        fontFamily: FONTS.serifBold,
        fontSize: 26,
        color: '#1C1B1F',
    },
    subtitle: {
        fontSize: 15,
        color: '#6A6155',
    },
};
