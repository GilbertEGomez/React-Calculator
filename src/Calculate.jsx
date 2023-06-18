import { useEffect, useState } from 'react'
import './App.css'
export function Calculate({stack}) {

    const [result,setResult] = useState(0)
        useEffect(() => {
            calculate_result()
          }, [stack])
          useEffect(() => {
            console.log('Current Result is ' + result)
            }, [result])

    function calculate_result() {
        let result_of_stack = stack;
        let length = result_of_stack.length
        let popped_element
        let operators = ['+','-']
        console.log(result_of_stack.length)
        for (let i = 0; i < length; i++) {
          console.log("--------")
          popped_element = result_of_stack.pop()
          console.log(popped_element)
          for (let i = 0; i < operators.length; i++) {
            if (popped_element === operators[i]) {
              /* 
              TODO: match symbols, if a certain operator do math expression.
              */
            }
            else {
              if (result === 0 || result > 0){ // TODO: Change this temporary boolean expression to === 0 only
                setResult(() => parseInt(popped_element))
              }
            }
    
          }
        }
      }

    return (
        <h3>{result}</h3>
    )
}