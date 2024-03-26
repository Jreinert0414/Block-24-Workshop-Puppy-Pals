import { puppyList } from "./data.js"
import { useState } from "react"

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  function handleClick() {
    
  }
  const featuredPup = puppies.find((pup)=>pup.id===featPupId)
  console.log(featuredPup)
  return (

    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{setFeatPupId(`puppy id: `,puppy.id)}}
           key={puppy.id}>{puppy.name}
           {featPupId && <p>{featPupId}</p>}
          </p>
        );
      })}
    </div>
    
    )
 
}

export default App
