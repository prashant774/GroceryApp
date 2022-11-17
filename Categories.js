import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

const Categories = ({ item }) => {
   
  return (
    <View>
        <View>
            <ScrollView>
            <View style={styles.cat1}>
            <View style={[styles.cat2, {backgroundColor: item.bgcolor}]}>
                <Image style={styles.catimg} source={{ uri: item.url }}/>
                    <View style={styles.catimgtext}>
                        <Text style={{color: item.txt1,fontSize: 15, fontWeight: '700'}}>{item.title}</Text>
                        <Text style={{color:item.txt2,fontSize: 15, fontWeight: '700'}}>{item.description}</Text>
                    </View>
            </View>
        </View>
            </ScrollView>
        </View>
        
    </View>
    
  )
}

export default Categories;

const styles = StyleSheet.create({
    flex1: {flex: 1},
    cat1:{
        flexDirection: 'row'
    },
    cat2:{
        marginLeft: 15,
        height: 120,
        width: 100,
        borderRadius: 10
    },
    catimg:{
        position: 'absolute',
        height: 70,
        width: 100,
        borderRadius: 5
    },
    catimgtext:{
        top: 75,
        justifyContent: 'center',
        alignItems: 'center',
    }
  });
