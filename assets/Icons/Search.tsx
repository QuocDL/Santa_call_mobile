import React from 'react';
import Svg, { G, Mask, Rect, Path } from 'react-native-svg';

const SVGComponent = () => {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
    <Mask id="mask0_238_1323" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="30" height="30">
      <Rect width="30" height="30" fill="#D9D9D9" />
    </Mask>
    <G mask="url(#mask0_238_1323)">
      <Path 
        d="M24.5 26.25L16.625 18.375C16 18.875 15.2812 19.2708 14.4688 19.5625C13.6562 19.8542 12.7917 20 11.875 20C9.60417 20 7.68229 19.2135 6.10938 17.6406C4.53646 16.0677 3.75 14.1458 3.75 11.875C3.75 9.60417 4.53646 7.68229 6.10938 6.10938C7.68229 4.53646 9.60417 3.75 11.875 3.75C14.1458 3.75 16.0677 4.53646 17.6406 6.10938C19.2135 7.68229 20 9.60417 20 11.875C20 12.7917 19.8542 13.6562 19.5625 14.4688C19.2708 15.2812 18.875 16 18.375 16.625L26.25 24.5L24.5 26.25ZM11.875 17.5C13.4375 17.5 14.7656 16.9531 15.8594 15.8594C16.9531 14.7656 17.5 13.4375 17.5 11.875C17.5 10.3125 16.9531 8.98438 15.8594 7.89062C14.7656 6.79688 13.4375 6.25 11.875 6.25C10.3125 6.25 8.98438 6.79688 7.89062 7.89062C6.79688 8.98438 6.25 10.3125 6.25 11.875C6.25 13.4375 6.79688 14.7656 7.89062 15.8594C8.98438 16.9531 10.3125 17.5 11.875 17.5Z" 
        fill="#1C1B1F" 
      />
    </G>
  </Svg>
  );
};

export default SVGComponent;