import NavOptions from "@/components/NavOptions";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

export default function HomeScreen() {

  console.log(GOOGLE_MAPS_APIKEY);
  

  return (
    <SafeAreaView className="bg-white w-screen h-screen">
      <View className="p-5">
        <Image
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />

        {/* <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where From?"

        /> */}

        <NavOptions />
      </View>
    </SafeAreaView>
  );
}