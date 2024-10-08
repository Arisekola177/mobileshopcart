
import { useState } from "react";
import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { GoogleInputProps } from "@/types/type";
import { icons } from "../constants";
import { Text } from "react-native";

const GoogleTextInput = ({
 
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View
      className={`flex flex-row items-center justify-center z-50 p-1 rounded-xl border-[1px] border-gray-300 relative ${containerStyle}`}
    >
      <TextInput
        className="flex-1 h-10 px-4 rounded-lg bg-white"
        placeholder= "Search any product"
        placeholderTextColor="gray"
        style={{
          backgroundColor: textInputBackgroundColor || "white",
          fontSize: 16,
          fontWeight: "600",
        }}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

export default GoogleTextInput;

 