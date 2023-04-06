import { StyleSheet, View, TouchableOpacity, TextInput, Image, Dimensions } from 'react-native';
import { NativeBaseProvider, Text, Box, HStack, VStack} from 'native-base';
import Carousel, {Pagination}  from "react-native-snap-carousel"
import React, { useState, useRef, useEffect } from "react"

import { styles } from './HomeScreenStyle'

export default function HomeScreen(){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Welcome!</Text>
       </View>
    )
};
