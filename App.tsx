import { ScreenA } from './scr/screens/screenia1';
import  UselessTextInput from './scr/screens/screenia2';
import { useState } from "react";
import { View } from 'react-native';
import { React, useEffect } from 'react';


export default function App() {

  const [loadScreen, setLoadScreen] = useState(false);

  function screenLoader(){
    setLoadScreen(true);
    setTimeout(() => {
      setLoadScreen(false);
    }, 5000);
  }

  useEffect(()=>{
    screenLoader();
  },[]);
  
  if ( loadScreen === true ) {
    return (
      <ScreenA />
    )
  } else {
    return (
      <UselessTextInput />
    )
  }
}