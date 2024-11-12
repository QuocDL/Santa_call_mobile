import {
  Entypo,
  Feather,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
export default function ModalViewImage({
  children,
  image,
}: {
  children: React.ReactNode;
  image?: string;
}) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Pressable onPress={() => setOpen(true)}>{children}</Pressable>
      <Modal animationType="fade" transparent={true} visible={isOpen}>
        <View style={styles.overlay} pointerEvents="box-none">
          <TouchableOpacity
            style={StyleSheet.absoluteFill}
            activeOpacity={1}
            onPress={() => setOpen(false)}
          />
          <View className="bg-transparent overflow-hidden w-[95vw] relative">
            <Image source={{ uri: image }} className=" h-[50vh] rounded-md" />
            <View>
              <View className="flex flex-row justify-between mt-4">
                <TouchableOpacity className="bg-white py-1.5 rounded-sm flex flex-row justify-center w-1/4">
                  <MaterialIcons name="skip-previous" size={24} color="black" />
                  <Text className="text-black text-base font-medium">Back</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-white py-1.5 rounded-sm flex flex-row justify-center  w-1/4">
                  <Text className="text-black text-base font-medium">Next</Text>
                  <MaterialIcons name="skip-next" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity className="flex justify-center w-full py-2 rounded-md mt-4 flex-row bg-[#CF3736]">
                <Feather name="download" size={24} color="white" />
                <Text className="text-white text-lg font-bold ml-2">
                  Download
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
});
