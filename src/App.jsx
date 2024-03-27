import { puppyList } from "./data.js"
import { useState } from "react"

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  function handleClick() {
  }

  console.log(featuredPup)
  return (
    <>
      <div>
        {featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>email:{featPupId.email}</li>
              <li>Age:{featPupId.age}</li>
              <img className="puppy-img" src={featuredPup.image} />
            </ul>
          </div>
        )}
        {
          puppies.map((puppy) => {
            return <p onClick={() => { setFeatPupId(puppy.id) }}
              key={puppy.id}>{puppy.name}</p>
          })
        }
      </div>
    </>
  )
}



export default App
