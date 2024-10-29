import { Feather } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text } from "react-native";

const CheckBox = ({
   onChange,
   checked,
}: {
   onChange: () => void;
   checked: boolean;
}) => {
   return (
      <Pressable
         className={`w-5 h-5 flex-row justify-center items-center rounded-bottom border border-[#FFFFFF] rounded-sm ${checked && "bg-[#FF0200]"
            }`}
         onPress={onChange}
      >
         <FontAwesome
            name="check"
            size={14}
            color={`${checked ? "white" : "transparent"}`}
         />
      </Pressable>
   );
};

export default CheckBox;