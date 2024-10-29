import Svg, { G, Path, Mask, Rect, SvgProps } from "react-native-svg";
export default function SVGComponent() {
  return (
    <>
      <Svg width={"30"} height={"30"} viewBox="0 0 30 30" fill="none">
        <Path
          d="M5 25C4.3125 25 3.72417 24.7554 3.235 24.2663C2.74583 23.7771 2.50083 23.1883 2.5 22.5V7.5C2.5 6.8125 2.745 6.22417 3.235 5.735C3.725 5.24583 4.31333 5.00083 5 5H25C25.6875 5 26.2763 5.245 26.7663 5.735C27.2563 6.225 27.5008 6.81333 27.5 7.5V22.5C27.5 23.1875 27.2554 23.7763 26.7663 24.2663C26.2771 24.7563 25.6883 25.0008 25 25H5ZM15 16.25L25 10V7.5L15 13.75L5 7.5V10L15 16.25Z"
          fill={"#ffffff"}
        />
      </Svg>
    </>
  );
}