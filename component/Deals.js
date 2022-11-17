import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BoxItemTopProduct from './BoxItemTopProduct';

const Deals = () => {
    const dataTopProducts = [
        {
          name: 'Fresh Orenge',
          url: 'https://3.bp.blogspot.com/-5E1CCdiqvFM/Uwm-o7vwekI/AAAAAAAAOBc/IKmUvw_nNQY/s1600/Orange-Fruits.jpg',
          bgColor: '#ffffff',
          price: 42.60,
          desc: "1 kg"
        },
        {
          name: 'Tomato',
          url: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
          bgColor: '#ffffff',
          price: 11.53,
          desc: "500 gm",
        },
        {
          name: 'Lady Finger',
          url: 'https://zagfresh.com/wp-content/uploads/2020/06/lf4.jpg',
          bgColor: '#ffffff',
          price: 21.3,
          desc: "500 gm",
        },
        {
          name: 'Cauliflower',
          url: 'https://m.media-amazon.com/images/I/91EdPVzD99L._SL1500_.jpg',
          bgColor: '#ffffff',
          price: 4.53,
          desc: "1 kg"
        },
        {
          name: 'Grapes',
          url: 'https://iranfreshfruit.net/wp-content/uploads/2020/01/green-grapes.jpg',
          bgColor: '#ffffff',
          price: 8.3,
          desc: "500 gm",
        },
        {
          name: 'Pineapple',
          url: 'https://m.media-amazon.com/images/I/71bNsWlkyeL._SL1500_.jpg',
          bgColor: '#ffffff',
          price: 19.5,
          desc: "1 kg"
        },
      ];
  return (
   
    <View>
        <View>
        <Text style={styles.titleCategories}>Grocery Deals</Text>
        </View>
        <View>
        <View style={styles.sectionBoxTopProduct}>
              {dataTopProducts.map((item, index) => {
                return (
                  <BoxItemTopProduct
                    key={index}
                    bgColor={item.bgColor}
                    url={item.url}
                    text={item.name}
                    kg={item.desc}
                    price={item.price}
                  />
                );
              })}
          </View>  
        </View>
    </View>
    
    
  )
}

export default Deals;

const styles = StyleSheet.create({
    titleCategories: {
        fontSize: 24,
        paddingLeft: 18,
        color:'#373739',
        fontWeight: '500'
      },
      sectionBoxTopProduct: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }
})
