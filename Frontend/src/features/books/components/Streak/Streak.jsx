import { useState } from "react"
import { View, Text, TouchableOpacity, Modal } from "react-native"
import styles from "./styles"
import { useSelector } from "react-redux"
import { Picker } from "../../../../shared/components/Picker/Picker"
import { Input } from "../../../auth/components/Input/Input"
import { useReadingLog } from "../../hooks/useReadingLog"

const DAYS = ["Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pa"]

export const Streak = () => {
    const booksList = useSelector((state) => state.books.booksList) || []
    const logs = useSelector((state) => state.readingLogs.logs) || []
    const { handleAddLog, loading } = useReadingLog()

    const [showModal, setShowModal] = useState(false)
    const [selectedBookId, setSelectedBookId] = useState("")
    const [pagesRead, setPagesRead] = useState("")

    // Kaydedilen okuma kayıtlarından (hangi kitap olduğuna bakılmaksızın) gün kümesi oluştur
    const readDayKeys = new Set(
        logs.map((log) => new Date(log.createdAt).toDateString())
    )

    const today = new Date()
    const jsDay = today.getDay() // 0-6, Pazar=0
    const todayIndex = jsDay === 0 ? 6 : jsDay - 1 // Pt=0 ... Pa=6

    // Bu haftanın Pazartesi'si
    const monday = new Date(today)
    monday.setDate(today.getDate() - todayIndex)

    const completedDays = DAYS.map((_, index) => {
        const d = new Date(monday)
        d.setDate(monday.getDate() + index)
        return readDayKeys.has(d.toDateString())
    })

    const isTodayRead = completedDays[todayIndex]

    // Bugünden (bugün okunmadıysa dünden) geriye doğru kaç gün üst üste okuma var
    let streakCount = 0
    const cursor = new Date(today)
    if (!isTodayRead) {
        cursor.setDate(cursor.getDate() - 1)
    }
    while (readDayKeys.has(cursor.toDateString())) {
        streakCount++
        cursor.setDate(cursor.getDate() - 1)
    }

    const bookOptions = booksList.map((b) => ({ label: b.title, value: b.id }))

    const openModal = () => {
        setSelectedBookId("")
        setPagesRead("")
        setShowModal(true)
    }

    const onSave = async () => {
        const success = await handleAddLog(selectedBookId, pagesRead)
        if (success) {
            setShowModal(false)
        }
    }

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
                    {DAYS.map((day, index) => (
                        <View key={day} style={styles.dayContainer}>
                            <Text style={styles.dayText}>{day}</Text>
                            <View style={[styles.dayCircle, completedDays[index] && styles.dayCircleCompleted]} />
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.bottomSection}>
                <Text style={styles.questionText}>
                    {isTodayRead ? "Bugün bir kitap okudun, tebrikler! 🎉" : "Bugün kitap okudun mu?"}
                </Text>
                <TouchableOpacity style={styles.actionButton} activeOpacity={0.8} onPress={openModal}>
                    <Text style={styles.actionButtonText}>{isTodayRead ? "Tekrar Ekle" : "Evet, okudum!"}</Text>
                </TouchableOpacity>
            </View>

            <Modal visible={showModal} transparent animationType="slide" statusBarTranslucent onRequestClose={() => setShowModal(false)}>
                <View style={styles.overlay}>
                    <View style={styles.sheet}>
                        <View style={styles.handle} />
                        <Text style={styles.sheetTitle}>Bugün Ne Okudun?</Text>

                        <View style={styles.modalField}>
                            <Picker
                                label={"Kitap"}
                                placeholder={"Kitap Seçiniz"}
                                value={selectedBookId}
                                onValueChange={setSelectedBookId}
                                options={bookOptions}
                                modalTitle={"Kitap Seç"}
                            />
                        </View>

                        <Input
                            label={"Kaç Sayfa Okudun?"}
                            placeholder={"ör. 25"}
                            value={pagesRead}
                            onChangeText={setPagesRead}
                            keyboardType="numeric"
                        />

                        <TouchableOpacity style={styles.saveBtn} onPress={onSave} disabled={loading}>
                            <Text style={styles.saveBtnText}>{loading ? "Kaydediliyor..." : "Kaydet"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelBtn} onPress={() => setShowModal(false)}>
                            <Text style={styles.cancelBtnText}>İptal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
};
