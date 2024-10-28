import images from "@/assets/images";
import ProviderContent from "@/components/_common/ProviderContent";
import TabBarMenu from "@/components/TabBarMenu";
import { Link } from "expo-router";
import HomePage from "../(pages)/home/HomePage";
export default function HomeScreen() {
  return (
    <ProviderContent
      backgroundImage={images.bgImage}
      enableScroll={true}
      classNameScroll="min-h-screen"
    >
      <TabBarMenu />
      <HomePage/>
      <Link href={'/swap/swap-image/2'}>Go</Link>
    </ProviderContent>
  );
}
