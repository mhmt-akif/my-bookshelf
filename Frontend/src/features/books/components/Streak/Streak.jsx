import { View, Text, TouchableOpacity } from "react-native"
import styles from "./styles"
import { useState } from "react";

const DAYS = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pa"]

export const Streak = () => {

    //günü dinamik olarak alacağız
    const jsDay = new Date().getDay(); //0-6 arası
    const todayIndex = jsDay === 0 ? 6 : jsDay - 1;

    //okunan günler
    const [completedDays, setCompletedDays] = useState([0, 1, 2, 5]);
    const [streakCount, setStreakCount] = useState(5);

    //bugün okundu mu kontrolü
    const isTodayRead = completedDays.includes(todayIndex)

    //butona tıklandığında çalışacak fonksiyon
    const handleReadTogle = () => {
        if (isTodayRead) {
            setCompletedDays(completedDays.filter((index) => index !== todayIndex));
            setStreakCount((prev) => prev - 1)
        } else {
            setCompletedDays([...completedDays, todayIndex]);
            setStreakCount((prev) => prev + 1);
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <View style={styles.textColumn}>
                    <View style={styles.streakCountRow}>
                        <Text style={styles.streakNumber}>{streakCount}</Text>
                        <Text style={styles.streakLabel}>gün üst üste</Text>
                    </View>
                    <Text style={styles.streakSubtitle}>
                        {isTodayRead
                            ? "Harika! Bugünkü okumanı tamamladın."
                            : "Serini korumak için bugün de okumalısın."}
                    </Text>
                </View>

                <View style={styles.daysRow}>
                    {DAYS.map((day, index) => {
                        const isCompleted = completedDays.includes(index)
                        return (
                            <View key={day} style={styles.dayContainer}>
                                <Text style={styles.dayText}>{day}</Text>
                                <View style={[styles.dayCircle, isCompleted && styles.dayCircleCompleted]} />
                            </View>
                        )
                    })}
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.bottomSection}>
                <Text style={styles.questionText}>Bugün kitap okudun mu?</Text>
                <TouchableOpacity style={styles.actionButton} activeOpacity={0.8} onPress={handleReadTogle}>
                    <Text style={styles.actionButtonText}>
                        {isTodayRead
                            ? "Vazgeç"
                            : "Evet, okudum!"}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};