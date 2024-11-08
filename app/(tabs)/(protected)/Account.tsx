import FormUpdateProfile from "@/components/Pages/Account/FormUpdateProfile";
import SettingsBox from "@/components/Pages/Account/SettingsBox";
import ShowProfileBox from "@/components/Pages/Account/ShowProfileBox";
import StatisticalBox from "@/components/Pages/Account/StatisticalBox";
import images from "@/assets/images";
import ProviderContent from "@/components/Provider/ProviderContent";
import KeyboardDismissWrapper from "@/components/_element/KeyboarDimiss";
import { TabBarMenu } from "@/components/_common/TabBarMenu";
import { useGetProfile } from "@/hooks/query/auth/useGetProfile";
import { useTypedSelector } from "@/redux/store";
import { View } from "react-native";


export default function Account() {
  const user = useTypedSelector(state => state.auth.user)
  const {data} = useGetProfile(user?.id_user)
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
        <View className="px-[4%] mt-6">
          {/* box infomation user */}
          <ShowProfileBox user={data?.data}/>
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
