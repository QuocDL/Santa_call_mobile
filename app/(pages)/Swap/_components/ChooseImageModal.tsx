import images from "@/assets/images";
import SwapImageCard from "@/components/_common/ProductCard/SwapImageCard";
import { cardStyle } from "@/styles/CardStyle";
import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState, memo } from "react";
import {
    ActivityIndicator,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const demoNewUser = [
  { username: "Luis123", date: "24/10/2024" },
  { username: "Naruto", date: "22/10/2024" },
  { username: "kais098", date: "20/10/2024" },
  { username: "liaki111", date: "16/10/2024" },
  { username: "Lemon234", date: "14/10/2024" },
  { username: "Apple", date: "13/10/2024" },
  { username: "Apple", date: "13/10/2024" },
  { username: "Apple", date: "13/10/2024" },
  { username: "Apple", date: "13/10/2024" },
  { username: "Apple", date: "13/10/2024" },
];

const ProductCard = memo(({item}: any)=>{
    const [loadingImg, setLoadingImg] = useState<boolean>();
    return (
        <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => console.log('choose card')}
        className={`relative  bg-white overflow-hidden rounded-md flex flex-row justify-center items-center w-[145px] h-[176px]`}
      >
        {loadingImg && (
          <View
            className="w-full h-full"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator color="#C90019" />
          </View>
        )}
        <Image
          source={
            item.image
              ? typeof item.image === "string"
                ? { uri: item.image }
                : item.image
              : images.featuredImage
          }
          resizeMode={'cover'}
          onLoadStart={() => setLoadingImg(true)}
          onLoadEnd={() => setLoadingImg(false)}
        />
        <View
          className={`absolute bottom-0 w-full  pb-1 px-1`}
          style={cardStyle.background}
        >
          <View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              className={`font-bold text-white w-[60%]`}
            >
             Name photo
            </Text>
            <Text className="text-white text-xs mt-1">
              Download: 230
            </Text>
          </View>
          <TouchableOpacity className={`absolute right-1 top-2  bg-[#C90019] py-1 px-3 rounded-md`}>
            <Text className="text-white">Use</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    )
})

const ChooseImageModal = memo(
  ({
    children,
    classNameButton,
  }: {
    children: React.ReactNode;
    classNameButton?: string;
  }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleOpenModal = () => {
      setModalVisible(true);
    };

    return (
      <>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.overlay} pointerEvents="box-none">
            <TouchableOpacity
              style={StyleSheet.absoluteFill}
              activeOpacity={1}
              onPress={() => setModalVisible(false)}
            />
            <View className="bg-white  h-[43vh] w-[95vw] rounded-md overflow-hidden">
              <View className="py-4 px-4 bg-black">
                <Text className="text-xl text-white font-bold">
                  Quick swap image
                </Text>
              </View>
              <View>
                <FlatList
                className="mt-8 px-[4%]"
                  data={demoNewUser}
                  contentContainerStyle={{
                    gap:15
                  }}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={(item, index) => index.toString()}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  renderItem={({ item, index }) => (
                    <ProductCard item={item}/>
                  )}
                  ListFooterComponent={() => <View className="h-[8vh]"></View>}
                />
              </View>
              <View className="flex flex-row justify-end mt-8 mr-6">
                <TouchableOpacity activeOpacity={0.9} onPress={()=> setModalVisible(false)} className="bg-[#FF0000] px-4 py-1.5 rounded-md">
                    <Text className="text-white font-bold text-xl">Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          className={classNameButton}
          onPress={handleOpenModal}
          activeOpacity={0.9}
        >
          {children}
        </TouchableOpacity>
      </>
    );
  }
);

export default ChooseImageModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
