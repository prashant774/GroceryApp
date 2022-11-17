import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const BoxItemTopProduct = ({bgColor, url, text, price,kg}) => {
  return (
   
    <TouchableOpacity style={styles.container(bgColor)}>
      <View>
        <View>
        <Ionicon
        name="heart-outline"
        color="#000000"
        size={26}
        style={styles.icon2}></Ionicon>
          <Image source={{ uri: url }} style={styles.image} />
          <View style={styles.kgbox}>
            <Text style={styles.kgtext}>{kg}</Text>
          </View>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.price}>
          <Text style={styles.wrapperButtom}>${price}</Text>
        </View>
        <View style={styles.cart}>
            <View style={{flexDirection: 'row'}}>
            <Ionicon
                name="basket"
                color="#9bad95"
                size={16}
            ></Ionicon>
            <Text style={styles.cartetxt}>ADD TO CART</Text>
            </View>
        
        </View>
      </View>
    </TouchableOpacity>
   
  );
};

export default BoxItemTopProduct;

const styles = StyleSheet.create({
  container: bgColor => ({
    height: 230,
    width: 170,
    backgroundColor: bgColor,
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 10,
  }),
  text: {
    // paddingLeft: 10,
    fontSize: 19,
    alignSelf: 'center',
    fontWeight: '500',
    color: '#525254'
  },
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignSelf: 'center',
    
  },
  wrapperButtom: {
    fontSize: 18,
    fontWeight: '500',
    color: '#525254'
  },
  image: {
    height: 110,
    width: 110,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  textt:{
    alignSelf: 'center',
  },
  icon2: {
    position: 'absolute',
    top: 6,
    right: 6
  },
  kgbox:{
    height:22,
    width:60,
    backgroundColor: '#245b0b',
    alignSelf: 'center',
    borderRadius: 5
  },
  kgtext:{
    color: '#ffffff',
    alignSelf: 'center',
  },
  cart:{
    alignSelf: 'center',
    margin: 8
  },
  cartetxt:{
    color: '#7d9173',
    fontWeight: '700'
  }
});
