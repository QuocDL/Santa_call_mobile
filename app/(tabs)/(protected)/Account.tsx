import images from "@/assets/images";
import FormUpdateProfile from "@/components/Pages/Account/FormUpdateProfile";
import SettingsBox from "@/components/Pages/Account/SettingsBox";
import ShowProfileBox from "@/components/Pages/Account/ShowProfileBox";
import StatisticalBox from "@/components/Pages/Account/StatisticalBox";
import ProviderContent from "@/components/Provider/ProviderContent";
import { TabBarMenu } from "@/components/_common/TabBarMenu";
import KeyboardDismissWrapper from "@/components/_element/KeyboarDimiss";
import { useGetProfile } from "@/hooks/auth/queries/useGetProfile";
import { useTypedSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Animated, View } from "react-native";

export default function Account() {
  const user = useTypedSelector((state) => state.auth.user);
  const { data, isLoading } = useGetProfile(user?.id_user);
  const [fadeAnim] = useState(new Animated.Value(0)); 

  useEffect(() => {
    if (!isLoading) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start();
    }
  }, [isLoading, fadeAnim]);

  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll={"flatlist"}
      enablePullToRefresh
      queryKey={[`PROFILE_${user?.id_user}`]}
      overflowBottom={{ enable: true, height: 30 }}
    >
      <KeyboardDismissWrapper style={{ flex: 1 }}>
        <TabBarMenu enableSearch={false} />
        {!isLoading && (
          <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
            <View className="px-[4%] mt-6">
              {/* box information user */}
              <ShowProfileBox user={data?.data} />
              {/* Form Update Profile */}
              <FormUpdateProfile user={data?.data} />
              {/* Setting box */}
              <SettingsBox />
              <StatisticalBox />
            </View>
          </Animated.View>
        )}
        {isLoading && (
          <View
            className="w-full h-[50vh]"
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator color="white" size={'large'}/>
          </View>
        )}
      </KeyboardDismissWrapper>
    </ProviderContent>
  );
}
