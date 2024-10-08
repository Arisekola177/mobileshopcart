
import { router } from "expo-router";
import { Alert, Image, Text, View } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "../constants";


const OAuth = () => {
  // const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  // const handleGoogleSignIn = async () => {
  //   const result = await googleOAuth(startOAuthFlow);

  //   if (result.code === "session_exists") {
  //     Alert.alert("Success", "Session exists. Redirecting to home screen.");
  //     router.replace("/(root)/(tabs)/home");
  //   }

  //   Alert.alert(result.success ? "Success" : "Error", result.message);
  // };

  return (
    <View>
      <View className="flex justify-center items-center mt-4 gap-x-3">
        
        <View className="flex-1 h-[1px] bg-red-500" />
        <Text className="text-lg font-JakartaSemiBold">OR Continue With</Text>
        <View className="flex-1 h-[1px] bg-red-500" />

        <View className="flex flex-row py-6 items-center justify-center gap-2">
            <View className="rounded-full flex items-center justify-center p-2 border-red-500 border-[1px]">
            <Image
             source={icons.google}
           resizeMode="contain"
         className="w-5 h-5 mx-2"
/>
            </View>
            <View className="rounded-full flex items-center justify-center p-2 border-red-500 border-[1px]">
            <Image
source={icons.google}
resizeMode="contain"
className="w-5 h-5 mx-2"
/>
            </View>
            <View className="rounded-full flex items-center justify-center p-2 border-red-500 border-[1px]">
            <Image
source={icons.google}
resizeMode="contain"
className="w-5 h-5 mx-2"
/>
            </View>
        </View>
      </View>

     
    </View>
  );
};


export default OAuth;
