import images from "@/assets/images";
import ProviderContent from "@/components/Provider/ProviderContent";
import TabBarMenu from "@/components/_element/TabBarMenu";
import { Link } from "expo-router";
import HomePage from "../(pages)/home/HomePage";
export default function HomeScreen() {
  return (
    <ProviderContent backgroundImage={images.bgImage} viewScroll={'flatlist'} classNameScroll="min-h-screen">
      <TabBarMenu />
      <HomePage />
      <Link href={"/auth/login"}>Go</Link>
    </ProviderContent>
  );
}
