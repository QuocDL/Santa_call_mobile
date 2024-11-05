import { Redirect } from "expo-router";

export default function NonActiveScreen() {
  return <Redirect href={'/swap/QuickSwap'}/>;
}
