import { useEffect, useState } from 'react'
import './App.css'
export function Calculate({stack}) {

    const [result,setResult] = useState(0)
    const [operation,setOperation] = useState('')
        useEffect(() => {
          if(stack.length > 0) {
            console.log('Calculating...')
            console.log(stack)
            calculate_result()
          }
          }, [stack])
          useEffect(() => {
            result > 0 && console.log('Current Result is ' + result)
            }, [result])
            useEffect(() => {
              operation !== '' && console.log('Current operation is ' + operation)
              }, [operation])

    function calculate_result() {
        let length = stack.length
        let popped_element
        let operators = ['+','-']
        console.log('length of stack received: ' + stack.length)
        for (let i = 0; i < length; i++) {
          popped_element = stack.pop()

         if (!isNaN(popped_element)){
          setResult(() => parseInt(popped_element))
        }
        if (operation === '') {
          for (let i = 0; i < operators.length && isNaN(popped_element); i++) {
            if (popped_element === operators[i]) {
              /* 
              TODO: match symbols, if a certain operator do math expression.
              */
              setOperation(popped_element)
              break;
            }
          }
          if (operation !== '') {
            continue
          }
        }
         if(operation !== '') {
          if (operation === '+') setResult(result + parseInt(popped_element))
          setOperation('')
         } 

        }
      }

    return (
        <h3>{result > 0 && result}</h3> //State is not being confirmed prior to render. Need to fix
    )
}