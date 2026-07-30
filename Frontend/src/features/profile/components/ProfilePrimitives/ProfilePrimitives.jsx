import { View, Text, TouchableOpacity, TextInput } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import styles from "./styles"

export const ACCENT = "#C7753D"

/* ── Section Header ── */
export const SectionHeader = ({ title, icon }) => (
    <View style={styles.sectionHeader}>
        <Ionicons name={icon + "-outline"} size={16} color={ACCENT} />
        <Text style={styles.sectionTitle}>{title}</Text>
    </View>
)

/* ── Divider ── */
export const Divider = () => <View style={styles.divider} />

/* ── Setting Row ── */
export const SettingRow = ({ icon, label, value, onPress, rightElement }) => (
    <TouchableOpacity
        style={styles.settingRow}
        onPress={onPress}
        activeOpacity={onPress ? 0.7 : 1}
        disabled={!onPress && !rightElement}
    >
        <View style={styles.settingIcon}>
            <Ionicons name={icon + "-outline"} size={18} color={ACCENT} />
        </View>
        <Text style={styles.settingLabel}>{label}</Text>
        <View style={styles.settingRight}>
            {rightElement ? (
                rightElement
            ) : (
                <>
                    {value && <Text style={styles.settingValue}>{value}</Text>}
                    {onPress && <Ionicons name="chevron-forward" size={16} color="#B0A898" />}
                </>
            )}
        </View>
    </TouchableOpacity>
)
