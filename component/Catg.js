import React from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'

import Categories from '../Categories'


const { width, heigth } = Dimensions.get('window')

const Catg = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)


    if (data && data.length) {
        return (
            <View>
                <View style={styles.wrapperHeadTopProducts}>
        <Text style={styles.tittleTopProducts}>Categories</Text>
        <Text style={styles.textSeeAll}>See All</Text>
        </View>
                <FlatList data={data}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return <Categories item={item} />
                    }}
                    onScroll = {Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX }}}],
                        {useNativeDriver: false}
                    )}
                />
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    flex1: {flex: 1},
    wrapperHeadTopProducts: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 14,
      marginBottom: 10,
    },
    tittleTopProducts: {
    color: '#333237', 
    fontStyle: 'normal',
    fontWeight: '600',    
      fontSize: 25,
      fontFamily: 'roboto'
    },
    textSeeAll: {
        color: '#333237', 
        fontStyle: 'normal',
        fontWeight: '600',    
          fontSize: 25,
          fontFamily: 'roboto'
    },
})

export default Catg
