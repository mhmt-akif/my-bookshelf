import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export const Picker = ({
  label,
  placeholder = "Seçiniz",
  value,
  onValueChange,
  options = [],
  containerStyle,
  modalTitle,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  // Normalizing option items
  const formattedOptions = options.map((opt) => {
    if (typeof opt === "object" && opt !== null) {
      return { label: opt.label, value: opt.value };
    }
    return { label: String(opt), value: String(opt) };
  });

  const selectedOption = formattedOptions.find((opt) => opt.value === value);

  const handleSelect = (itemValue) => {
    if (onValueChange) {
      onValueChange(itemValue);
    }
    setIsVisible(false);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity
        style={styles.pickerTrigger}
        onPress={() => setIsVisible(true)}
        activeOpacity={0.7}
      >
        <Text
          style={selectedOption ? styles.valueText : styles.placeholderText}
          numberOfLines={1}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <Ionicons name="chevron-down" size={20} color="#8C8881" />
      </TouchableOpacity>

      <Modal
        visible={isVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <View style={styles.dragHandle} />
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>
                    {modalTitle || label || "Seçim Yapın"}
                  </Text>
                  <TouchableOpacity
                    onPress={() => setIsVisible(false)}
                    style={styles.closeButton}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  >
                    <Ionicons name="close" size={24} color="#2C2C2C" />
                  </TouchableOpacity>
                </View>

                <FlatList
                  data={formattedOptions}
                  keyExtractor={(item, index) => `${item.value}-${index}`}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={styles.listContent}
                  renderItem={({ item }) => {
                    const isSelected = item.value === value;
                    return (
                      <TouchableOpacity
                        style={[
                          styles.optionItem,
                          isSelected && styles.selectedOptionItem,
                        ]}
                        onPress={() => handleSelect(item.value)}
                        activeOpacity={0.7}
                      >
                        <Text
                          style={[
                            styles.optionText,
                            isSelected && styles.selectedOptionText,
                          ]}
                        >
                          {item.label}
                        </Text>
                        {isSelected && (
                          <Ionicons
                            name="checkmark-circle"
                            size={22}
                            color="#FFFFFF"
                          />
                        )}
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
