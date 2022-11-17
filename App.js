import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Carousel from './component/Carousel'
import Catg from './component/Catg';
import Deals from './component/Deals';
import {dummyData} from './data/Data'
import { imgData } from './data/images';

const App = () => {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.container}>
        <View style={{marginLeft:15,marginRight:15}}>
        <Ionicon
        name="grid-outline"
        color="#000000"
        size={32}
        style={styles.icon1}></Ionicon>
        <Ionicon
        name="basket-outline"
        color="#000000"
        size={32}
        style={styles.icon2}></Ionicon>
        <Ionicon
        name="search-outline"
        color="#000000"
        size={32}
        style={styles.icon3}></Ionicon>
        </View>
        <View style={{marginTop:63}}>
          <Carousel data = {dummyData}/>
        </View>
        <View style={{marginTop:10}}>
          <Catg data = {imgData}></Catg>
        </View>
        <View style={{marginTop:20}}>
          <Deals/>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },
  icon1:{ 
    position: 'absolute',
    top: 15,
  },
  icon2:{
    position: 'absolute',
    right: 0,
    top: 15,
  },
  icon3:{
    position: 'absolute',
    right: 45,
    top: 15,
  },
});

export default App;
