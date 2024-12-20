import Svg, { G, Path, Mask, Rect, SvgProps } from "react-native-svg";
export default function AddphotoIcon() {
   return (
      <>
         <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <Mask id="mask0_245_2571" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
               <Rect width="40" height="40" fill="#D9D9D9" />
            </Mask>
            <G mask="url(#mask0_245_2571)">
               <Path
                  d="M8.33333 35C7.41667 35 6.63194 34.6736 5.97917 34.0208C5.32639 33.3681 5 32.5833 5 31.6667V8.33333C5 7.41667 5.32639 6.63194 5.97917 5.97917C6.63194 5.32639 7.41667 5 8.33333 5H23.3333C22.7778 5.72222 22.3611 6.51389 22.0833 7.375C21.8056 8.23611 21.6667 9.11111 21.6667 10C21.6667 12.3056 22.4792 14.2708 24.1042 15.8958C25.7292 17.5208 27.6944 18.3333 30 18.3333C30.8889 18.3333 31.7639 18.1944 32.625 17.9167C33.4861 17.6389 34.2778 17.2222 35 16.6667V31.6667C35 32.5833 34.6736 33.3681 34.0208 34.0208C33.3681 34.6736 32.5833 35 31.6667 35H8.33333ZM10 28.3333H30L23.75 20L18.75 26.6667L15 21.6667L10 28.3333ZM28.3333 15V11.6667H25V8.33333H28.3333V5H31.6667V8.33333H35V11.6667H31.6667V15H28.3333Z"
                  fill="#CF3736"
               />
            </G>
         </Svg>
      </>
   );
}
