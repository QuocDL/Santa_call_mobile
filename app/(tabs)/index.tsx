import images from "@/assets/images";
import ProviderContent from "@/components/Provider/ProviderContent";
import TabBarMenu from "@/components/_common/TabBarMenu";
import HomePage from "../(pages)/home/HomePage";
export default function HomeScreen() {
  return (
    <ProviderContent enablePullToRefresh backgroundImage={images.bgImage} viewScroll={'flatlist'} overflowBottom={{enable: true, heigth: 30}}>
      <TabBarMenu />
      <HomePage />
    </ProviderContent>
  );
}
