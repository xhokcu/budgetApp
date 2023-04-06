import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, Image, ScrollView, FlatList } from 'react-native';
import { Text, HStack, VStack} from 'native-base';

// Style
import { styles } from './OrderScreenStyle';

// Components
import OrderForm from '../OrderForm/OrderForm'
import OrderList from '../OrderList/OrderList'

export default function OrderScreen(){

    const [text, setText] = useState();
    // datayı handle etmek icin
    const [listData, setListData] = useState([]);

    const handleInput = (value) =>{
        setText(value)
    };

    // objenin text ve key olmak uzere 2 tane propertysi var
    const addInput = () =>{
        if(text != '') {
            setListData((currentData) => [
                ...currentData,
                {text: text, id: Math.random().toString()},
            ])
            setText('');
        }
    };

    return (
        <View style={styles.container}>
            <OrderForm handleInput={handleInput} addInput={addInput} text={text}/>
            <OrderList data={listData}/>
        </View>
    )
};

