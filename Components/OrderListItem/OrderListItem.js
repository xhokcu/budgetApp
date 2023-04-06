import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, Image, ScrollView, FlatList } from 'react-native';
import { Text, HStack, VStack} from 'native-base';

import { styles } from './OrderListItemStyle'

export default function OrderListItem ({
    item
}){
    return (
        <View style={styles.table}>
            <View style={styles.tableLeft}>
                <Text
                    style={styles.tableText} 
                >
                    {item.item.text}
                </Text>
            </View>
            <View style={styles.tableMiddle}>
            </View>
        </View>
    )
};