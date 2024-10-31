import FormUpdateProfile from "@/app/(pages)/Account/FormUpdateProfile";
import SettingsBox from "@/app/(pages)/Account/SettingsBox";
import ShowProfileBox from "@/app/(pages)/Account/ShowProfileBox";
import StatisticalBox from "@/app/(pages)/Account/StatisticalBox";
import images from "@/assets/images";
import ProviderContent from "@/components/Provider/ProviderContent";
import KeyboardDismissWrapper from "@/components/_common/KeyboarDimiss";
import { TabBarMenu } from "@/components/_common/TabBarMenu";
import { useMediaPhone } from "@/hooks/useMediaPhone";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Foundation from "@expo/vector-icons/Foundation";
import { useRef, useState } from "react";
import { Control, Controller, useForm } from "react-hook-form";
import { Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Account() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      viewScroll={"flatlist"}
      overflowBottom={{ enable: true, height: 30 }}
      showScrollBarY={false}
    >
      <KeyboardDismissWrapper style={{ flex: 1 }}>
        <TabBarMenu enableSearch={false} />
        <View className="px-[4%] mt-6">
          {/* box infomation user */}
          <ShowProfileBox/>
          {/* Form Update Profile */}
          <FormUpdateProfile/>
          {/* Setting box */}
          <SettingsBox/>
          <StatisticalBox/>
        </View>
      </KeyboardDismissWrapper>
    </ProviderContent>
  );
}
