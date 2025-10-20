
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000ff"
    },
    plus: {
        padding:30,
        alignItems: "center",
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
 title: {
        color: "#006426ff",
        fontSize: 25,
        marginBottom: 12
    },
    card: {
        flex:1,
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        marginBottom: 10,
        borderBottomColor: "#028837ff",
        borderBottomWidth: 1
    },
    nome: {
        fontSize: 15,
        color: "#ffffffff"
    },
    estilo: {
        fontStyle: "italic",
        color: "#fff"
    },
   
    lista: {
        alignSelf: 'stretch'
    }
});

export default styles;