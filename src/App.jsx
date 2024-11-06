import { useState } from "react";
import PuppyList from "./PuppyList.jsx";
import PuppiesDetails from "./PuppiesDetails.jsx";
const App = () => {
  const [showList, setShowList] = useState(true);
  const [userDetails, setUserDetails] = useState({});
  return (
    <>
    <h1>Puppy Bowl</h1>
    {
      showList ?
      <PuppyList  setShowList = {setShowList} setUserDetails={setUserDetails}/> :
      <PuppiesDetails userDetails = {userDetails} setShowList= {setShowList}/>
    }
    
    </>
  )
}

export default App
