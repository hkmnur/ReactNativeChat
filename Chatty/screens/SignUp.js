import React,{useState} from "react";
import { Text ,View} from "react-native";
import { TextInput ,Button} from "react-native-paper";
import firebase from 'firebase/app'


const SignUp = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState("");

    const createAccount = async () =>{
        console.warn('hi!!');
        setIsLoading(true)
        try{
            const response= await firebase
                .auth()
                .createUserWithEmailAndPassword(email,password);
            await response.user.updateProfile({displayName: name});
            setIsLoading(false);
        }catch(e) {
            setIsLoading(false);
            alert(e.message)
        }

    };

    return(
        <View style={{margin:16}}>
            <TextInput 
                label="Name" 
                value={name} 
                onChangeText={(text) => setName(text)}
            />
            <TextInput 
                label="Email" 
                style={{marginTop:12}}
                value={email} 
                onChangeText={(text) => setEmail(text)} 
            />
            <TextInput 
                label="Password" 
                style={{marginTop:12}}
                value={password} 
                onChangeText={(text) => setPassword(text)} 
            />
            <View 
                style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    marginTop:16
                }}
            >
                <Button compact>Sign In</Button>
                <Button 
                    mode="contained" 
                    onPress={()=> createAccount()} 
                    loading={isLoading}
                >
                        Sign Up
                </Button>
            </View>

        </View>
    );
};

export default SignUp;