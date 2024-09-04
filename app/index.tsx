import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaView } from 'react-native';
import { images } from '../constants';
import React from 'react';

export default function App(){
  return (
    <SafeAreaView className='bg-primary'>
       <ScrollView contentContainerStyle= {{ height: '100%' }}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image 
            source={images.logo}
            className="w-[180px] h-[84px]"
            resizeMode="contain"
          />
          <Text className='bg-orange-500 font-psemibold'>
            Go to
          </Text>

        </View>
       </ScrollView>
    </SafeAreaView>
  );
  // return (
  //   <View className="flex-1 items-center justify-center">
  //     <Text style= {styles.tajuk}>
  //       Welcome abc
  //     </Text>
  //     <Link href='/home' className='text-3xl font-bold'>
  //       Go to Home
  //     </Link>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#161622',
    flex: 1
  },

  tajuk: {
    color: 'blue'
  }
});
