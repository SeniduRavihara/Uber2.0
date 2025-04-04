import NavOptions from "@/components/NavOptions";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

export default function HomeScreen() {


  return (
    <SafeAreaView className="bg-white w-screen h-screen">
      <View className="p-5">
        <Image
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />

        <GooglePlacesAutocomplete
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          enablePoweredByContainer={false}
          debounce={400}
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
}