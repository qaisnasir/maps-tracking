import React,{useState} from 'react';
import { StyleSheet, 
        TextInput, 
        SafeAreaView, 
        Text, 
        View,
        Button} 
        from 'react-native';
import { auth } from './Firebase';
export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSignIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user
            console.log("Logged In With :",user,email)
            navigation.navigate("Welcome")
        })
        .catch(error => alert(error.message))
    }
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.box}>
            <Text style={styles.txt}>Login</Text>
            <TextInput 
            style={styles.input}
            keyboardType="email-address"
            placeholder='Email'
            value={email}
            onChangeText={setEmail}>            
            </TextInput>

            <TextInput 
            style={styles.input}
            secureTextEntry={true}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}/>

            <Button 
            title='LogIn'
            onPress={handleSignIn}
            style={styles.btn}
            />
        </View>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    txt:{
        fontSize:16,
        fontWeight:"bold"
    },
    box:{
        height:400,
        width:"90%",
        margin:10
    },
    input:{
        height:40,
        padding:10,
        margin:12,
        borderWidth:0.5,
        marginVertical:25
    },
    btn:{
        width:"90%"
    }
})