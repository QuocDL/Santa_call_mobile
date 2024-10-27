import React from 'react';
import Svg, { G, Mask, Rect, Path } from 'react-native-svg';

const SVGComponent = ({ color }: { color: string }) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Mask id="mask0_240_1785" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
        <Rect width="40" height="40" fill="#D9D9D9" />
      </Mask>
      <G mask="url(#mask0_240_1785)">
        <Path 
          d="M8.33333 35C7.41667 35 6.63194 34.6736 5.97917 34.0208C5.32639 33.3681 5 32.5833 5 31.6667V8.33333C5 7.41667 5.32639 6.63194 5.97917 5.97917C6.63194 5.32639 7.41667 5 8.33333 5H31.6667C32.5833 5 33.3681 5.32639 34.0208 5.97917C34.6736 6.63194 35 7.41667 35 8.33333V31.6667C35 32.5833 34.6736 33.3681 34.0208 34.0208C33.3681 34.6736 32.5833 35 31.6667 35H8.33333ZM8.33333 31.6667H31.6667V8.33333H8.33333V31.6667ZM10 28.3333H30L23.75 20L18.75 26.6667L15 21.6667L10 28.3333Z" 
          fill={color} // Sử dụng màu từ props
        />
      </G>
    </Svg>
  );
};

export default SVGComponent;