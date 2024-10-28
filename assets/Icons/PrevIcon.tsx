import Svg, { G, Path, Mask, Rect, SvgProps } from "react-native-svg";
export default function SVGComponent({ width = 16, height = 25, color = 'white' }) {
  return (
    <>
        <Svg width={width} height={height} viewBox="0 0 16 25" fill="none">
    <Path d="M15 1L2 12.5L15 24" stroke={color} strokeWidth="2" />
  </Svg>
    </>
  );
}
