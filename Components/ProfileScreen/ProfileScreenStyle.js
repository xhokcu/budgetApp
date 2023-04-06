import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderColor: '#9c5a5a' ,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
        width: 100,
      },
    button: {
          backgroundColor: '#eca0a0',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#eca0a0',
          padding: 10,
          alignItems: 'center',
          margin: 10,
      },
      heading: {
          textAlign:"center",
          fontSize: 17,
          marginTop: 20,
          color: "#8a1d1d"
      },
      mainContainer:{
          flexDirection: "row",
          padding: 20,
          gap: 40,
          alignItems: "center",
          justifyContent: "center"
      },
      buttonContainer: {
          alignItems: "center",
      },
      ellipse: {
          backgroundColor: "#c7c1c1",
          width: 50,
          height: 50,
          borderRadius: 30,
          alignItems: "center",
          flexDirection: "column", 
          justifyContent: "center"
      },
      listContainer: {
          flexDirection: "row",
          borderWidth: 2,
          borderColor: "#a1a1a1",
          margin: 15,
          borderRadius: 20,
          padding: 20,
          justifyContent: "space-between"
      },
      numberContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
  });
