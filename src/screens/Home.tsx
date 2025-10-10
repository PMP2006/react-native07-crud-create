import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Pressable} from 'react-native';
import { Ionicons } from "@expo/vector-icons"; //ícones
import styles from './HomeStyles';
import axios from 'axios'; //manipulação dos dados da API

export function Home({ navigation }: any) {
    const [musicas, setMusicas] = useState<any[]>(); //useState recebendo um vetor

    function navToRegister() {
        navigation.navigate("register");
    }

    useEffect(() => { //useEffect 
        axios.
            get("http://127.0.0.1:8000/api/musicas")
            .then((res) => setMusicas(res.data))
            .catch((err) => console.error("Erro ao carregar músicas:", err))
    }, [])

    console.log(musicas);

    return (
        <View style={styles.container}>
            <View style={styles.plus}>
                <Text style={styles.title}>
                    🎵 Lista de Músicas
                </Text>
                <Pressable onPress={navToRegister}>
                    <Ionicons name="add-circle" size={30} color="#fff" />
                </Pressable>
            </View>
            <FlatList
                style={{flex:1}}
                contentContainerStyle={{ padding: 16 }}
                data={musicas}
                //keyExtractor={(item) => item.id.toString()}
                keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.nome}>#{item.id}</Text>
                        <View style={{ flex: 1, justifyContent: "space-evenly", marginLeft: 10 }}>
                            <Text style={[styles.nome, { fontWeight: "bold" }]}>{item.nome}</Text>
                            <Text style={styles.nome}>{item.compositor}</Text>
                        </View>
                        <View>
                            <Text style={styles.nome}>{item.duracao}</Text>
                            <Text style={styles.estilo}>{item.estilo}</Text>
                        </View>
                        <Ionicons name="play-circle" size={30} style={{ marginLeft: 10, color: "#3057f3ff" }} />
                    </View>
                )}
            />
        </View>
    );
}