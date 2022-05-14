import React, {useContext} from "react"; //useContext is for using Context
import {GlobalInfo} from '../App'; //import from App.js

function OtherChild() {

 const {appColor} = useContext(GlobalInfo);  //-->use Context here
  //Here appColor is in App.js where we provide in <GlobalInfo.Provider> in value

  return (
    <div>
      <h1 style={{color:appColor}}>Other Child Component</h1>  {/*-->use appColor here in tag */}
    </div>
  );
}

export default OtherChild;
