import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Calculate } from './Calculate'

function App() {
  const [stack, setStack] = useState([])

  useEffect(() => {
    console.log(stack)
  }, [stack])
  


  function onsubmission(e) {
    e.preventDefault()
    console.log(e)
    console.log(e.target[0])
    console.log(e.target[0].value)
    let target2 = e.target[0].value
    let str_length = target2.length
    for (let i = 0; i < str_length; i++) {
     // console.log(target2[i])
      setStack((current_stack) => {
        return [...current_stack,
                target2[i]
      ]})
    }
  }


  return (
    <>

    <h1>Calculator</h1>

    <div className='input-box'>
    <form onSubmit={onsubmission}>
      <label id='calculator'>Input:</label>
      <input htmlFor = 'calculator'  type='text'  name ='result'/>
      <button type="submit">Submit</button>
    </form>

    </div>

    <div>
    {stack}
    {(stack.length > 0) && <Calculate stack = {stack}/>}
    </div>
    </>
    
  )
}

export default App
