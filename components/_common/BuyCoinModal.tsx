import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import images from "@/assets/images";
import { useAppDispatch, useTypedSelector } from "@/redux/store";
import { setModalOpen } from "@/redux/slice/authSlice";
import { useBuyCoin } from "@/hooks/coins/mutations/useBuyCoin";
import { useToastController } from "@/hooks/useToastController";

const demoCard = [
  {
    id: 1,
    image: images.card.master,
    title: "Business card",
    number: "**********567",
  },
  {
    id: 2,
    image: images.card.jcb,
    title: "Japan Credit",
    number: "*********6512",
  },
  {
    id: 3,
    image: images.card.visa,
    title: "Employee salary",
    number: "*********6562",
  },
];

export default function BuyCoinModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectCard, setSelectCard] = useState<{
    id: number;
    title: string;
    image: string;
    number: string;
  } | null>(null);
  const isAuth = useTypedSelector((state) => state.auth.authenticate);
  const dispatch = useAppDispatch();
  const [payOption, setPayOption] = useState<boolean>(false);
  const handleOpenModal = () => {
    if (isAuth) {
      setModalVisible(true);
    } else {
      dispatch(setModalOpen());
    }
  };
  const { ToastController } = useToastController();
  const demoHandleBuyCoin = () => {
    // mutate(undefined, {
    //   onSuccess: ()=>{
    //     ToastController({
    //       text: "Purchase Successfull!",
    //       type: 'success',
    //       duration: 3000,
    //       placement: 'top'
    //     })
    //     setModalVisible(false)
    //   }
    // })
    ToastController({
      text: "Demo version not pay",
      type: "warning",
      duration: 3000,
      placement: "top",
    });
    setModalVisible(false)
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
          <View className="bg-[#CF3736] overflow-hidden w-[95vw] rounded-md ">
            <View className="flex justify-between shrink-0 flex-row items-center py-1.5 px-2">
              <Text className="text-white text-xl font-bold">
                Add more coins
              </Text>
              <AntDesign
                onPress={() => setModalVisible(!modalVisible)}
                name="close"
                size={22}
                color="white"
              />
            </View>
            <View className="bg-white px-4">
              <View className="mt-6 flex flex-col justify-center">
                <View className="flex flex-row justify-center gap-2 items-center">
                  <Text className="font-bold text-xl text-[#CF3736]">100</Text>
                  <Image source={images.coinImage} />
                  <Text className="font-bold text-xl text-[#CF3736]">= $3</Text>
                </View>
                <View className="flex justify-center flex-row mt-4">
                  <TouchableOpacity
                    className="bg-[#CF3736] relative px-6 rounded-md mt-2"
                    activeOpacity={0.8}
                    onPress={() => setPayOption(!payOption)}
                  >
                    <View className="flex flex-row gap-2 py-2 items-center">
                      <Text className="text-white font-medium text-2xl">
                        Payment $3
                      </Text>
                      <View
                        className={`w-5 h-5 ${
                          payOption ? "bg-green-500" : "bg-white"
                        } border-2 border-white rounded-full`}
                      ></View>
                    </View>
                  </TouchableOpacity>
                </View>
                <Text className="mt-4 text-sm">
                  *Attention: Each photo or video swap will be -1 coin
                </Text>
                <View className="flex flex-row gap-1 justify-center mt-3">
                  {demoCard.map((item, index) => (
                    <TouchableOpacity
                      onPress={() =>
                        setSelectCard(selectCard === item ? null : item)
                      }
                      key={item.id}
                      className={`${
                        selectCard?.id === item.id && "bg-[#CF3736]"
                      } p-2 max-w-[104px] border-[1px] gap-2 flex flex-col items-center min-h-[130px] border-black rounded-md`}
                    >
                      <Image source={item.image} />
                      <View>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          className={`${
                            selectCard?.id === item.id
                              ? "text-white"
                              : "text-[#CF3736]"
                          } text-xs `}
                        >
                          {item.title}
                        </Text>
                        <Text
                          numberOfLines={1}
                          ellipsizeMode="tail"
                          className={`${
                            selectCard?.id === item.id
                              ? "text-white"
                              : "text-[#CF3736]"
                          } text-xs `}
                        >
                          {item.number}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
                <Text className="mt-2 text-sm">
                  *Add payment methods in settings
                </Text>
                <View className="flex justify-end flex-row gap-2 mb-4 mt-2">
                  <Pressable
                    className="bg-[#CF3736] min-w-[65px] py-2.5 rounded-md flex justify-center items-center px-2"
                    onPress={() => setModalVisible(false)}
                  >
                    <Text className="text-white">Cancel</Text>
                  </Pressable>
                  <Pressable
                    disabled={!payOption}
                    className={`${
                      payOption ? "bg-[#00C016]" : "bg-green-400"
                    } min-w-[65px] py-2.5 rounded-md flex justify-center items-center px-2`}
                    onPress={demoHandleBuyCoin}
                  >
                    <Text className="text-white">Ok</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={handleOpenModal} activeOpacity={0.6}>
        {children}
      </TouchableOpacity>
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
