import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState({ petName: "", petType: "" });

  const change = (evt) => {
    console.log(evt.target.name, evt.target.value);
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  }

  const submit = (evt) => {
    evt.preventDefault();
    const newPet = {
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim()
    }

    setPets(pets.concat(newPet));
    // setPets([ ...pets, newPet ]);
    setFormValues({ petName: "", petType: "" })
  }

  return (
    <div className="container">
      {pets.map((pet, idx) => (
        <p key={idx}>petName: {pet.petName} petType: {pet.petType} </p>
      ))}

      <form onSubmit={submit}>
        <input 
          type="text" 
          name="petName" 
          onChange={change} 
          value={formValues.petName} 
        />
        <input
          type="text"
          name="petType"
          onChange={change}
          value={formValues.petType}
        />
        <input type="submit" value="MAKE A PET" />
      </form>
    </div>
  )
}

render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.querySelector('#root')
)
