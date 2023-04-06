import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        margin: 20,
    },
    subContainer:{
        flexDirection: "column",
        backgrounColor: "#ffffff",
        marginTop: 10,
    },
    inputContainer:{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 20,
    },
    heading: {
        fontSize: 14,
        marginBottom: 10,
        fontWeight: "bold",
    },
    input: {
        width: 260,
        height: 40,
        borderWidth: 1,
        borderColor: "black",
        borderRadius:10,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 10
    },
    button: {
        backgroundColor: '#86C58C',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10,
        padding:5,
        height: 40,
        width: 50,
    },
    table:{
        borderBottomWidth: 1,
        borderColor: "black",
        paddingTop:5,
        paddingBottom:5,
        marginTop: 5,
        marginBottom: 5,
        width: 330,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    tableLeft: {
        flexGrow: 5,
    },
    tableText: {
        fontSize: 15,
    },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      }
  });