import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
const MapScreen = () => {
  return (
    <SafeAreaView className='bg-black flex-1'>
      <View className='h-1/2 bg-red-500'>

      </View>

      <View className='h-1/2 bg-blue-500'>
        <Text className='text-white'>I'm the map screen</Text>
      </View>
    </SafeAreaView>
  )
}
export default MapScreen