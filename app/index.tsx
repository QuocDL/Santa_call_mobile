import images from "@/assets/images";
import ProviderContent from "@/components/Provider/ProviderContent";
import WelcomeContent from "@/components/_element/WelcomeScreen/WelcomeContent";
import { Redirect, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch, useTypedSelector } from "@/redux/store";
import { useRouterProtected } from "@/hooks/Protected/useRouterProtected";
import { setModalOpen } from "@/redux/slice/authSlice";
import { useBuyCoin } from "@/hooks/coins/mutations/useBuyCoin";
import { useToastController } from "@/hooks/useToastController";

export default function StartPage() {
  const [firstTry, setFirstTry] = useState<boolean | null>(true);
  const [loading, setLoading] = useState(true);
  const [pageIndex, setPageIndex] = useState(0);
  const opacity = useRef(new Animated.Value(1)).current;
  const router = useRouter();
  const dispatch = useAppDispatch()
  const payOption = useTypedSelector((state) => state.welcome.payOption);
  const isAuth = useTypedSelector(state=> state.auth.authenticate)
  const {ToastController} = useToastController()
  useEffect(() => {
    const checkFirstTry = async () => {
      const storedValue = await AsyncStorage.getItem("firstTry");
      if (storedValue === null) {
        await AsyncStorage.setItem("firstTry", "true");
        // setFirstTry(true);
      } else {
        // setFirstTry(storedValue === "true");
      }
      setLoading(false); // Đặt loading thành false sau khi hoàn thành kiểm tra
    };

    checkFirstTry();
  }, []);

  useEffect(() => {
    setPageIndex(0);
  }, [firstTry]);

  const goToPageIndex = async (index: number) => {
    if (index === 3) {
      if(!isAuth){
        router.navigate('/(tabs)')
        dispatch(setModalOpen())
      }else{
        // mutate(undefined, {onSuccess: ()=>{
        //   router.navigate('/(tabs)')
        // }})
        router.navigate('/(tabs)')
        ToastController({
          text: 'Demo version not pay',
          type: 'warning',
          duration: 3000,
          placement: 'top'
        })
      }
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setPageIndex(index);
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      });
    }
  };

  if (firstTry === false) {
    return <Redirect href={"/(tabs)"} />;
  }

  if (loading) {
    return null;
  }

  return (
    <ProviderContent backgroundImage={images.bgWelcome} viewScroll={"none"}>
      <View className={`mt-4 flex flex-col justify-between h-full`}>
        <Animated.View style={{ opacity }}>
          <WelcomeContent indexContent={pageIndex} />
        </Animated.View>
        <View className="mb-[15%]">
          <View>
            <View className="flex flex-col justify-center items-center ">
              <TouchableOpacity
                disabled={pageIndex === 2 ? !payOption : false}
                onPress={() => goToPageIndex(pageIndex + 1)}
                className={`${
                  pageIndex === 2
                    ? payOption
                      ? "bg-white"
                      : "bg-white/80"
                    : "bg-white"
                } duration-300 py-1.5 px-6 rounded-md `}
              >
                <Text className="text-[#CF3736] font-bold text-xl">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row gap-2 mt-2 justify-center items-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <TouchableOpacity
                 hitSlop={5}
                  key={index}
                  onPress={() => goToPageIndex(index)}
                  className={`h-3 rounded-full duration-300 ${
                    pageIndex === index ? "bg-black w-5" : "bg-white w-3"
                  }`}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    </ProviderContent>
  );
}
