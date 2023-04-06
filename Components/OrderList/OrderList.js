import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, Image, ScrollView, FlatList } from 'react-native';
import { Text, HStack, VStack} from 'native-base';

// Style
import { styles } from './OrderListStyle';

import OrderListItem from '../OrderListItem/OrderListItem' 

export default function OrderList({
    data
}){
    return (
        <View style={styles.subContainer}>
                <Text style={styles.heading}>LIST OF ORDERS</Text>
                <FlatList
                    data={data}
                    renderItem={(item, index) =>{
                        return(
                            <View key={index}>
                                <OrderListItem item={item}/>
                            </View>
                        )
                    }}
                    keyExtractor={(item, index) =>{
                        return item.id;
                    }}
                />
            </View>
    )
};