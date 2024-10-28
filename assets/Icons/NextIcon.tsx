import Svg, { G, Path, Mask, Rect, SvgProps } from "react-native-svg";
export default function SVGComponent() {
  return (
    <>
        <Svg width={'16'} height={'25'} viewBox="0 0 16 25" fill="none">
    <Path d="M1 1L14 12.5L1 24" stroke={'white'} strokeWidth="2" />
  </Svg>
    </>
  );
}
