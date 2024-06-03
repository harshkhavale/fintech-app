import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

const Page = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const keyboardOffset = Platform.OS === "ios" ? 90 :0;
  const onSignup = async () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={{flex:1}} keyboardVerticalOffset={keyboardOffset}>

    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Let's get started!</Text>
      <Text style={defaultStyles.descriptionText}>
        Enter your phone number. We will send you a confirmation code here
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="Country code"
          value={countryCode}
          placeholderTextColor={Colors.gray}
        />
        <TextInput
          style={[styles.input, { flex: 5 }]}
          placeholder="Mobile number"
          keyboardType="numeric"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholderTextColor={Colors.gray}
        />
      </View>
      <Link href={"/login"} replace asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Already have an account? Log in
          </Text>
        </TouchableOpacity>
      </Link>
      <View style={{ flex:1}}/>
      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          phoneNumber !== "" ? styles.enabled : styles.disabled,
          { marginBottom: 20 },
        ]}
      ><Text style={defaultStyles.buttonText}>Sign up</Text></TouchableOpacity>
    </View>
    </KeyboardAvoidingView>

  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    fontSize: 20,
    marginRight: 10,
    borderRadius: 16,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
export default Page;
