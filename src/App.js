import "./App.css";
import React, {createContext, useState} from "react"; //createContext is for create Context and useState is for suing state
import Child from "./components/Child";
import OtherChild from "./components/OtherChild";//import OtherChild.js

//GlobalInfo is just name use any names which you want
export const GlobalInfo = createContext(); //-->create Context here

function App() {

  const [color,setColor] = useState("green");
  const [day,setDay] = useState("Monday");

  const getDayFromSuperChild=(item)=>{
    // console.log(item);
      setDay(item); //Update State 
  }

  return (
    //This state color which is in value={{appColor : color}} are apply on all components which are inside in <GlobalInfo.Provider></GlobalInfo.Provider>
    //color is state name
    //getDayFromSuperChild is function name
    //appColor and getDay are like variable names use any names which you want
    <GlobalInfo.Provider value={{appColor : color, getDay: getDayFromSuperChild}}>
    <div className="App">
      <h1>App Component</h1>
      <h2>Today is: {day}</h2>  {/*Call State day*/}
      <Child/> 
      <OtherChild/>
    </div>
    </GlobalInfo.Provider>
  );
}

export default App;
