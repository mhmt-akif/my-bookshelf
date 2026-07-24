import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const Header = ({
  onBackPress,
  leftIcon,
  title,
  rightIcon,
  onRightPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        
        {/* Sol Taraf: İkon varsa buton göster, yoksa simetri için boş kutu tut */}
        {leftIcon ? (
          <TouchableOpacity style={styles.iconBtn} onPress={onBackPress}>
            <AntDesign name={leftIcon} size={20} color="black" />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconBtn} />
        )}

        {/* Orta Taraf: Başlık */}
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

        {/* Sağ Taraf: İkon varsa buton göster, yoksa simetri için boş kutu tut */}
        {rightIcon ? (
          <TouchableOpacity style={styles.iconBtn} onPress={onRightPress}>
            <FontAwesome name={rightIcon} size={20} color="#8C491A" />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconBtn} />
        )}

      </View>
    </View>
  );
};