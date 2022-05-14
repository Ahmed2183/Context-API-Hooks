import React, {useContext} from "react"; //useContext is for using Context
import {GlobalInfo} from '../App'; //import from App.js
import SuperChild from "./SuperChild"; //import SuperChild.js

function Child() {

 const {appColor} = useContext(GlobalInfo);  //-->use Context here
  //Here appColor is in App.js where we provide in <GlobalInfo.Provider> in value

  return (
    <div>
      <h1 style={{color:appColor}}>Child Component</h1>  {/*-->use appColor here in tag */}
      <SuperChild/>
    </div>
  );
}

export default Child;
