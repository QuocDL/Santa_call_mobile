import images from "@/assets/images";
import ProviderContent from "@/components/_common/ProviderContent";
import TabBarMenu from "@/components/TabBarMenu";
import { Link } from "expo-router";
import HomePage from "../(pages)/home/HomePage";
export default function HomeScreen() {
  return (
    <ProviderContent backgroundImage={images.bgImage} enableScroll={true}>
      <TabBarMenu />
      <HomePage />

      <Link href={"/auth/login"}>Go</Link>
    </ProviderContent>
  );
}
