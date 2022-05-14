import React, {useContext} from "react"; //useContext is for using Context
import {GlobalInfo} from '../App'; //import from App.js

function SuperChild() {

 const {appColor,getDay} = useContext(GlobalInfo);  //-->use Context here
  //Here appColor and getDay is in App.js where we provide in <GlobalInfo.Provider> in value

  const day = "Sunday";

  return (
    <div>
      <h1 style={{color:appColor}}>Super Child Component</h1>  {/*-->use appColor here in tag */}
      <button onClick={()=>getDay(day)}>Click To Change Day</button> {/*-->Call getDay here and pass day variable in getDay parameters */}
    </div>
  );
}

export default SuperChild;
