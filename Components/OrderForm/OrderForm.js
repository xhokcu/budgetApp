import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, Image, ScrollView, FlatList } from 'react-native';
import { Text, HStack, VStack} from 'native-base';

import { styles } from './OrderFormStyle.js'

export default function OrderForm({
    handleInput,
    addInput,
    text
}){

    return (
        <View style={styles.subContainer}>
                <Text style={styles.heading}>ADD AN ORDER</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.input}>
                        <TextInput 
                        onChangeText={handleInput} 
                        placeholder="Add an order"
                        value={text} 
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={addInput} >
                        <Text>
                            ADD
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
};