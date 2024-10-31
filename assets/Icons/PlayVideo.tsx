import Svg, { G, Path, Mask, Rect, SvgProps } from "react-native-svg";
export default function PlayVideo() {
  return (
   <Svg width={40} height={40} viewBox="0 0 40 40" fill="none">
      <Mask id="mask0_238_1340" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
        <Rect width="40" height="40" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_238_1340)">
        <Path d="M13.333 31.6663V8.33301L31.6663 19.9997L13.333 31.6663Z" fill="black" />
      </G>
    </Svg>
  )
}
