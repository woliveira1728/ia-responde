import React, { useState, useEffect } from "react";
//import React, { useState, useEffect } from 'react';
// // import { View, Text, TextInput } from 'react-native';
import {AppRegistry} from 'react-native';
import { Configuration, OpenAIApi } from 'openai';
import { ActivityIndicator } from "react-native";
import { SafeAreaView,
         StyleSheet,
         TextInput,
         Text,
         View,
         ScrollView,
         Image,
         Dimensions } from "react-native";
import 'react-native-url-polyfill/auto';

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const { width } = Dimensions.get("screen");
const { height } = Dimensions.get("screen");

const UselessTextInput = () => {
  const [text, onChangeText] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  function loader(){
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 37000);
  }

    const handleSubmit = async () => {
    // Send the user's input to the GPT-3 API
    const response = await openai.createCompletion({
      model: "davinci",
      prompt: text,
      max_tokens: 1024,
      temperature: 0.5,
    });
    // Update the chatbot's output with the response
    console.log(response.data.choices[0].text);
    setOutput(response.data.choices[0].text);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.logoContainer}>
          { height <= 1080 &&
            
            <Image source={require("../assest/logoiaresponde.jpeg")} style={styles.logo} />

          }

          { height >= 1080 &&
            
            <Image source={require("../assest/logoiaresponde.jpeg")} style={styles.logoTab} />

          }


        </View>
        <TextInput
          style={styles.input}
          placeholder="Faça sua pergunta"
          onChangeText={onChangeText}
          onSubmitEditing={handleSubmit}
          onEndEditing={loader}
          value={text}
        />
        { loading === true && height <= 1080 && 
          <View>
            <ActivityIndicator 
              size="large"
              color="#228B22"
              animating={true}
              style={{
                alignItems: "center",
                flex:1,
                justifyContent:'center',
                paddingTop: 135,
              }}
            />
            <Text style={{
                alignItems: "center",
                flex:1,
                justifyContent:'center',
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: 20,
              }}>Carregando informações...</Text>
          </View> }
          { loading === true && height >= 1080 && 
          <View>
            <ActivityIndicator 
              size="large"
              color="#228B22"
              animating={true}
              style={{
                alignItems: "center",
                flex:1,
                justifyContent:'center',
                paddingTop: 220,
              }}
            />
            <Text style={{
                alignItems: "center",
                flex:1,
                justifyContent:'center',
                textAlign: "center",
                fontWeight: "bold",
                paddingTop: 20,
              }}>Carregando informações...</Text>
          </View> }
        { loading === false && <Text style={styles.output}>{output}</Text>}       
       </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#228B22',
    padding: 12,
  },
  output: {
    height: "auto",
    margin: 12,
    padding: 10,
    fontWeight:"bold",
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: width,
    height: 285,
  },
  logoTab: {
    width: width,
    height: 600,
  }
});

export default UselessTextInput;