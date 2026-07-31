import React, { useEffect, useRef } from "react"
import { View, Modal, Animated } from "react-native"
import LottieView from "lottie-react-native"
import bookAnimation from "../../../../assets/animations/Book.json"
import styles from "./styles"

export const CustomIndicator = ({ visible = true, text = "Yükleniyor...", fullScreen = false }) => {
    const fadeAnim = useRef(new Animated.Value(0.4)).current;

    useEffect(() => {
        if (visible) {
            Animated.loop(
                Animated.sequence([
                    Animated.timing(fadeAnim, {
                        toValue: 1,
                        duration: 800,
                        useNativeDriver: true,
                    }),
                    Animated.timing(fadeAnim, {
                        toValue: 0.4,
                        duration: 800,
                        useNativeDriver: true,
                    }),
                ])
            ).start();
        } else {
            fadeAnim.setValue(0.4);
        }
    }, [visible, fadeAnim]);

    if (!visible) return null

    const content = (
        <View style={styles.container}>
            <LottieView
                source={bookAnimation}
                autoPlay
                loop
                style={styles.animation}
            />
            {text ? <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>{text}</Animated.Text> : null}
        </View>
    )

    if (fullScreen) {
        return (
            <Modal transparent={true} visible={visible} animationType="fade" statusBarTranslucent={true}>
                <View style={styles.overlay}>{content}</View>
            </Modal>
        )
    }

    return content
}