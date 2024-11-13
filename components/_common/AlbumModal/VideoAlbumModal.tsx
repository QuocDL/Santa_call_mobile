import { Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
   Dimensions,
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
import ModalViewImage from "./DetailImageModal";
import { demoImage } from "@/constants/DemoData";
export default function ModalAlbumVideo({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: number | string;
}) {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const {width ,height} = Dimensions.get('window')
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
          <View className="bg-white overflow-hidden w-[95vw] max-h-[75vh] rounded-md relative">
            <Shadow style={{ width: "100%" }}>
              <View className="flex flex-row px-[2%] py-2  justify-between items-center">
                <View>
                  <Text className="text-lg font-bold">Album name {id}</Text>
                  <Text className="font-medium">12/10/2024</Text>
                </View>
                <View className="flex flex-row gap-2">
                  <FontAwesome5 name="trash" size={24} color="#CF3736" />
                  <Feather name="download" size={24} color="#CF3736" />
                  <Entypo name="share" size={24} color="#CF3736" />
                </View>
              </View>
            </Shadow>
            <FlatList
              className="pb-4 pt-4"
              data={demoImage}
              ListFooterComponent={<View className="w-full h-6"></View>}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              columnWrapperStyle={{
                justifyContent: "center",
                gap: 10,
              }}
              renderItem={({ item }) => (
                <ModalViewImage image={item}>
                  <Image
                  style={{width: width * 0.44, height: height * 0.28}}
                    className="rounded-md"
                    source={{ uri: item }}
                  />
                </ModalViewImage>
              )}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
