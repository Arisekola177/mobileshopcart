
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { useCallback, useState } from "react";
import { Link, useRouter } from "expo-router";
import { router } from "expo-router";
import InputField from "@/components/InputField";
import { icons } from "@/constants";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";

const SignIn = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // const onSignInPress = useCallback(async () => {
  //   if (!isLoaded) return;

  //   try {
  //     const signInAttempt = await signIn.create({
  //       identifier: form.email,
  //       password: form.password,
  //     });

  //     if (signInAttempt.status === "complete") {
  //       await setActive({ session: signInAttempt.createdSessionId });
  //       router.replace("/(root)/(tabs)/home");
  //     } else {
  //       // See https://clerk.com/docs/custom-flows/error-handling for more info on error handling
  //       console.log(JSON.stringify(signInAttempt, null, 2));
  //       Alert.alert("Error", "Log in failed. Please try again.");
  //     }
  //   } catch (err: any) {
  //     console.log(JSON.stringify(err, null, 2));
  //     Alert.alert("Error", err.errors[0].longMessage);
  //   }
  // }, [isLoaded, form]);


  const onSignInPress = () => {

  }
  return (
    <ScrollView className="flex-1 bg-white">
        <View className="relative w-full flex items-center justify-center h-[200px] ">
          <Text className="text-3xl text-black font-JakartaExtraBold absolute bottom-5 left-5">
            Welcome Back!
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <InputField
            label="Password"
            placeholder="Enter password"
            icon={icons.lock}
            secureTextEntry={true}
            textContentType="password"
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
       <Link href="/forgotPassword" className="text-sm ">
            <Text className="text-red-500">Forgot Password?</Text>
          </Link>

          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-10"
          />

          <OAuth />

          <Link
            href="/signUp"
            className="text-lg text-center text-general-200 mt-10"
          >
            Don't have an account?{" "}
            <Text className="text-red-500">Sign Up</Text>
          </Link>
        </View>
     
    </ScrollView>
  );
};

export default SignIn;
