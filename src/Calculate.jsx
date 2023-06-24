import { useEffect, useState } from 'react'
import './App.css'
export function Calculate({stack}) {
    const [result,setResult] = useState(0)
        useEffect(() => {
          if(stack.length > 0) {
            console.log('Calculating...')
            console.log(stack)
          }
          }, [stack])

        useEffect(() => {
          result > 0 && console.log('Current Result is ' + result)
          }, [result])

    function calculate_result() {
        let length = stack.length
        let popped_element = ''
        let current_operator = ''
        let current_result = 0
        let operators = ['+','-']
        console.log('length of stack received: ' + stack.length)
        for (let i = 0; i < length; i++) {
          popped_element = stack.pop()

         if (!isNaN(popped_element)){
         current_result = parseInt(popped_element)
        }
        if (current_operator === '') {
          for (let i = 0; i < operators.length && isNaN(popped_element); i++) {
            if (popped_element === operators[i]) {
              /* 
              TODO: match symbols, if a certain operator do math expression.
              */
              current_operator = operators[i]
              break;
            }
          }
          if (current_operator !== '') {
            continue
          }
        }
         if(current_operator !== '') {
          if (current_operator === '+') current_result = current_result + parseInt(popped_element)
          current_operator = ''
         } 

        }
        setResult((previous_result) => previous_result + current_result)

      }
      if(stack.length > 0) {
        calculate_result()
      }

    return (
        <h3>{result > 0 && result}</h3> //State is not being confirmed prior to render. Need to fix
    )
}