import { useState, useRef } from "react";
import {
    View, Text,
    TextInput,
    StyleSheet,
    Pressable,
} from "react-native"


export const OTPInputSection = () => {

    //6 haneli kod
    const CODE_LENGTH = 6;
    const [code, setCode] = useState("")
    const inputRef = useRef(null);

    // Kutulara tıklandığında gizli TextInput'a odaklan
    const handlePress = () => {
        inputRef.current?.focus();
    };

    return (
        <View style={styles.container}>
            {/* 1. Görseldeki 6 Yuvarlak Kutucuk */}
            <Pressable style={styles.codeContainer} onPress={handlePress}>
                {Array.from({ length: CODE_LENGTH }).map((_, index) => {
                    const char = code[index] || '';
                    return (
                        <View key={index} style={styles.circleBox}>
                            <Text style={styles.codeText}>{char}</Text>
                        </View>
                    );
                })}
            </Pressable>
            {/* 2. Arkada Çalışan Gizli TextInput */}
            <TextInput
                ref={inputRef}
                value={code}
                onChangeText={(text) => setCode(text.replace(/[^0-9]/g, ''))} // Sadece rakam kabul et
                maxLength={CODE_LENGTH}
                keyboardType="number-pad"
                style={styles.hiddenInput}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
    },
    codeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    circleBox: {
        width: 48,
        height: 48,
        borderRadius: 24, // Yuvarlak olması için yükseklik/genişliğin yarısı
        backgroundColor: '#EBDDC5', // Tasarımdaki açık krem renge yakın
        borderWidth: 1,
        borderColor: '#D8CEBE',
        justifyContent: 'center',
        alignItems: 'center',
    },
    codeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    hiddenInput: {
        position: 'absolute',
        opacity: 0,
        width: 1,
        height: 1,
    },
});