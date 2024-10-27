import Svg, { G, Path, Mask, Rect, SvgProps } from "react-native-svg";
export default function SVGComponent({ color }: { color: string }) {
  return (
    <>
        <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Mask
        id="mask0_234_1079"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="40"
        height="40"
      >
        <Rect width="40" height="40" fill="white" />
      </Mask>
      <G mask="url(#mask0_234_1079)">
        <Path
          d="M11.6663 33.3337L3.33301 25.0003L11.6663 16.667L13.9997 19.042L9.70801 23.3337H21.6663V26.667H9.70801L13.9997 30.9587L11.6663 33.3337ZM28.333 23.3337L25.9997 20.9587L30.2913 16.667H18.333V13.3337H30.2913L25.9997 9.04199L28.333 6.66699L36.6663 15.0003L28.333 23.3337Z"
          fill={color}
        />
      </G>
    </Svg>
    </>
  );
}
