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

const initialFormValues = {
  petName: '',
  petType: ''
}

function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState(initialFormValues)

  const change = event => {
    const { name, value } = event.target
    console.log(name)
    console.log(value)
    setFormValues({ ...formValues, [name]: value })
  }

  const submit = event => {
    event.preventDefault()
    const newPet = {
      // .trim() removes blank spaces
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim()
    }
    //Both codes below work for submitting the petName and petType to the array
    // setPets(pets.concat(newPet))
    setPets([...pets, newPet])
    setFormValues(initialFormValues)
  }

  return (
    <div className='container'>
      <h1>Simple Form App</h1>
      {pets.map((pet, index) => {
        return (<div key={index} >
          {pet.petName} is a {pet.petType}
        </div>)
      })}
      <form onSubmit={submit}>
        <input
          type={'text'}
          onChange={change}
          value={formValues.petName}
          name={'petName'}
        />

        <input
          type={'text'}
          onChange={change}
          value={formValues.petType}
          name={'petType'}
        />

        <button onClick={null}>Submit</button>
      </form>
    </div >
  )
}

render(
  <>
    {/* <SimpleForm /> */}
    <App />
  </>
  , document.querySelector('#root')
)
