import { Href, Link } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
interface CustomLinkProps {
   href:  Href,
   setColorDeActive: string,
   setColorActive: string,
   className?: string
   title: string
 }
 
export default function PressLink({href, setColorDeActive,setColorActive,className, title}: CustomLinkProps) {
   const [isPressed, setIsPressed] = useState(false);

   return (
      <TouchableWithoutFeedback
         onPressIn={() => setIsPressed(true)} 
         onPressOut={() => setIsPressed(false)} 
      >
         <Link href={href} suppressHighlighting={true}>
            <Text
               className={`${className} `}
               style={{
                  color: isPressed ? setColorActive  :setColorDeActive, 
               }}
            >
               {title}
            </Text>
         </Link>
      </TouchableWithoutFeedback>
   );
}
