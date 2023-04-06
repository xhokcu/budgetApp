import React, {useState} from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, Alert, Modal, Pressable } from 'react-native';
import { NativeBaseProvider, Text, Box, HStack, VStack} from 'native-base';

// Style
import { styles } from './ProfileScreenStyle';

import { Ionicons } from '@expo/vector-icons';


export default function ProfileScreen(){

    const [modalVisible, setModalVisible] = useState(false);

    return(
       <>
        {/* MODAL */}
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
        </Modal>
        {/* **************** */}
        <Text style={styles.heading}>Groups</Text>
        {/* HEADER BUTTONS */}
        <View style={styles.mainContainer}>
            {/* 1.Buton */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.ellipse} onPress={() => setModalVisible(true)}>
                    <Ionicons name="add-outline" size={30}></Ionicons>
                </TouchableOpacity>
                <Text>Add Group</Text>
            </View>
            {/* 2.Buton */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.ellipse}>
                    <Ionicons name="arrow-redo-outline" size={30}></Ionicons>
                </TouchableOpacity>
                <Text>Join Group</Text>
            </View>

        </View>
        {/* LIST OF GROUPS */}
        <View>
            <View style={styles.listContainer}>
                <Text>İş Yemeği</Text>
                <View style={styles.numberContainer}>
                    <Ionicons name="people-circle-outline" size={30}></Ionicons>
                    <Text>+15</Text>
                </View>
            </View>
        </View>
       </>
    )
};
