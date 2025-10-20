import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#000000ff",
    justifyContent: "space-around",
    alignItems: "center",
  },
  header:{
    borderColor: "#00c91bff",
    width: "90%",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    flexDirection: "row",
    gap:50
  },
  form:{
    flex: 1,
    justifyContent: "space-evenly",
    height: "60%",
    padding: 10,
    width: "90%",
    fontSize: 20,
    marginTop: 10,
    backgroundColor: "#313131ff",
    borderRadius: 12,
    marginBottom: 20,
    borderColor: "#10771eff",
    borderWidth: 5,
  },
  dados:{
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: "#ffffffff",
    color: "#ffffffff",
    marginBottom: 20,
    paddingBottom: 5
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 12,
    textAlign: "center",
    justifyContent:"center",
    alignItems:"center"
  },
  botao:{
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#10771eff",
    padding: 10,
    borderRadius: 8
  },
  voltar:{
    color:"white",
    fontSize: 15,
    alignItems: "flex-start",
    justifyContent:"flex-start",
  },
});