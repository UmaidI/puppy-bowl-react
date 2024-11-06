import { useEffect, useState } from "react";
const PuppyList = ({setShowList, setUserDetails}) => {
  const [cuteDogs, setCuteDogs] = useState([]);
  useEffect(() => {
    const getPuppies = async () => {
      const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players`);
      const puppies = await response.json();
      const players = puppies.data.players;
      console.log(players);
      setCuteDogs(players);
    }
    getPuppies()
  }, []);
  const userClicked = (puppy) => {
    setShowList(false);
    setUserDetails(puppy);
  }
  
  return(
    <ol>
    {
      cuteDogs.map((individualPuppy) => {
        return <li 
          onClick={()=> userClicked(individualPuppy)}
           key={individualPuppy.id}>
            {individualPuppy.name}
          </li>
      })
    }
    </ol>
  )
}
export default PuppyList