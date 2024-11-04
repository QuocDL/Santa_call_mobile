import AntDesign from "@expo/vector-icons/AntDesign";
import React, { useState, memo } from "react";
import {
   FlatList,
   Modal,
   StyleSheet,
   Text,
   TouchableOpacity,
   View
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

// Component render từng item trong FlatList
const RenderItem = memo(({ item, index }: any) => (
  <View
    className="flex flex-row px-3 justify-between py-1.5"
    style={{
      backgroundColor: index % 2 === 0 ? "#A3A3A3" : "white",
    }}
  >
    <Text
      className={`text-base font-medium ${index === 0 ? "text-white" : "text-black"}`}
      numberOfLines={1}
      ellipsizeMode="tail"
      style={{ width: "45%" }}
    >
      {item.username}
    </Text>
    <View className="flex flex-row justify-start w-[45%]">
      <Text className={`text-base font-medium ${index === 0 ? "text-white" : "text-black"}`}>
        {item.date}
      </Text>
    </View>
  </View>
));

const ViewUserModal = memo(({ children }: { children: React.ReactNode }) => {
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
          <View className="bg-black h-[40vh] rounded-md overflow-hidden">
            <View className="flex flex-row px-3 justify-between py-1.5">
              <Text className="text-[#FF0423] font-bold text-lg">All new user</Text>
              <AntDesign name="right" size={24} color="#FF0423" />
            </View>
            <View className="flex flex-row px-3 justify-between py-1.5">
              <View>
                <Text className="text-white">Login Name</Text>
              </View>
              <View className="flex flex-row justify-start w-[45%]">
                <Text className="text-white">Join Date</Text>
              </View>
            </View>
            <View className="bg-white">
              <FlatList
                data={demoNewUser}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => <RenderItem item={item} index={index} />}
                ListFooterComponent={()=>(
                  <View className="h-[8vh]"></View>
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={handleOpenModal} activeOpacity={0.6}>
        {children}
      </TouchableOpacity>
    </>
  );
});

export default ViewUserModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
});
